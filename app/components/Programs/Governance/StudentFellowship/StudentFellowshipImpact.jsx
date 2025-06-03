"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Link from "next/link";
import ExternalLink from "@/app/components/ExternalLink";

export default function StudentFellowshipImpact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const impactStats = [
    {
      number: "200+",
      label: "Fellows Trained",
      description: "Young leaders equipped with governance and advocacy skills",
    },
    {
      number: "30+",
      label: "Local Governments",
      description: "Participating in transparency initiatives",
    },
    {
      number: "50+",
      label: "Projects Implemented",
      description: "Community-driven initiatives for better governance",
    },
    {
      number: "1000+",
      label: "Community Members",
      description: "Engaged in local governance processes",
    },
  ];

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
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div className="text-center" variants={headerVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                Our Impact
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Transforming local governance through youth engagement and community participation
              </p>
            </motion.div>

            {/* Impact Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              variants={headerVariants}
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink
                href="mailto:info@dean.org.ng"
                className="inline-block bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Get Involved
              </ExternalLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 