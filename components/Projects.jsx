"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import projectsData from "../data/projects.json";

export default function Projects() {
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
      { threshold: 0.05 }
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
      id="projects" 
      ref={sectionRef}
      className={`py-24 px-6 max-w-6xl mx-auto border-t border-border transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col items-center mb-16">
        <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 03 . Work ]</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
          Curated Systems
        </h2>
        <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {projectsData.map((project, idx) => {
          const isPrivate = project.visibility === "private";
          const isCompleted = project.status === "completed";

          return (
            <div
              key={project.id}
              className="relative p-6 md:p-8 bg-surface border border-border rounded flex flex-col justify-between group hover:border-accent-primary hover:shadow-[0_0_24px_rgba(108,99,255,0.12)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Top Row: Title and Badges */}
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Status & Privacy Badges */}
                  <div className="flex items-center gap-2">
                    <span 
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${
                        isCompleted 
                          ? "bg-accent-secondary/10 border-accent-secondary/30 text-accent-secondary" 
                          : "bg-accent-yellow/10 border-accent-yellow/30 text-accent-yellow"
                      }`}
                    >
                      {isCompleted ? "✅ Completed" : "🔄 In Progress"}
                    </span>
                    {isPrivate && (
                      <span className="p-1 rounded bg-accent-red/10 border border-accent-red/20 text-accent-red" title="Private Repository">
                        <Lock className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Description One-Liner */}
                <p className="text-sm font-body text-text-muted leading-relaxed mb-6">
                  {project.oneLiner}
                </p>

                {/* Key Bullet Highlights if they exist */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-6 space-y-2 text-xs font-body text-text-muted list-disc pl-4 decoration-accent-primary">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Row: Stack Chips */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-background border border-border font-mono text-[10px] text-text-muted group-hover:border-accent-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Callout Card */}
      <a
        href="https://github.com/ErickXavier-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row justify-between items-center p-6 bg-surface border border-border rounded hover:border-accent-secondary hover:shadow-[0_0_24px_rgba(0,212,170,0.08)] transition-all duration-300 group"
      >
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="p-3 rounded bg-background border border-border text-accent-secondary group-hover:scale-110 transition-transform">
            <Github className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-text-primary text-lg">
              Explore More on GitHub
            </h4>
            <p className="text-xs font-mono text-text-muted mt-1">
              github.com/ErickXavier-dev
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-accent-secondary group-hover:translate-x-1 transition-transform">
          <span>DISCOVER REPOSITORIES</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </a>
    </section>
  );
}
