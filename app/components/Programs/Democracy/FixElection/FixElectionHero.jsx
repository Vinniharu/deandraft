"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FixElectionHero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const content = (
    <div
      className="text-white"
      style={{
        backgroundImage: "url('/fixelection/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vh",
      }}
    >
      <div className="w-full h-full mx-auto px-4 flex items-center justify-center bg-[var(--dean-red)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            #FixElection Youth Assembly
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Empowering young Nigerians to champion electoral reform and strengthen our democracy through active participation, innovation, and advocacy.
          </p>
          
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {content}
    </motion.div>
  );
} 