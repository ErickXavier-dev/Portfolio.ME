"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Briefcase, Calendar } from "lucide-react";

export default function Leadership() {
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

  const timeline = [
    {
      period: "2025–Present",
      role: "Chief Technical Officer",
      org: "IEDC, Amrita Vishwa Vidyapeetham, Kochi"
    },
    {
      period: "2025",
      role: "Tech Fest Lead & Technical Team Lead",
      org: "Savishkaara (Amrita TechFest)"
    },
    {
      period: "2023–2025",
      role: "Founder & Lead",
      org: "Software Innovators Club, Amrita Kochi"
    },
    {
      period: "2024–Present",
      role: "Active Member",
      org: "CIR Coding Club, Amrita Kochi"
    },
    {
      period: "2023",
      role: "Sub Committee Member",
      org: "IEDC, Amrita Kochi"
    },
    {
      period: "2022–2023",
      role: "Official Member",
      org: "CSI (Computer Society of India), Amrita Kochi"
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
    <section 
      id="leadership" 
      ref={sectionRef}
      className={`py-24 px-6 max-w-6xl mx-auto border-t border-border transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex flex-col items-center mb-16">
        <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 04 . Operations ]</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
          Leadership & Timeline
        </h2>
        <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Timeline Block */}
        <div className="lg:col-span-8 relative pl-6 border-l border-border space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* timeline point dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-background border-2 border-border group-hover:border-accent-primary group-hover:bg-accent-primary rounded-full transition-all duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
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
          ))}
        </div>

        {/* Awards Block */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="p-6 bg-surface border border-border rounded">
            <h3 className="text-lg font-display font-bold text-text-primary mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-primary" />
              <span>Key Recognitions</span>
            </h3>
            
            <div className="space-y-4">
              {awards.map((award, idx) => (
                <div key={idx} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                  <h4 className="text-sm font-display font-bold text-text-primary">
                    {award.title}
                  </h4>
                  <p className="text-xs font-mono text-text-muted mt-1">
                    {award.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
