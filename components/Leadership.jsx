// Server Component — no hooks or browser APIs needed here.
import {
  Briefcase,
  Calendar,
  Sparkles,
  Users,
  Code,
  Cpu,
  Monitor,
  Trophy
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";


export default function Leadership() {
  const timeline = [
    {
      period: "2026–Present",
      role: "AI Intern",
      org: "Kochi Metro Rail Limited (KMRL)",
      logo: "/images/kmrl-logo.png",
      icon: Briefcase
    },
    {
      period: "2025–Present",
      role: "Chief Technical Officer",
      org: "IEDC, Amrita Vishwa Vidyapeetham, Kochi",
      icon: Briefcase
    },

    {
      period: "2025",
      role: "Tech Fest Lead & Technical Team Lead",
      org: "Savishkaara (Amrita TechFest)",
      icon: Sparkles
    },
    {
      period: "2023–2025",
      role: "Founder & Lead",
      org: "Software Innovators Club, Amrita Kochi",
      icon: Users
    },
    {
      period: "2024–Present",
      role: "Active Member",
      org: "CIR Coding Club, Amrita Kochi",
      icon: Code
    },
    {
      period: "2023",
      role: "Sub Committee Member",
      org: "IEDC, Amrita Kochi",
      icon: Cpu
    },
    {
      period: "2022–2023",
      role: "Official Member",
      org: "CSI (Computer Society of India), Amrita Kochi",
      icon: Monitor
    }
  ];

  const awards = [
    {
      title: "2nd Place, Eka Lakshya Line Follower Robot",
      issuer: "Chinmaya Vishwavidyapeeth"
    },
    {
      title: "Participant, AmritaBit 8.0 (Major Project Expo)",
      issuer: "2025"
    },
    {
      title: "Tech Team Lead Memento",
      issuer: "Savishkaara 2025"
    }
  ];

  return (
    <section id="leadership" aria-labelledby="leadership-heading" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col items-center mb-16">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 04 . Operations ]</span>
            <h2 id="leadership-heading" className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
              Leadership & Timeline
            </h2>
            <p className="text-sm font-body text-text-muted mt-2 text-center max-w-md">
              Roles and academic initiatives I have led across campus.
            </p>
            <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Timeline Block */}
        <div className="lg:col-span-8 relative pl-8 border-l border-border space-y-10">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.role} delay={0.1} x={-20} duration={0.8}>
                <div className="relative group pl-2">
                  {/* Timeline point dot - Centered perfectly on the line */}
                  <div className="absolute -left-[45px] top-1.5 w-[34px] h-[34px] bg-background border border-border group-hover:border-accent-primary text-text-muted group-hover:text-accent-primary rounded-full flex items-center justify-center transition-all duration-300 shadow-sm overflow-hidden p-1.5">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={`${item.org} Logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs text-accent-secondary flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-body text-text-muted mt-1">
                    {item.org}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Awards Block */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <ScrollReveal delay={0.3} y={30}>
            <div className="p-6 bg-surface border border-border rounded-xl">
              <h3 className="text-lg font-display font-bold text-text-primary mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-primary" />
                <span>Key Recognitions</span>
              </h3>
              
              <div className="space-y-5">
                {awards.map((award) => (
                  <div key={award.title} className="flex gap-3 border-b border-border/40 last:border-0 pb-4 last:pb-0">
                    <div className="p-2 rounded bg-background border border-border text-accent-yellow shrink-0 self-start">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-text-primary leading-tight">
                        {award.title}
                      </h4>
                      <p className="text-xs font-mono text-text-muted mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-accent-secondary" />
                        {award.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
