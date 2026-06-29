"use client";

import { ChevronUp, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Identity", href: "#about" },
    { label: "Capabilities", href: "#skills" },
    { label: "Curated Work", href: "#projects" },
    { label: "Operations", href: "#leadership" },
    { label: "Credentials", href: "#certifications" }
  ];

  const featuredBuilds = [
    { label: "QR Attendance System", href: "#projects" },
    { label: "Centralized Workspace", href: "#projects" },
    { label: "Kochi Metro RAG Bot", href: "#projects" },
    { label: "Campus Automation", href: "#projects" },
    { label: "Service Saathi AI", href: "#projects" }
  ];

  const socialLinks = [
    { label: "GitHub Profile", href: "https://github.com/ErickXavier-dev" },
    { label: "LinkedIn Connection", href: "https://linkedin.com/in/erickxavier" },
    { label: "IEDC Amrita", href: "#leadership" }
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 mb-16 relative z-10">
        {/* Solution / Navigate Column */}
        <div className="col-span-2 md:col-span-2">
          <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest mb-4">Navigate</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-body text-text-muted hover:text-accent-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Projects Column */}
        <div className="col-span-2 md:col-span-3">
          <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest mb-4">Featured Builds</h4>
          <ul className="space-y-2.5">
            {featuredBuilds.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-body text-text-muted hover:text-accent-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials Link Column */}
        <div className="col-span-2 md:col-span-2">
          <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest mb-4">Resources</h4>
          <ul className="space-y-2.5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-body text-text-muted hover:text-accent-primary inline-flex items-center gap-1 transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  {link.href.startsWith("http") && <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60" />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Connect Column */}
        <div className="col-span-2 md:col-span-3">
          <h4 className="text-xs font-mono font-bold text-text-primary uppercase tracking-widest mb-4">Contact</h4>
          <div className="flex gap-3 mb-4">
            <a
              href="https://linkedin.com/in/erickxavier"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-surface border border-border rounded-lg text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ErickXavier-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-surface border border-border rounded-lg text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-300"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:xaviererick879@gmail.com"
              className="p-2 bg-surface border border-border rounded-lg text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors duration-300"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <a
            href="mailto:xaviererick879@gmail.com"
            className="text-sm font-mono text-text-muted hover:text-accent-secondary transition-colors block break-all font-semibold"
          >
            xaviererick879@gmail.com
          </a>
        </div>

        {/* Brand Column */}
        <div className="col-span-2 md:col-span-2 flex flex-col md:items-end items-start md:text-right">
          <a href="#" className="flex items-center gap-2 group mb-3">
            <div className="font-mono text-accent-primary font-bold text-lg">&lt;/&gt;</div>
            <span className="font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors duration-300 text-lg">
              Erick Xavier
            </span>
          </a>
          <span className="text-xs font-mono text-accent-secondary uppercase tracking-widest">[ Full-Stack Dev ]</span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-border/40 mb-8 relative z-10"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-[11px] md:text-xs font-body text-text-muted text-center md:text-left max-w-lg leading-relaxed">
          CTO of IEDC Amrita Kochi. Deploys zero-trust applications, local LLMs, and campus automations.
        </p>

        <div className="flex items-center gap-6">
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-accent-primary hover:bg-accent-primary/80 text-background border border-accent-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_16px_rgba(108,99,255,0.2)]"
            title="Back to Top"
          >
            <ChevronUp className="w-4 h-4 stroke-[3px]" />
          </button>
          
          <p className="text-xs font-mono text-text-muted">
            &copy; 2026 Erick Xavier · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
