import React from "react";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Play, Server, Cpu } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 bg-[#0B1120]/45" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Bio / Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >


          {/* Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Tanveer Qurashi
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-slate-300 mb-4"
          >
            Computer Science Engineering Student
          </motion.h2>

          {/* Typing Animation Showcase */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-blue-400 h-10 mb-6 font-mono flex items-center"
          >
            <span className="mr-2 text-slate-500">&gt;</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Java Developer",
                2000,
                "Machine Learning Enthusiast",
                2000,
                "Problem Solver",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-400 max-w-xl mb-8 leading-relaxed font-light"
          >
            Passionate Computer Science Engineering student building AI-powered applications, scalable web solutions, and impactful software that solves real-world problems.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
          >
            <a
              href="/Tanveer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-sm font-semibold rounded-xl border border-white/10 hover:border-blue-500/30 bg-blue-500 hover:bg-blue-600 text-slate-300 hover:text-blue-100 flex items-center justify-center gap-2 transition-all hover:scale-102"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials Connection */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 items-center"
          >
            <span className="text-xl text-slate-500 tracking-wider font-bold uppercase  mr-2">Connect:</span>
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/tanveerqurashi", label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tanveer-qurashi-771b2529b/", label: "LinkedIn" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 transition-all hover:-translate-y-0.5 shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Background Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Photo Container */}
          <div className="relative">

            {/* Decorative Border */}
            <div className="absolute -inset-3 rounded-3xl border border-blue-500/20 rotate-3" />

            {/* Photo */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="Tanveer Qurashi"
                className="w-full h-full object-cover"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-6 px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 shadow-xl"
            >
              <p className="text-xs text-slate-400">Currently</p>
              <p className="text-sm font-semibold text-white">
                Building & Learning
              </p>
            </motion.div>

            {/* Small Decorative Element */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
