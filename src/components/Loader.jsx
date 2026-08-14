import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing workspace...");

  useEffect(() => {
    const textSequence = [
      { threshold: 15, text: "Configuring premium styles..." },
      { threshold: 40, text: "Injecting Vercel-like aesthetics..." },
      { threshold: 65, text: "Loading interactive 3D components..." },
      { threshold: 85, text: "Rendering Apple-inspired typography..." },
      { threshold: 98, text: "System ready. Welcome!" }
    ];

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 600);
          return 100;
        }

        const nextProgress = prevProgress + Math.floor(Math.random() * 8) + 2;
        const currentProgress = Math.min(nextProgress, 100);

        // Find correct text based on progress thresholds
        const activeText = textSequence.find(seq => currentProgress <= seq.threshold);
        if (activeText) {
          setLoadingText(activeText.text);
        }

        return currentProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120] text-slate-100"
    >
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Loader Content */}
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Glowing Logo Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center w-24 h-24 mb-8 rounded-full border border-blue-500/30 bg-slate-900/50 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.2)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-2 rounded-full border-2 border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent"
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            TQ
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold tracking-tight text-white mb-2"
        >
          Tanveer Qurashi
        </motion.h1>

        {/* Loading status text */}
        <motion.p
          key={loadingText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.7, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs tracking-wider text-slate-400 h-6 mb-6 font-mono"
        >
          {loadingText}
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Progress percentage */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm font-mono text-blue-400 font-semibold"
        >
          {progress}%
        </motion.span>
      </div>
    </motion.div>
  );
}
