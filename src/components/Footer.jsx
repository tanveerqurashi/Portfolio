import React from "react";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/TanveerQurashi", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/tanveer-qurashi", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <footer className="relative w-full bg-slate-950/80 border-t border-white/5 py-12">
      {/* Mesh lines pattern inside footer */}
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand/Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-white mb-2">
              Tanveer<span className="text-blue-500">.</span>
            </span>
            <p className="text-xs text-slate-400 max-w-xs font-light">
              Crafting intelligent solutions with clean code, modern UX principles, and automated pipelines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-xl bg-slate-900 border border-white/5 hover:border-blue-500/30 text-slate-400 hover:text-blue-400 transition-all hover:scale-115 shadow-md shadow-black/30"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {currentYear} Tanveer Qurashi. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
