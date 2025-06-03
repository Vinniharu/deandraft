"use client";

import ExternalLink from "@/app/components/ExternalLink";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LakeChadImpact() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const impactData = [
    {
      stat: "20+",
      label: "Youth Fellows",
      description: "Emerging climate leaders from across the Lake Chad Basin",
    },
    {
      stat: "4",
      label: "Countries",
      description:
        "Regional representation from Nigeria, Chad, Niger, and Cameroon",
    },
    {
      stat: "24",
      label: "Months",
      description: "Intensive training and project implementation period",
    },
    {
      stat: "12+",
      label: "Projects",
      description: "Community-based climate resilience initiatives",
    },
  ];

  const achievements = [
    {
      title: "Policy Influence",
      description:
        "Fellows have contributed to national climate policies and international dialogues",
    },
    {
      title: "Community Impact",
      description:
        "Direct engagement with over 5,000 community members through climate initiatives",
    },
    {
      title: "Knowledge Exchange",
      description:
        "Creation of a regional knowledge-sharing platform for climate solutions",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={headerVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Our Impact
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Transforming youth potential into climate action across the Lake
              Chad Basin
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
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Get Involved */}
          <motion.div
            className="bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] rounded-xl p-8 text-white text-center"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Join us in building climate resilience across the Lake Chad Basin.
              Whether you're a potential fellow, partner organization, or
              supporter, there are many ways to contribute to our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ExternalLink href="mailto:info@dean.org.ng">
                <button className="bg-white text-[var(--dean-blue)] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                  Apply Now
                </button>
              </ExternalLink>
              <ExternalLink href="mailto:info@dean.org.ng">
                <button className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[var(--dean-blue)] transition-colors">
                  Partner With Us
                </button>
              </ExternalLink>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
