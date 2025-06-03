"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Objectives() {
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
      title: "Critical Evaluation",
      description: "Provide a platform for youth to thoroughly analyze the challenges encountered in past elections, focusing on issues that have diminished trust in the process.",
      icon: "🔍",
      color: "blue"
    },
    {
      title: "Electoral Law Reform",
      description: "Gather youth perspectives on reforming the Electoral Act to enhance transparency, fairness, and credibility.",
      icon: "⚖️",
      color: "red"
    },
    {
      title: "Future Voting Behavior",
      description: "Foster discussions aimed at determining how young people can be mobilized and how their voting behavior can positively impact future elections.",
      icon: "🗳️",
      color: "blue"
    },
    {
      title: "Technology-Driven Solutions",
      description: "Explore how technology can bolster youth confidence in electoral management, including the implementation of secure voting systems and real-time results dissemination.",
      icon: "💻",
      color: "red"
    },
    {
      title: "Youth Mobilization",
      description: "Create strategies for effective youth engagement and participation in the electoral process at all levels.",
      icon: "👥",
      color: "blue"
    },
    {
      title: "Policy Advocacy",
      description: "Develop frameworks for youth-led advocacy initiatives that promote electoral integrity and reform.",
      icon: "📢",
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
              Our carefully designed objectives ensure meaningful impact in electoral reform and youth participation
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
              The #FixElectionYouthAssembly takes a holistic approach to electoral reform, addressing not just the technical aspects of elections but also the social, economic, and educational factors that influence youth participation and democratic processes. Through this comprehensive strategy, we aim to create lasting change in Nigeria's electoral landscape.
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
              Our carefully designed objectives ensure meaningful impact in electoral reform and youth participation
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
              The #FixElectionYouthAssembly takes a holistic approach to electoral reform, addressing not just the technical aspects of elections but also the social, economic, and educational factors that influence youth participation and democratic processes. Through this comprehensive strategy, we aim to create lasting change in Nigeria's electoral landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 