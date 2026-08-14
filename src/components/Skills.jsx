import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { skillsData } from "../data/skills";

export default function Skills() {
  const categories = skillsData.map((cat) => cat.category);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  // Filter skills by the selected active category
  const filteredSkills =
    skillsData.find((cat) => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Glow lines */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Technical Skillset
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-xs font-medium rounded-full cursor-pointer transition-all duration-300 ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600/90 rounded-full -z-10 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              // Dynamic Lucide Icon mapping
              const IconComponent = Icons[skill.icon] || Icons.Cpu;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl glass-card text-left flex flex-col justify-between group relative overflow-hidden h-[135px]"
                >
                  {/* Subtle float background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/[0.02] group-hover:to-blue-500/[0.05] transition-all" />

                  {/* Header: Name and Icon */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-400 transition-all">
                      <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                    </div>
                  </div>

                  {/* Bottom: Progress Bar */}
                  <div className="space-y-2 mt-auto relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>Proficiency</span>
                      <span className="font-semibold text-slate-400 group-hover:text-blue-400">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-slate-900/60 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

