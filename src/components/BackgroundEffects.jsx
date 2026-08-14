import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate relative coordinates inside the viewport/container
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-[#0B1120] pointer-events-none"
    >
      {/* 1. Base Mesh Dot Grid */}
      <div className="absolute inset-0 grid-dots opacity-80" />

      {/* 2. Spotlight spotlight-overlay (follows the cursor spotlight) */}
      <div className="absolute inset-0 spotlight-overlay transition-opacity duration-300 pointer-events-none opacity-60 md:opacity-100" />

      {/* 3. Gradient blobs (Ambient glow) */}
      {/* Left side blue-purple glow */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full glow-blob-blue filter blur-[80px]"
      />

      {/* Right side purple-fuchsia glow */}
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full glow-blob-purple filter blur-[90px]"
      />

      {/* Center ambient glow */}
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-indigo-500/[0.03] filter blur-[120px] pointer-events-none" />

      {/* 4. Fine particle drift (few particles to look clean, Vercel style) */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.08]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.03, 0.12, 0.03],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
