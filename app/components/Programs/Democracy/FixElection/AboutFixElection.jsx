"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function AboutFixElection() {
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
              About #FixElectionYouthAssembly
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering the next generation to lead electoral reform initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                #FixElectionYouthAssembly aims to harness the energy of young Nigerians and channel it into
                constructive action for electoral reform. This one-day assembly empowers young voters, gathers
                their insights, and collectively shapes the future of Nigerian democracy.
              </p>
              <p className="text-lg leading-relaxed">
                The #FixElectionYouthAssembly phase 2 convened over 100 youth participants from Gwagwalada
                community and the University of Abuja main campus, including aspiring young political leaders. This
                forum was aimed at addressing the disillusionment among young Nigerians by empowering them to
                critically evaluate pressing electoral challenges.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Participants explored technology-driven solutions to rebuild trust in elections and foster youth-led 
                advocacy for electoral transparency and integrity. The assembly focused on key issues such as 
                mistrust in processes and vote buying, while proposing actionable reforms.
              </p>
              <p className="text-lg leading-relaxed">
                Through interactive sessions and expert-led discussions, participants developed practical strategies
                for enhancing electoral integrity and increasing youth participation in the democratic process.
              </p>
            </div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "To create a movement of empowered young Nigerians who actively participate in and influence the electoral process, fostering a democracy that truly represents the aspirations of the next generation."
            </p>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/fixelection/about1.jpg" 
                alt="FixElection Youth Assembly participants engaged in discussion"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/fixelection/about2.jpg" 
                alt="Young Nigerians contributing to electoral reform discussions"
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
              About #FixElectionYouthAssembly
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Empowering the next generation to lead electoral reform initiatives
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            variants={contentVariants}
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                #FixElectionYouthAssembly aims to harness the energy of young Nigerians and channel it into
                constructive action for electoral reform. This one-day assembly empowers young voters, gathers
                their insights, and collectively shapes the future of Nigerian democracy.
              </p>
              <p className="text-lg leading-relaxed">
                The #FixElectionYouthAssembly phase 2 convened over 100 youth participants from Gwagwalada
                community and the University of Abuja main campus, including aspiring young political leaders. This
                forum was aimed at addressing the disillusionment among young Nigerians by empowering them to
                critically evaluate pressing electoral challenges.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Participants explored technology-driven solutions to rebuild trust in elections and foster youth-led 
                advocacy for electoral transparency and integrity. The assembly focused on key issues such as 
                mistrust in processes and vote buying, while proposing actionable reforms.
              </p>
              <p className="text-lg leading-relaxed">
                Through interactive sessions and expert-led discussions, participants developed practical strategies
                for enhancing electoral integrity and increasing youth participation in the democratic process.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
              "To create a movement of empowered young Nigerians who actively participate in and influence the electoral process, fostering a democracy that truly represents the aspirations of the next generation."
            </p>
          </motion.div>
          
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={contentVariants}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/fixelection/about1.jpg" 
                alt="FixElection Youth Assembly participants engaged in discussion"
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/fixelection/about2.jpg" 
                alt="Young Nigerians contributing to electoral reform discussions"
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