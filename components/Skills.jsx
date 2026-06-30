"use client";

import { useState } from "react";
import { Code, Shield } from "lucide-react";
import skillsData from "../data/skills.json";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Define how the categories are mapped to the 4 horizontal rows
  const rowCategories = [
    ["Languages", "Frontend"],
    ["Backend", "Databases"],
    ["AI/ML", "Embedded"],
    ["Security", "Cloud/DevOps", "Tools"]
  ];

  // Map each skill directly to its Simple Icons slug for authentic brand logo rendering
  const skillSlugMap = {
    "Python": "python",
    "Java": "java", // Will override with Iconify API
    "C": "c",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "React": "react",
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    "HTML/CSS": "html5",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "FastAPI": "fastapi",
    "Django": "django",
    "MongoDB": "mongodb",
    "MySQL": "mysql",
    "Oracle": "oracle",
    "PyTorch": "pytorch",
    "Keras": "keras",
    "LSTM": "tensorflow",
    "RAG": "openai-icon", // Will override with Iconify API
    "LangChain": "langchain",
    "Ollama": "ollama",
    "JWT/RBAC": "jsonwebtokens",
    "Zero-Trust": "cloudflare",
    "NoSQL Defense": "shield", // Use fallback Lucide icon
    "Azure": "azure", // Will override with Iconify API
    "Microsoft 365": "microsoft-icon", // Will override with Iconify API
    "Power Automate": "microsoft-icon", // Will override with Iconify API
    "Cloudflare Tunnel": "cloudflare",
    "PM2": "pm2",
    "Docker": "docker",
    "ESP32": "espressif",
    "C/C++": "cplusplus",
    "Arduino": "arduino",
    "IoT Sensors": "raspberrypi",
    "Git": "git",
    "Postman": "postman",
    "VS Code": "visualstudiocode",
    "Android Studio": "androidstudio",
    "VirtualBox": "virtualbox",
    "VMware": "vmware"
  };

  // Helper to gather skills for a specific row based on its categories
  const getRowSkills = (rowCats) => {
    const list = [];
    skillsData.forEach((cat) => {
      if (rowCats.includes(cat.category)) {
        cat.skills.forEach((skillName) => {
          list.push({
            name: skillName,
            category: cat.category,
            color: cat.color
          });
        });
      }
    });
    return list;
  };

  // Returns either the simple icons CDN, Iconify API URL, or null
  const getSkillIconUrl = (skillName) => {
    const iconifyOverrides = {
      "Java": "https://api.iconify.design/logos:java.svg",
      "Azure": "https://api.iconify.design/devicon:azure.svg",
      "Oracle": "https://api.iconify.design/logos:oracle.svg",
      "RAG": "https://api.iconify.design/logos:openai-icon.svg",
      "Microsoft 365": "https://api.iconify.design/logos:microsoft-icon.svg",
      "Power Automate": "https://api.iconify.design/selfhst:microsoft-power-automate.svg",
      "VS Code": "https://api.iconify.design/logos:visual-studio-code.svg",
      "VMware": "https://api.iconify.design/selfhst:vmware-workstation-pro.svg"
    };

    if (iconifyOverrides[skillName]) {
      return iconifyOverrides[skillName];
    }

    const slug = skillSlugMap[skillName];
    if (slug && slug !== "shield") {
      return `https://cdn.simpleicons.org/${slug}`;
    }

    return null;
  };

  // Renders either the SVG brand logo image or a Lucide icon fallback
  const renderSkillIcon = (skillName, color) => {
    const url = getSkillIconUrl(skillName);
    if (url) {
      return (
        <img
          src={url}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
          loading="lazy"
          decoding="async"
          className="w-4 h-4 object-contain brightness-110 contrast-125 transition-transform group-hover:scale-115 shrink-0"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      );
    }

    // Concept Lucide fallbacks (for skills with no CDN icon)
    const conceptIcons = {
      "NoSQL Defense": Shield,
    };
    const Icon = conceptIcons[skillName] || Code;
    return <Icon className="w-4 h-4 shrink-0" style={{ color }} />;
  };


  const categories = ["All", ...skillsData.map((cat) => cat.category)];

  return (
    <section id="skills" className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center mb-12">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 02 . Capabilities ]</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
              Technical Arsenal
            </h2>
            <p className="text-sm font-body text-text-muted mt-2 text-center max-w-md">
              Technologies and tools I use to bring production systems to life.
            </p>
            <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto px-6 relative z-10">
        {categories.map((cat, idx) => {
          const matchingCat = skillsData.find((sd) => sd.category === cat);
          const activeStyle = cat === activeCategory
            ? {
                backgroundColor: matchingCat ? matchingCat.color : "#6C63FF",
                borderColor: matchingCat ? matchingCat.color : "#6C63FF",
                color: "#0D0F14",
              }
            : {};

          return (
            <ScrollReveal key={cat} delay={0.05 * idx} y={15} duration={0.5}>
              <button
                onClick={() => setActiveCategory(cat)}
                style={activeStyle}
                aria-pressed={cat === activeCategory}
                className="px-3 py-1.5 rounded font-mono text-xs border border-border bg-surface text-text-muted hover:text-text-primary hover:border-text-muted transition-all duration-300"
              >
                {cat}
              </button>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Horizontal Alternating Infinite Marquee rows */}
      <ScrollReveal delay={0.2} y={40}>
        <div className="flex flex-col gap-5 w-full relative mask-fade-edges">
          {rowCategories.map((rowCats, rowIdx) => {
            const rowSkills = getRowSkills(rowCats);
            const isLeft = rowIdx % 2 === 0;
            const animationClass = isLeft ? "animate-marquee-left" : "animate-marquee-right";

            return (
              <div key={rowIdx} className="w-full overflow-hidden flex whitespace-nowrap py-2">
                <div className={`flex gap-6 ${animationClass} shrink-0 pr-6`}>
                  {Array.from({ length: 4 }).map((_, repeatIdx) => (
                    rowSkills.map((skill, sIdx) => {
                      const isMuted = activeCategory !== "All" && skill.category !== activeCategory;
                      const isHighlighted = activeCategory !== "All" && skill.category === activeCategory;
                      // Only the first repetition is visible to screen readers;
                      // duplicates are purely decorative for the infinite-scroll illusion.
                      const isDecorative = repeatIdx > 0;

                      return (
                        <div
                          key={`${repeatIdx}-${sIdx}`}
                          aria-hidden={isDecorative ? "true" : undefined}
                          style={{
                            borderColor: isHighlighted ? skill.color : "var(--color-border, #1E2330)",
                            boxShadow: isHighlighted ? `0 0 16px ${skill.color}35` : "none",
                          }}
                          className={`inline-flex items-center gap-3 px-5 py-3 bg-surface/50 border rounded-2xl backdrop-blur-sm select-none transition-all duration-300 ${
                            isMuted ? "opacity-20 scale-95" : "opacity-100 scale-100"
                          }`}
                        >
                          {renderSkillIcon(skill.name, skill.color)}
                          <span className="font-mono text-sm md:text-base text-text-primary font-semibold">{skill.name}</span>
                        </div>
                      );
                    })
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
