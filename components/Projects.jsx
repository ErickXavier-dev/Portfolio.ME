"use client";

import { 
  Lock, 
  ArrowUpRight, 
  Github, 
  CheckCircle2, 
  Loader2, 
  QrCode, 
  LayoutGrid, 
  Bot, 
  Zap, 
  Terminal, 
  MessageSquare, 
  Cpu, 
  FolderGit2,
  ChevronRight 
} from "lucide-react";
import projectsData from "../data/projects.json";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  // Map project ID to visual icons for premium Bento design
  const projectIcons = {
    "qr-attendance": QrCode,
    "cws": LayoutGrid,
    "kochi-metro-rag": Bot,
    "college-campus-automation": Zap,
    "savishkaara-control-panel": Terminal,
    "service-saathi": MessageSquare,
    "smart-desk-assistant": Cpu
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col items-center mb-16">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 03 . Work ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
              Projects
            </h2>
            <p className="text-sm font-body text-text-muted mt-2 text-center max-w-md">
              Institutional builds, on-premise AI systems, and cloud-automations.
            </p>
            <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bento Grid Layout - 3 columns, utilizing space perfectly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectsData.map((project, idx) => {
          const isPrivate = project.visibility === "private";
          const isCompleted = project.status === "completed";
          const ProjectIcon = projectIcons[project.id] || FolderGit2;
          
          // Bento Span Logic: Temple Fest (index 0) and Kochi Metro RAG (index 2) span 2 columns on lg screens
          const isLargeCard = project.id === "qr-attendance" || project.id === "kochi-metro-rag";
          const gridSpanClass = isLargeCard 
            ? "lg:col-span-2 md:col-span-2" 
            : "lg:col-span-1 md:col-span-1";

          return (
            <ScrollReveal key={project.id} delay={0.1 * idx} y={40} duration={0.8} className={gridSpanClass}>
              <div
                className="h-full relative p-6 md:p-8 bg-surface border border-border rounded-xl flex flex-col justify-between group hover:border-accent-primary hover:shadow-[0_0_24px_rgba(108,99,255,0.12)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Row: Title, Icon and Badges */}
                <div>
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-background border border-border text-accent-primary group-hover:scale-110 transition-transform duration-300">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Status & Privacy Badges */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span 
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                          isCompleted 
                            ? "bg-accent-secondary/10 border-accent-secondary/35 text-accent-secondary" 
                            : "bg-accent-yellow/10 border-accent-yellow/35 text-accent-yellow"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-2.5 h-2.5" />
                        ) : (
                          <Loader2 className="w-2.5 h-2.5 animate-spin" />
                        )}
                        {isCompleted ? "Done" : "Dev"}
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

                  {/* Highlights Bullet List */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-8 space-y-2.5 text-xs font-body text-text-muted">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-accent-primary shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Row: Stack Chips */}
                <div className="mt-auto pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-1.5">
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
            </ScrollReveal>
          );
        })}
      </div>

      {/* GitHub Callout Card - Full Width space utilization */}
      <ScrollReveal delay={0.4}>
        <a
          href="https://github.com/ErickXavier-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row justify-between items-center p-6 bg-surface border border-border rounded-xl hover:border-accent-secondary hover:shadow-[0_0_24px_rgba(0,212,170,0.08)] transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="p-3 rounded-lg bg-background border border-border text-accent-secondary group-hover:scale-110 transition-transform">
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
      </ScrollReveal>
    </section>
  );
}
