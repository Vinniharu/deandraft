"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImpactReport() {
  const [isClient, setIsClient] = useState(false);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const impactData = [
    {
      stat: "1,000+",
      label: "Observers Deployed",
      description: "Comprehensive coverage across all local government areas"
    },
    {
      stat: "744",
      label: "LGAs Covered",
      description: "Complete nationwide coverage across Nigeria"
    },
    {
      stat: "30+",
      label: "Situation Room Officers",
      description: "Ensuring immediate feedback from observers"
    },
    {
      stat: "3+",
      label: "Strategic Partnerships",
      description: "Collaboration with Civic Hive, CODE, and Dataphyte"
    }
  ];

  const achievements = [
    {
      title: "Nationwide Coverage",
      description: "Successfully deployed observers across all local government areas, ensuring comprehensive electoral monitoring.",
      icon: "🗺️"
    },
    {
      title: "Youth Empowerment",
      description: "Channeled positive energy from the youth into productive participation in the electoral process.",
      icon: "💪"
    },
    {
      title: "Real-time Monitoring",
      description: "Established an effective system for immediate feedback and incident reporting from observers.",
      icon: "⚡"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Our Impact
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Transforming electoral monitoring through citizen engagement and real-time observation
            </p>
          </motion.div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md"
                variants={itemVariants}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-2">
                  {item.stat}
                </h3>
                <p className="font-semibold text-gray-900 mb-2">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={cardVariants}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/eewom/impact.jpg" 
                alt="EEWOM impact in electoral monitoring"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white/90 text-[var(--dean-blue)] px-3 py-1 rounded-full text-sm font-medium">
                  Making a Difference
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 items-start"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--dean-blue)]/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] rounded-xl p-8 text-white text-center"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Be part of our mission to strengthen Nigeria's electoral processes through active citizen participation and monitoring.
            </p>
            <a 
              href="mailto:info@dean.org.ng"
              className="inline-block px-8 py-3 bg-white text-[var(--dean-blue)] rounded-full font-semibold hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Get Involved Today
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 