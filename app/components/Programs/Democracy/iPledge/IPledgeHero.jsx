"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IPledgeHero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) {
    return (
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/ipledge/mainbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
        }}
      >
        <div className="w-full h-full mx-auto px-4 flex items-center justify-center bg-[var(--dean-red)]/50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              iPledge2Vote
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Empowering citizens to participate in the democratic process through voter education
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        backgroundImage: "url('/ipledge/mainbg.jpg')",
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
            iPledge2Vote
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Empowering citizens to participate in the democratic process through voter education
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
} 