"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, y = 30, x = 0, duration = 0.8, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // sleek custom ease-out
      }}
    >
      {children}
    </motion.div>
  );
}
