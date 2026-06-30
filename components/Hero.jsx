"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, ArrowDown, Shield } from "lucide-react";

export default function Hero() {
  const [glitching, setGlitching] = useState(true);
  const [emailLink, setEmailLink] = useState("");
  const [visibleEmail, setVisibleEmail] = useState("Click to reveal email");

  // De-obfuscate email client-side only to prevent scrapers
  useEffect(() => {
    // xaviererick879 at gmail dot com
    const parts = ["xaviererick879", "gmail.com"];
    const email = parts.join("@");
    setEmailLink(`mailto:${email}`);
    setVisibleEmail(email);

    // Stop glitching after 800ms
    const timer = setTimeout(() => {
      setGlitching(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-labelledby="page-heading" className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-24 pb-8 bg-background overflow-hidden">
      {/* Subtle gradient so particles remain visible but text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"></div>

      {/* Top element to push center content down */}
      <div className="h-4"></div>

      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center my-auto py-6">
        {/* CTO / Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-accent-secondary mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>AI Intern @ KMRL | CTO @ IEDC Amrita | MCA AI & Data Science</span>
        </div>

        {/* Glitch Name */}
        <h1
          id="page-heading"
          tabIndex={-1}
          className={`text-5xl md:text-8xl font-display font-bold tracking-tight mb-4 select-none focus:outline-none ${
            glitching ? "animate-glitch text-accent-primary" : "text-text-primary"
          }`}
          style={{
            fontFamily: "var(--font-space-grotesk)",
          }}
        >
          Erick Xavier
        </h1>

        {/* Roles Line */}
        <p className="text-lg md:text-2xl font-mono text-text-muted mb-8 tracking-wide">
          Full-Stack Engineer <span className="text-accent-primary">·</span> AI/ML
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={handleScrollToProjects}
            className="px-6 py-3 bg-accent-primary text-text-primary font-mono text-sm font-semibold rounded border border-accent-primary hover:bg-transparent hover:text-accent-primary transition-all duration-300 transform hover:-translate-y-0.5"
          >
            [View Projects]
          </button>
          
          <a
            href="https://github.com/ErickXavier-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-surface text-text-primary font-mono text-sm font-semibold rounded border border-border hover:border-accent-secondary transition-all duration-300 transform hover:-translate-y-0.5"
          >
            [GitHub]
          </a>
        </div>

        {/* Security Obfuscated Contact Chips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
          {/* Email */}
          <div className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded hover:border-accent-primary/50 transition-colors group">
            <Mail className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
            <div className="text-left overflow-hidden">
              <span className="block text-[10px] font-mono text-text-muted">EMAIL</span>
              {emailLink ? (
                <a 
                  href={emailLink} 
                  className="block text-xs font-mono text-text-primary hover:text-accent-primary truncate"
                >
                  {visibleEmail}
                </a>
              ) : (
                <span className="block text-xs font-mono text-text-muted truncate select-none">
                  {visibleEmail}
                </span>
              )}
            </div>
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/ErickXavier-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded hover:border-accent-primary/50 transition-colors group text-left"
          >
            <Github className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
            <div>
              <span className="block text-[10px] font-mono text-text-muted">GITHUB</span>
              <span className="block text-xs font-mono text-text-primary group-hover:text-accent-primary truncate">
                github.com/ErickXavier-dev
              </span>
            </div>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/erickxavier"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-surface border border-border rounded hover:border-accent-primary/50 transition-colors group text-left"
          >
            <Linkedin className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
            <div>
              <span className="block text-[10px] font-mono text-text-muted">LINKEDIN</span>
              <span className="block text-xs font-mono text-text-primary group-hover:text-accent-primary truncate">
                linkedin.com/in/erickxavier
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1 text-text-muted animate-bounce pb-2">
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
