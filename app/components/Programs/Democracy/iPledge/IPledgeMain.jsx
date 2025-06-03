"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function IPledgeMain() {
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              About the Initiative
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens through voter education and democratic engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                iPledge2Vote is a transformative initiative designed to strengthen democratic participation and civic engagement across Nigeria. Through targeted interventions and community-level dialogue, we address barriers to voting and work towards making elections more accessible and democratic.
              </p>
              <p className="text-lg leading-relaxed">
                Our approach combines voter education, stakeholder engagement, and grassroots mobilization to create lasting impact in communities. We focus on empowering citizens with the knowledge and tools they need to participate effectively in the democratic process.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The initiative addresses critical challenges in Nigeria's electoral process—voter apathy, misinformation, and barriers to participation. Young people and marginalized communities are often excluded from the democratic process, yet their voices are crucial for representative governance.
              </p>
              <p className="text-lg leading-relaxed">
                Through iPledge2Vote, we're changing this narrative by promoting inclusive participation, fostering informed decision-making, and building a stronger democratic culture from the grassroots up.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "We envision a Nigeria where every citizen is an informed and active participant in the democratic process, ensuring that their voices are heard and their votes count in shaping the nation's future."
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
      className="py-20 bg-white relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={headingVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              About the Initiative
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens through voter education and democratic engagement
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={paragraphVariants}
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                iPledge2Vote is a transformative initiative designed to strengthen democratic participation and civic engagement across Nigeria. Through targeted interventions and community-level dialogue, we address barriers to voting and work towards making elections more accessible and democratic.
              </p>
              <p className="text-lg leading-relaxed">
                Our approach combines voter education, stakeholder engagement, and grassroots mobilization to create lasting impact in communities. We focus on empowering citizens with the knowledge and tools they need to participate effectively in the democratic process.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                The initiative addresses critical challenges in Nigeria's electoral process—voter apathy, misinformation, and barriers to participation. Young people and marginalized communities are often excluded from the democratic process, yet their voices are crucial for representative governance.
              </p>
              <p className="text-lg leading-relaxed">
                Through iPledge2Vote, we're changing this narrative by promoting inclusive participation, fostering informed decision-making, and building a stronger democratic culture from the grassroots up.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "We envision a Nigeria where every citizen is an informed and active participant in the democratic process, ensuring that their voices are heard and their votes count in shaping the nation's future."
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 