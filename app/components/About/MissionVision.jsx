"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function MissionVision() {
  // Set up intersection observer hooks for animation triggers
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [visionRef, visionInView] = useInView({
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/3 blur-[150px] rounded-full" />
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[var(--dean-red)]/3 blur-[150px] rounded-full" />
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Title */}
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Our Vision & Mission
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Guiding principles that drive our work and shape our impact
            </p>
          </motion.div>

          <motion.div
            ref={visionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            {/* Vision Content - Order reversed on mobile */}
            <div className="space-y-6 md:order-last" id="vision">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Vision
              </h3>
              <p className="text-lg font-semibold text-[var(--dean-red)]">
                We envisioned a world empowered youth lead transformative change
                to achieve inclusive, sustainable, and participatory societies
                for all.
              </p>
              <p className="text-gray-700">
                This vision reflects our belief in the power of young people to
                redefine the future through leadership, creativity, and
                inclusivity.
              </p>
              <div className="pt-4">
                <motion.div
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--dean-red)] hover:bg-[var(--dean-red)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--dean-red)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.div>
              </div>
            </div>

            {/* Vision Image - Order maintained on mobile */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px] md:order-first"
              variants={imageVariants}
            >
              <Image
                src="/hero/hero-3.jpg"
                alt="DEAN Vision"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Our Vision
                </h3>
                <div className="h-1 w-12 bg-white"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center"
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            {/* Mission Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[450px]"
              variants={imageVariants}
            >
              <Image
                src="/hero/hero-5.jpeg"
                alt="DEAN Mission"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Our Mission
                </h3>
                <div className="h-1 w-12 bg-white"></div>
              </div>
            </motion.div>

            {/* Mission Content */}
            <div className="space-y-6" id="mission">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mission
              </h3>
              <p className="text-lg font-semibold text-[var(--dean-blue)]">
                To drive impactful youth-led actions and reforms using
                21st-century tools in ensuring sustainable development through
                innovation, collaboration, and participatory approaches.
              </p>
              <p className="text-gray-700">
                At DEAN, our mission is fueled by a commitment to empowering
                youth as agents of change who lead initiatives that transform
                their communities and society at large.
              </p>
              <div className="pt-4">
                <motion.div
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--dean-blue)] hover:bg-[var(--dean-blue)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--dean-blue)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Involved
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision Section */}

          {/* Call to Action */}
          <motion.div className="mt-24 text-center" variants={titleVariants}>
            <p className="text-lg text-gray-700 italic mb-6">
              "We believe in the power of young people to create lasting change
              for a better world."
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:info@deaninitiative.org"
                className="px-8 py-4 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Join Our Movement
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
