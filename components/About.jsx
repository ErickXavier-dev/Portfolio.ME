// Server Component — no hooks or browser APIs needed here.
import { Terminal, Lock, Crown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";


export default function About() {
  const stats = [
    { 
      value: "7+", 
      label: "Projects Shipped", 
      icon: Terminal, 
      color: "text-accent-secondary" 
    },
    { 
      value: "3", 
      label: "Active Private Builds", 
      icon: Lock, 
      color: "text-accent-red" 
    },
    { 
      value: "2+", 
      label: "Years in Leadership", 
      icon: Crown, 
      color: "text-accent-yellow" 
    }
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Bio Column */}
        <div className="md:col-span-7">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest">[ 01 . Identity ]</span>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            
            <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-primary">
              Building Systems That Run At Scale
            </h2>
            
            <p className="text-text-muted font-body leading-relaxed text-base md:text-lg">
              I'm a full-stack engineer and MCA student at Amrita Vishwa Vidyapeetham, Kochi. I build production-grade systems — AI chatbots for government infrastructure, enterprise workspace platforms, IoT firmware, and cloud automation — not demos. Currently CTO of IEDC Amrita, leading technical operations and shipping real systems for real institutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Stats Block Column */}
        <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={idx} delay={0.2 + idx * 0.1}>
                <div 
                  className="flex-1 p-6 bg-surface border border-border rounded flex items-center justify-between group hover:border-accent-primary transition-all duration-300"
                >
                  <div className="text-left">
                    <span className="block text-3xl md:text-4xl font-display font-extrabold text-accent-primary group-hover:scale-105 origin-left transition-transform duration-300">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-mono text-text-muted mt-1 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <div className={`p-3 rounded bg-background border border-border ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
