"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EEWOMHero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: "url('/eewom/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto px-4 h-[50vh] flex items-center justify-center bg-gradient-to-r from-[var(--dean-blue)]/70 to-[var(--dean-red)]/70">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Election Monitoring
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Youth Engagement
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Democratic Integrity
            </span>
          </div>
          
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={textVariants}
          >
            Election EyeWitness Observation Mission
          </motion.h1>

          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            variants={textVariants}
          >
            Enhancing electoral transparency through citizen-driven accountability and real-time observation across Nigeria.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#about" scroll={false} className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-xl">
              Learn More
            </Link>
            <Link href="mailto:info@deaninitiative.org" className="px-8 py-3 bg-[var(--dean-blue)] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-xl">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 