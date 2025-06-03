"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AboutEEWOM() {
  const [isClient, setIsClient] = useState(false);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const contentVariants = {
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

  const content = (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              About EEWOM
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens to safeguard electoral integrity through active observation and reporting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Election EyeWitness Observation Mission (EEWOM) tackles a historically overlooked gap in election 
                monitoring, presenting a strong potential to fortify Nigeria's electoral processes and demonstrating 
                the critical role of citizen-driven accountability in promoting democratic integrity.
              </p>
              <p className="text-lg leading-relaxed">
                In response to the need for enhanced electoral transparency and youth engagement, DEAN INITIATIVE 
                initiated EEWOM for the February 25 presidential election. The electoral landscape presented challenges, 
                with a call for increased participation and vigilance in the face of potential irregularities.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                This impactful initiative not only observed but actively contributed to enhancing Nigeria's election 
                integrity and fostering youth involvement in shaping the country's political landscape. EEWOM was not 
                just an observation; it was a dynamic and impactful initiative that contributed to the enhancement of 
                Nigeria's election integrity and the active involvement of the youth in shaping the country's political 
                landscape.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "To empower citizens as active guardians of electoral integrity through comprehensive observation, real-time reporting, and youth-led initiatives that strengthen democratic processes in Nigeria."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/eewom/about1.jpg" 
                alt="EEWOM observers monitoring an election"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/eewom/about2.jpg" 
                alt="EEWOM situation room with officers collecting live reports"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
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
      className="py-20 bg-white relative overflow-hidden"
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
            variants={headingVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              About EEWOM
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens to safeguard electoral integrity through active observation and reporting
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={contentVariants}
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The Election EyeWitness Observation Mission (EEWOM) tackles a historically overlooked gap in election 
                monitoring, presenting a strong potential to fortify Nigeria's electoral processes and demonstrating 
                the critical role of citizen-driven accountability in promoting democratic integrity.
              </p>
              <p className="text-lg leading-relaxed">
                In response to the need for enhanced electoral transparency and youth engagement, DEAN INITIATIVE 
                initiated EEWOM for the February 25 presidential election. The electoral landscape presented challenges, 
                with a call for increased participation and vigilance in the face of potential irregularities.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                This impactful initiative not only observed but actively contributed to enhancing Nigeria's election 
                integrity and fostering youth involvement in shaping the country's political landscape. EEWOM was not 
                just an observation; it was a dynamic and impactful initiative that contributed to the enhancement of 
                Nigeria's election integrity and the active involvement of the youth in shaping the country's political 
                landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white mb-16"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "To empower citizens as active guardians of electoral integrity through comprehensive observation, real-time reporting, and youth-led initiatives that strengthen democratic processes in Nigeria."
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={contentVariants}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/eewom/about1.jpg" 
                alt="EEWOM observers monitoring an election"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/eewom/about2.jpg" 
                alt="EEWOM situation room with officers collecting live reports"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 