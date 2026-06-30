"use client";

import { useEffect, useRef } from "react";

// ── Config (frozen to prevent accidental runtime mutation) ───────────────────
const CONFIG = Object.freeze({
  // Particle density: 1 particle per N screen px². Clipped to min/max.
  particleDensity: 8000,
  maxParticles: 160,
  minParticles: 60,

  // Brand palette — purple, teal, violet
  colors: Object.freeze([
    "rgba(108, 99, 255,",  // #6C63FF accent-primary
    "rgba(0, 212, 170,",   // #00D4AA accent-secondary
    "rgba(162, 155, 254,", // #A29BFE accent-violet
  ]),

  dotRadius:  Object.freeze({ min: 1,    max: 2.5  }),
  speed:      Object.freeze({ min: 0.08, max: 0.32 }),
  dotOpacity: Object.freeze({ min: 0.3,  max: 0.9  }),

  connectionDistance: 160,
  mouseRadius:        180,   // px — lines brighten near cursor
  mouseForce:         0.012, // attraction strength per frame
  lineOpacity:        0.22,  // base max line alpha
});
// ─────────────────────────────────────────────────────────────────────────────

/** Linear interpolation */
const lerp = (a, b, t) => a + (b - a) * t;

/** Random float in [min, max) */
const randomBetween = (min, max) => min + Math.random() * (max - min);

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset(true);
  }

  reset(initial = false) {
    const { width, height } = this.canvas;
    this.x = Math.random() * width;
    this.y = initial
      ? Math.random() * height
      : Math.random() < 0.5 ? -8 : height + 8;

    const angle = Math.random() * Math.PI * 2;
    const spd   = randomBetween(CONFIG.speed.min, CONFIG.speed.max);
    this.vx = Math.cos(angle) * spd;
    this.vy = Math.sin(angle) * spd;

    this.radius    = randomBetween(CONFIG.dotRadius.min, CONFIG.dotRadius.max);
    this.colorBase = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)];
    this.opacity   = randomBetween(CONFIG.dotOpacity.min, CONFIG.dotOpacity.max);
    this.pulseSpeed = randomBetween(0.004, 0.012);
    this.pulsePhase = Math.random() * Math.PI * 2;
  }

  update(mouse) {
    this.pulsePhase += this.pulseSpeed;

    // Gentle mouse attraction
    if (mouse.x !== null) {
      const dx   = mouse.x - this.x;
      const dy   = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseRadius && dist > 1) {
        this.vx += (dx / dist) * CONFIG.mouseForce;
        this.vy += (dy / dist) * CONFIG.mouseForce;
      }
    }

    // Speed cap
    const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (spd > CONFIG.speed.max * 2) {
      this.vx = (this.vx / spd) * CONFIG.speed.max * 2;
      this.vy = (this.vy / spd) * CONFIG.speed.max * 2;
    }

    // Drift back toward natural speed
    const targetSpd = randomBetween(CONFIG.speed.min, CONFIG.speed.max);
    const ratio = targetSpd / (spd || 1);
    this.vx = lerp(this.vx, this.vx * ratio, 0.02);
    this.vy = lerp(this.vy, this.vy * ratio, 0.02);

    this.x += this.vx;
    this.y += this.vy;

    // Edge wrap
    const { width, height } = this.canvas;
    if (this.x < -10)          this.x = width  + 10;
    if (this.x > width  + 10)  this.x = -10;
    if (this.y < -10)          this.y = height + 10;
    if (this.y > height + 10)  this.y = -10;
  }

  draw(ctx) {
    const pf = 0.85 + 0.15 * Math.sin(this.pulsePhase);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * pf, 0, Math.PI * 2);
    ctx.fillStyle = `${this.colorBase}${this.opacity * pf})`;
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const stateRef  = useRef({
    particles: [],
    mouse:     { x: null, y: null },
    animId:    null,
    paused:    false, // true while tab is hidden
  });

  useEffect(() => {
    // ── Respect prefers-reduced-motion ────────────────────────────────────
    // Users who enable this in their OS accessibility settings should not see
    // distracting motion. We render nothing and return early.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── HiDPI / Retina support ─────────────────────────────────────────────
    // Scale the canvas drawing surface by the device pixel ratio so dots and
    // lines are sharp on high-density screens.
    const dpr = window.devicePixelRatio || 1;
    const ctx  = canvas.getContext("2d");
    const state = stateRef.current;

    // ── Resize ────────────────────────────────────────────────────────────
    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // Physical pixel dimensions (sharp on HiDPI)
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      // Scale all draw calls to match logical CSS pixels
      ctx.scale(dpr, dpr);
      // Store logical dimensions for particle calculations
      canvas._logicalW = w;
      canvas._logicalH = h;

      const area  = w * h;
      const count = Math.min(
        CONFIG.maxParticles,
        Math.max(CONFIG.minParticles, Math.floor(area / CONFIG.particleDensity))
      );

      // Create a virtual sizing proxy so Particle reads logical dimensions
      const logicalCanvas = { width: w, height: h };
      state.particles = Array.from(
        { length: count },
        () => new Particle(logicalCanvas)
      );
      // Keep reference so update() can read current logical size
      state.logicalCanvas = logicalCanvas;
    };

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(canvas);
    resize();

    // ── Mouse tracking ────────────────────────────────────────────────────
    const onMouseMove = (e) => {
      const rect    = canvas.getBoundingClientRect();
      state.mouse.x = e.clientX - rect.left;
      state.mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      state.mouse.x = null;
      state.mouse.y = null;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // ── Visibility API — pause when tab is hidden ────────────────────────
    // Stops the RAF loop entirely while the tab is in the background, saving
    // CPU/GPU for the user and improving battery life on laptops.
    const onVisibilityChange = () => {
      state.paused = document.hidden;
      if (!state.paused && !state.animId) {
        draw(); // resume
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // ── Draw loop ─────────────────────────────────────────────────────────
    const draw = () => {
      if (state.paused) {
        state.animId = null;
        return; // tab hidden — stop scheduling new frames
      }

      state.animId = requestAnimationFrame(draw);

      const lw = canvas._logicalW || canvas.offsetWidth;
      const lh = canvas._logicalH || canvas.offsetHeight;
      ctx.clearRect(0, 0, lw, lh);

      const { particles, mouse, logicalCanvas } = state;

      // Update particles using logical canvas dimensions
      for (let i = 0; i < particles.length; i++) {
        particles[i].canvas = logicalCanvas;
        particles[i].update(mouse);
        particles[i].draw(ctx);
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a  = particles[i];
          const b  = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.connectionDistance) {
            const t = 1 - dist / CONFIG.connectionDistance;
            let alpha = CONFIG.lineOpacity * t * t;

            // Mouse proximity brightens nearby lines
            if (mouse.x !== null) {
              const mx = (a.x + b.x) / 2 - mouse.x;
              const my = (a.y + b.y) / 2 - mouse.y;
              const md = Math.sqrt(mx * mx + my * my);
              if (md < CONFIG.mouseRadius) {
                const boost = 1 + 2.5 * (1 - md / CONFIG.mouseRadius);
                alpha = Math.min(0.85, alpha * boost);
              }
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `${t > 0.5 ? a.colorBase : b.colorBase}${alpha})`;
            ctx.lineWidth   = Math.min(1, t * 1.2);
            ctx.stroke();
          }
        }
      }
    };

    draw();

    return () => {
      if (state.animId) cancelAnimationFrame(state.animId);
      state.animId = null;
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"        // purely decorative — hidden from screen readers
      tabIndex={-1}             // not keyboard-focusable
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        willChange: "transform", // hint: promote to own compositor layer
      }}
    />
  );
}

