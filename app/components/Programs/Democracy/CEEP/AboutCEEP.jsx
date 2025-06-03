"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AboutCEEP() {
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">About CEEP</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens to lead advocacy campaigns against electoral corruption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                #CEEP works with Women and Youth Groups using influential community leaders to lead a grassroot
                citizens led advocacy campaign against election vices. Data has become a mirror in development
                activities through which complex and difficult stories can be presented in a clear and undoubted
                format for policy and planning engagement.
              </p>
              <p className="text-lg leading-relaxed">
                These identified groups are trained using election data based on election history and resulting effect on 
                national development. Election is people centered and #ceep is built to deliver chains of activities 
                that will make the people own election and all the processes around their involvement.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                This project combines the use of Civic Tech tools with new media advocacy activities to engage, train
                and mobilize citizens to raise their informed voices in a coordinated manner through a creative
                community story telling template.
              </p>
              <p className="text-lg leading-relaxed">
                This sustainably promotes the Democracy Rethinking ideals of #ceep and ensures speedy citizens 
                actions during election activities. #ceep is an advocacy of the people by the people against 
                every act of electoral corruption.
              </p>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "We envision a Nigeria where citizens are empowered to actively participate in and safeguard the electoral process, fostering a democracy that truly represents the will of the people."
            </p>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ceep/about1.jpg" 
                alt="CEEP community engagement session"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ceep/about2.jpg" 
                alt="Citizens participating in election education"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">About CEEP</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering citizens to lead advocacy campaigns against electoral corruption
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={contentVariants}
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                #CEEP works with Women and Youth Groups using influential community leaders to lead a grassroot
                citizens led advocacy campaign against election vices. Data has become a mirror in development
                activities through which complex and difficult stories can be presented in a clear and undoubted
                format for policy and planning engagement.
              </p>
              <p className="text-lg leading-relaxed">
                These identified groups are trained using election data based on election history and resulting effect on 
                national development. Election is people centered and #ceep is built to deliver chains of activities 
                that will make the people own election and all the processes around their involvement.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                This project combines the use of Civic Tech tools with new media advocacy activities to engage, train
                and mobilize citizens to raise their informed voices in a coordinated manner through a creative
                community story telling template.
              </p>
              <p className="text-lg leading-relaxed">
                This sustainably promotes the Democracy Rethinking ideals of #ceep and ensures speedy citizens 
                actions during election activities. #ceep is an advocacy of the people by the people against 
                every act of electoral corruption.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "We envision a Nigeria where citizens are empowered to actively participate in and safeguard the electoral process, fostering a democracy that truly represents the will of the people."
            </p>
          </motion.div>
          
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={contentVariants}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ceep/about1.jpg" 
                alt="CEEP community engagement session"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ceep/about2.jpg" 
                alt="Citizens participating in election education"
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