"use client";

import * as React from "react";
import * as FramerMotion from "framer-motion";

export default function GirlsBackHero() {
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
    <FramerMotion.motion.div
      className="text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: "url('/girlback/4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto px-4 h-[50vh] flex items-center justify-center bg-gradient-to-r from-[var(--dean-red)]/70 to-[var(--dean-blue)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <FramerMotion.motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={textVariants}
          >
            Girls Back to School Program
          </FramerMotion.motion.h1>

          <FramerMotion.motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Empowering girls through education and eliminating barriers to their continuous learning
          </FramerMotion.motion.p>
        </div>
      </div>
    </FramerMotion.motion.div>
  );
} 