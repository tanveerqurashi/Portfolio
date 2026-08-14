import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Award, Calendar, Lightbulb, Languages } from "lucide-react";

export default function About() {
  const infoCards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      title: "Education",
      desc: "B.E. Computer Science & Engineering",
      subDesc: "KSR Institute For Engineering & Technology"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      title: "Experience",
      desc: "AI/ML Intern",
      subDesc: "IIITDM Kancheepuram"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-indigo-400" />,
      title: "Interests",
      desc: "Full Stack Development & AI/ML",
      subDesc: "Building practical software solutions"
    },
    {
      icon: <Languages className="w-5 h-5 text-rose-400" />,
      title: "Languages",
      desc: "English, Hindi, Urdu",
      subDesc: "Fluent in reading, writing, and speaking"
    }
  ];

  const stats = [
    { value: "4+", label: "Projects Completed", color: "text-blue-400" },
    { value: "5+", label: "Certifications", color: "text-purple-400" },
    { value: "2", label: "Internships", color: "text-indigo-400" },
    { value: "200+", label: "Coding Solved", color: "text-emerald-400" }
  ];

  const timeline = [
    {
      role: "B.E. Computer Science & Engineering",
      org: "KSR Institute for Engineering and Technology",
      date: "2023 - 2027",
      description:
        "Pursuing a Bachelor of Engineering in Computer Science and Engineering with a CGPA of 8.60. Building a strong foundation in Data Structures and Algorithms, OOP, DBMS, Computer Networks, Operating Systems, and software development.",
    },
    {
      role: "AI/ML Intern",
      org: "AICTE Internship – IIITDM Kancheepuram",
      date: "Jun 2026 - Jul 2026",
      description:
        "Developed a hybrid Movie Recommendation System using Content-Based Filtering, Collaborative Filtering, and SVD on the MovieLens dataset. Worked with Python, Pandas, NumPy, Scikit-learn, Surprise, FastAPI, and Next.js.",
    },
    {
      role: "Full Stack Developer",
      org: "KrianaMart",
      date: "Project",
      description:
        "Developed a full-stack grocery shopping platform with secure authentication, product management, shopping cart, and order management using React.js, Node.js, Express.js, and MongoDB.",
    },
    {
      role: "Frontend Developer",
      org: "Task Management Application",
      date: "Project",
      description:
        "Built a responsive task management application using React.js, Tailwind CSS, and JavaScript with reusable components and React state management.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Top: Introduction Paragraph & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Bio introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h3 className="text-2xl font-semibold text-white">
              {/* Engineering a better digital future */}
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              I am a final-year Computer Science Engineering student with a deep fascination for algorithms, AI agents, and product-focused web engineering. I enjoy bridging the gap between sophisticated backends and clean, minimalist user interfaces.
            </p>
            <p className="text-slate-400 font-light leading-relaxed">
              My core technical philosophy is heavily inspired by design giants like Apple and Vercel—striving for clean semantics, high performance, and visual elegance in every line of code I author.
            </p>
          </motion.div>

          {/* Info cards grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card text-left flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 shadow-inner">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-300 mb-0.5">{card.desc}</p>
                  <p className="text-[10px] text-slate-500">{card.subDesc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl glass-card mb-20 text-center relative overflow-hidden"
        >
          {/* subtle line highlights */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          
          {stats.map((stat, idx) => (
            <div key={idx} className="relative z-10 space-y-2">
              <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color} font-mono`}>
                {stat.value}
              </span>
              <p className="text-xs text-slate-400 tracking-wider font-light uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              Professional Timeline
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-light">My career trajectory, education milestones, and internship roles</p>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-10 text-left">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* timeline point dot */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                </div>

                {/* timeline card item */}
                <div className="p-6 rounded-2xl glass-card space-y-2 relative">
                  {/* date badge */}
                  <span className="absolute top-6 right-6 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 text-[10px] text-slate-400 font-mono border border-white/5">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {item.date}
                  </span>

                  <h4 className="text-base font-bold text-white pr-20">{item.role}</h4>
                  <p className="text-xs font-medium text-blue-400">{item.org}</p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
