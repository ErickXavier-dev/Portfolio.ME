// Server Component — no hooks or browser APIs needed here.
import { Cpu, ShieldCheck, Code, BookOpen, Calendar, Award } from "lucide-react";
import certificationsData from "../data/certifications.json";
import ScrollReveal from "./ScrollReveal";


export default function Certifications() {
  // Map brand/issuer to customized Lucide icons and colors
  const issuerConfigs = {
    "IBM": { 
      logo: "https://logos.hunter.io/ibm.com",
      color: "bg-[#0f62fe]/10 border-[#0f62fe]/20" 
    },
    "Deloitte": { 
      logo: "https://logos.hunter.io/deloitte.com",
      color: "bg-[#86bc25]/10 border-[#86bc25]/20" 
    },
    "HackerRank": { 
      logo: "https://logos.hunter.io/hackerrank.com",
      color: "bg-[#2ec866]/10 border-[#2ec866]/20" 
    },
    "Infosys": { 
      logo: "https://logos.hunter.io/infosys.com",
      color: "bg-[#007cc3]/10 border-[#007cc3]/20" 
    }
  };

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="flex flex-col items-center mb-16">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 05 . Credentials ]</span>
            <h2 id="certifications-heading" className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
              Certifications
            </h2>
            <p className="text-sm font-body text-text-muted mt-2 text-center max-w-md">
              Industry credentials and skill simulation assessments completed.
            </p>
            <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => {
          const config = issuerConfigs[cert.issuer] || {
            icon: Award,
            color: "text-text-muted bg-surface border-border"
          };
          const Icon = config.icon || Award;

          return (
            <ScrollReveal key={cert.name} delay={0.1} y={30} duration={0.8}>
              <div 
                className="h-full p-6 bg-surface border border-border rounded-xl flex flex-col justify-between hover:border-accent-primary hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-background border border-border font-mono text-[10px] text-accent-secondary uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center p-1 ${config.color} group-hover:scale-110 transition-all duration-300`}>
                      {config.logo ? (
                        <img 
                          src={config.logo} 
                          alt={`${cert.issuer} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2 leading-snug">
                    {cert.name}
                  </h3>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-xs font-mono text-text-muted">
                  <span>ISSUED BY {cert.issuer}</span>
                  <span className="text-text-primary flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                    {cert.date}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
