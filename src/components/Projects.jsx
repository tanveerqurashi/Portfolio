import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { projectsData } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            My Creations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
            >
              {/* Parallax Card Tilt */}
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Main Card Container */}
                <div 
                  className="glass-card flex flex-col h-[460px] relative overflow-hidden group border border-white/5 hover:border-blue-500/20"
                  style={{
                    boxShadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
                  }}
                >
                  
                  {/* Card Image Wrapper with Premium Custom CSS wireframe placeholder */}
                  <div className="h-44 relative overflow-hidden bg-slate-900 flex items-center justify-center">
                    {/* Abstract Grid background */}
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    
                    {/* Gradient background mask */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Visual coding graphics in lieu of standard placeholder image */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 group-hover:border-blue-500/30 transition-all shadow-lg shadow-black/50">
                        <Code2 className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                        WORKSPACE_BUILD
                      </span>
                    </div>

                    {/* Gradient Border Line */}
                    <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${project.gradient}`} />
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-light flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-2 py-0.5 rounded-full bg-slate-900 border border-white/5 text-[9px] font-mono text-slate-400"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Buttons / Actions */}
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
