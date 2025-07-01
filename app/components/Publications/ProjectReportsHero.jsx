"use client";

import { motion } from "framer-motion";

export default function ProjectReportsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/hero/hero-2.jpg')",
          filter: "brightness(0.5)",
        }}
      />

      {/* Gradient overlay with red and blue theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80 z-10" />

      {/* Animated patterns - red and blue theme */}
      <div className="absolute inset-0 z-20 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
            Project Reports
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Explore detailed reports from our various projects and initiatives, including 
            research findings, survey results, policy briefs, and impact assessments that 
            drive meaningful change in communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 