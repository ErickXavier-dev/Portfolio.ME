"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  const stats = [
    { value: "7+", label: "Projects Shipped" },
    { value: "3", label: "Active Private Builds" },
    { value: "2+", label: "Years in Leadership" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-24 px-6 max-w-6xl mx-auto border-t border-border transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Bio Column */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest">[ 01 . Identity ]</span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-primary">
            Building Systems That Run At Scale
          </h2>
          
          <p className="text-text-muted font-body leading-relaxed text-base md:text-lg">
            I'm a full-stack engineer and MCA student at Amrita Vishwa Vidyapeetham, Kochi. I build production-grade systems — AI chatbots for government infrastructure, enterprise workspace platforms, IoT firmware, and cloud automation — not demos. Currently CTO of IEDC Amrita, leading technical operations and shipping real systems for real institutions.
          </p>
        </div>

        {/* Right Stats Block Column */}
        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex-1 p-6 bg-surface border border-border rounded flex flex-col justify-center items-center text-center group hover:border-accent-primary transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-display font-extrabold text-accent-primary group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs font-mono text-text-muted mt-2 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
