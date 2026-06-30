"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";

/**
 * ScrollReveal — animates children into view on scroll.
 *
 * Respects `prefers-reduced-motion`: if the user has enabled the OS-level
 * "reduce motion" accessibility setting, children are rendered immediately
 * visible with no animation, preventing vestibular-disorder discomfort.
 */
export default function ScrollReveal({
  children,
  delay    = 0,
  y        = 30,
  x        = 0,
  duration = 0.8,
  className = "",
}) {
  const prefersReduced = useReducedMotion();

  // Reduced-motion: skip animation entirely — render as a plain div
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // custom spring-ease-out
      }}
    >
      {children}
    </motion.div>
  );
}

