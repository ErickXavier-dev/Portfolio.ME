"use client";

import { useState } from "react";
import skillsData from "../data/skills.json";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Define how the categories are mapped to the 4 horizontal rows
  const rowCategories = [
    ["Languages", "Frontend"],
    ["Backend", "Databases"],
    ["AI/ML", "Embedded"],
    ["Security", "Cloud/DevOps", "Tools"]
  ];

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
    // Shuffle slightly or keep ordered. We'll keep them ordered but return
    return list;
  };

  const categories = ["All", ...skillsData.map((cat) => cat.category)];

  return (
    <section id="skills" className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center mb-12">
        <span className="font-mono text-xs text-accent-secondary uppercase tracking-widest mb-2">[ 02 . Capabilities ]</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-text-primary">
          Technical Arsenal
        </h2>
        <p className="text-sm font-body text-text-muted mt-2 text-center max-w-md">
          Technologies and tools I use to bring production systems to life.
        </p>
        <div className="h-0.5 w-12 bg-accent-primary mt-4"></div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto px-6 relative z-10">
        {categories.map((cat) => {
          const matchingCat = skillsData.find((sd) => sd.category === cat);
          const activeStyle = cat === activeCategory
            ? {
                backgroundColor: matchingCat ? matchingCat.color : "#6C63FF",
                borderColor: matchingCat ? matchingCat.color : "#6C63FF",
                color: "#0D0F14",
              }
            : {};

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={activeStyle}
              className="px-3 py-1.5 rounded font-mono text-xs border border-border bg-surface text-text-muted hover:text-text-primary hover:border-text-muted transition-all duration-300"
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Horizontal Alternating Infinite Marquee rows */}
      <div className="flex flex-col gap-5 w-full relative mask-fade-edges">
        {rowCategories.map((rowCats, rowIdx) => {
          const rowSkills = getRowSkills(rowCats);
          const isLeft = rowIdx % 2 === 0;
          const animationClass = isLeft ? "animate-marquee-left" : "animate-marquee-right";

          return (
            <div key={rowIdx} className="w-full overflow-hidden flex whitespace-nowrap py-1">
              <div className={`flex gap-4 ${animationClass} shrink-0 pr-4`}>
                {/* Render the original list */}
                {rowSkills.map((skill, sIdx) => {
                  const isMuted = activeCategory !== "All" && skill.category !== activeCategory;
                  const isHighlighted = activeCategory !== "All" && skill.category === activeCategory;

                  return (
                    <div
                      key={`orig-${sIdx}`}
                      style={{
                        borderColor: isHighlighted ? skill.color : "var(--color-border, #1E2330)",
                        boxShadow: isHighlighted ? `0 0 12px ${skill.color}25` : "none",
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 bg-surface/50 border rounded-xl backdrop-blur-sm select-none transition-all duration-300 ${
                        isMuted ? "opacity-25 scale-95" : "opacity-100 scale-100"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: skill.color }}></span>
                      <span className="font-mono text-xs md:text-sm text-text-primary font-medium">{skill.name}</span>
                    </div>
                  );
                })}

                {/* Render the duplicate list for infinite loops */}
                {rowSkills.map((skill, sIdx) => {
                  const isMuted = activeCategory !== "All" && skill.category !== activeCategory;
                  const isHighlighted = activeCategory !== "All" && skill.category === activeCategory;

                  return (
                    <div
                      key={`dup-${sIdx}`}
                      style={{
                        borderColor: isHighlighted ? skill.color : "var(--color-border, #1E2330)",
                        boxShadow: isHighlighted ? `0 0 12px ${skill.color}25` : "none",
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 bg-surface/50 border rounded-xl backdrop-blur-sm select-none transition-all duration-300 ${
                        isMuted ? "opacity-25 scale-95" : "opacity-100 scale-100"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: skill.color }}></span>
                      <span className="font-mono text-xs md:text-sm text-text-primary font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
