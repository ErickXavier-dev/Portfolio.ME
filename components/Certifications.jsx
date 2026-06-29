"use client";

import { useEffect, useRef, useState } from "react";
import certificationsData from "../data/certifications.json";

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className={`py-24 px-6 max-w-6xl mx-auto border-t border-border transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col items-center mb-16">
        <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 05 . Credentials ]</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
          Certifications
        </h2>
        <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, idx) => (
          <div 
            key={idx}
            className="p-6 bg-surface border border-border rounded flex flex-col justify-between hover:border-accent-primary hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded bg-background border border-border font-mono text-[10px] text-accent-secondary mb-4 uppercase tracking-wider">
                {cert.issuer}
              </span>
              <h3 className="text-base font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-xs font-mono text-text-muted">
              <span>ISSUED BY {cert.issuer}</span>
              <span className="text-text-primary">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
