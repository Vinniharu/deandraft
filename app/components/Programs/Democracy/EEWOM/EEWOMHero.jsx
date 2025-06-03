"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EEWOMHero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const content = (
    <div
      className="relative min-h-[50vh] text-white"
      style={{
        backgroundImage: "url('/eewom/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-[50vh] mx-auto px-4 flex items-center justify-center bg-[var(--dean-red)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Election EyeWitness Observation Mission
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Enhancing electoral transparency through citizen-driven
            accountability and real-time observation across Nigeria.
          </motion.p>
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {content}
    </motion.div>
  );
}
