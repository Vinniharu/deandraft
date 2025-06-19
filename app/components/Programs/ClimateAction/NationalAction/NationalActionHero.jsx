"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NationalActionHero() {
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
        backgroundImage: "url('/national/mainbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh",
      }}
    >
      <div className="w-full h-full mx-auto px-4 flex items-center justify-center bg-[var(--dean-red)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={textVariants}
          >
            National Action Day on Climate Education
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Mobilizing Youth Power for the Sustainable Development Goals
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
} 