"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function JoinUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Animation hooks
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const actions = [
    {
      title: "Volunteer",
      icon: "🙋‍♀️",
      description:
        "Join our volunteer network and contribute your skills and time to our impactful initiatives across Africa.",
      link: "/volunteer",
      color: "blue",
    },
    {
      title: "Donate",
      icon: "❤️",
      description:
        "Support our youth-driven programs with a donation that helps create sustainable futures and empower communities.",
      link: "/donate",
      color: "red",
    },
    {
      title: "Partner With Us",
      icon: "🤝",
      description:
        "Collaborate with DEAN Initiative to create meaningful impact through strategic partnerships and joint initiatives.",
      link: "/partner",
      color: "blue",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      id="join-us"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate={contentInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/10 blur-[100px]"></div>
        <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Join Our Movement
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Be part of our mission to empower youth, champion sustainable
              development, and create positive change across Africa
            </p>
          </motion.div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                custom={index}
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 mb-6 rounded-full bg-[var(--dean-${action.color})]/10 flex items-center justify-center text-3xl`}
                  >
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dean-blue)] mb-3">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{action.description}</p>
                  <Link href={action.link}>
                    <span
                      className={`inline-flex items-center text-white bg-[var(--dean-${action.color})] hover:bg-[var(--dean-${action.color})]/90 py-2 px-4 rounded-md text-sm transition-colors duration-200`}
                    >
                      Get Started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
