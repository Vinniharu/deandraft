"use client";

import * as React from "react";
import * as FramerMotion from "framer-motion";

export default function SDGsHero() {
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
      className="text-white h-1/2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: "url('/sdgs/hero-bg.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        height: "50vh",
      }}
    >
      <div className="w-full h-full mx-auto px-4 flex items-center justify-center bg-[var(--dean-red)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <FramerMotion.motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={textVariants}
          >
            SDGs Activation Program
          </FramerMotion.motion.h1>

          <FramerMotion.motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Taking Sustainable Development Goals to classrooms across Nigeria
          </FramerMotion.motion.p>
        </div>
      </div>
    </FramerMotion.motion.div>
  );
} 