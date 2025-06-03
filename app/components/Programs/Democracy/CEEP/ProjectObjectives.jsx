"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function ProjectObjectives() {
  const [isClient, setIsClient] = useState(false);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const objectives = [
    {
      title: "Citizen Empowerment",
      description: "Enhancing citizens' democratic participation and demanding better service delivery through informed engagement.",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Data-Driven Advocacy",
      description: "Training citizens to use election data for advocacy and accountability in the democratic process.",
      icon: "📊",
      color: "red"
    },
    {
      title: "Community Leadership",
      description: "Mobilizing community leaders as advocates against electoral corruption and malpractices.",
      icon: "🤝",
      color: "blue"
    },
    {
      title: "Democratic Dialogue",
      description: "Creating platforms for inclusive democratic dialogue and citizen-led advocacy initiatives.",
      icon: "💬",
      color: "red"
    },
    {
      title: "Civic Tech Integration",
      description: "Leveraging technology for transparent and accountable electoral processes.",
      icon: "💻",
      color: "blue"
    },
    {
      title: "Grassroots Mobilization",
      description: "Building networks of engaged citizens for sustained electoral integrity.",
      icon: "🌱",
      color: "red"
    }
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const content = (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Program Objectives
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Our carefully designed objectives ensure meaningful impact in electoral integrity and citizen participation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-full bg-[var(--dean-${objective.color})]/10 flex items-center justify-center text-3xl`}>
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--dean-blue)]">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Approach</h3>
            <p className="text-gray-600">
              CEEP takes a holistic approach to electoral integrity, addressing not just the technical aspects of elections but also the social, economic, and educational factors that influence citizen participation and democratic processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Program Objectives
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Our carefully designed objectives ensure meaningful impact in electoral integrity and citizen participation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                custom={index}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-full bg-[var(--dean-${objective.color})]/10 flex items-center justify-center text-3xl`}>
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--dean-blue)]"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Approach</h3>
            <p className="text-gray-600">
              CEEP takes a holistic approach to electoral integrity, addressing not just the technical aspects of elections but also the social, economic, and educational factors that influence citizen participation and democratic processes.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 