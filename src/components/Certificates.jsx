import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ShieldCheck, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { certificatesData } from "../data/certificates";

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, certificatesData.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const maxSlides = certificatesData.length;

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background spotlights */}
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Certificates & Internships
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative px-12 sm:px-16 max-w-lg sm:max-w-xl mx-auto">
          
          {/* Track Window */}
          <div className="overflow-hidden py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {certificatesData.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="w-full shrink-0 flex justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="glass-card flex flex-col h-[380px] w-full max-w-md sm:max-w-lg rounded-2xl overflow-hidden group border border-white/5 hover:border-blue-500/20 relative"
                  >
                    {/* Certificate Image Preview / Placeholder */}
                    <div className="h-40 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={`${cert.title} preview`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          {/* Dot patterns */}
                          <div className="absolute inset-0 grid-dots opacity-40" />
                          
                          {/* Alt-friendly representation of the Certificate Image Placeholder */}
                          <div className="relative z-10 flex flex-col items-center gap-1.5 p-3 text-center">
                            <ShieldCheck className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                            <span className="text-[9px] font-mono text-slate-500 tracking-wider">
                              [ Certificate Image Placeholder ]
                            </span>
                          </div>
                        </>
                      )}
                      
                      {/* Background color mask */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

                      <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-slate-500 z-10">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-5 flex flex-col flex-grow text-left space-y-3 justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                          {cert.title}
                        </h3>

                        {/* Issuer */}
                        <p className="text-[10px] text-blue-400 font-semibold mt-1">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {/* Completion Date */}
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span>Completed: {cert.date}</span>
                        </div>

                        {/* View Certificate Button */}
                        <a
                          href={cert.link}
                          target={cert.link !== "#" ? "_blank" : undefined}
                          rel={cert.link !== "#" ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (cert.link === "#") {
                              e.preventDefault();
                              alert(`Viewing certificate details: ${cert.title} issued by ${cert.issuer}`);
                            }
                          }}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-white/5 group-hover:border-blue-500/30 bg-slate-900/40 group-hover:bg-blue-500/5 text-[10px] font-semibold text-slate-300 group-hover:text-blue-400 transition-all"
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls (Arrows) */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 text-white cursor-pointer transition-all duration-300 z-20 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "bg-slate-900/60 hover:bg-slate-800/80 hover:border-blue-500/30 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            }`}
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === certificatesData.length - 1}
            className={`absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 text-white cursor-pointer transition-all duration-300 z-20 ${
              currentIndex === certificatesData.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "bg-slate-900/60 hover:bg-slate-800/80 hover:border-blue-500/30 hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
            }`}
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Indicators / Dots */}
          {maxSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-1.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
