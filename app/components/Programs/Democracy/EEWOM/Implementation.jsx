"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Implementation() {
  const [isClient, setIsClient] = useState(false);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const implementationSteps = [
    {
      title: "Observer Network",
      description: "DEAN INITIATIVE strategically deployed a vast network of over 1,000 observers, drawn from our Archive of Volunteers, covering all 744 local government areas across Nigeria.",
      icon: "👥"
    },
    {
      title: "Situation Room",
      description: "To facilitate real-time feedback and incident reporting, a dynamic team of over 30 Situation Room officers collected live reports from EEW observers.",
      icon: "🏢"
    },
    {
      title: "Strategic Partnerships",
      description: "Partnerships played a pivotal role in our success, as DEAN INITIATIVE collaborated with organizations such as Civic Hive, CODE, and Dataphyte.",
      icon: "🤝"
    },
    {
      title: "Parallel Vote Tabulation",
      description: "Employing the Parallel Vote Tabulation (PVT) methodology, we leveraged the Election EyeWitness Citizen Observers stationed across various polling units to obtain accurate, real-time information.",
      icon: "📊"
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

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
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
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Implementation Strategy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Our comprehensive approach to electoral monitoring and citizen engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/eewom/implementation.jpg" 
                alt="EEWOM observers receiving training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white/90 text-[var(--dean-blue)] px-3 py-1 rounded-full text-sm font-medium">
                  Implementation in Action
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--dean-blue)]/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto">
              Through our strategic implementation approach, we ensure comprehensive coverage, real-time reporting, 
              and effective collaboration to strengthen Nigeria's electoral processes and promote democratic values.
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
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Implementation Strategy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Our comprehensive approach to electoral monitoring and citizen engagement
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16"
            variants={contentVariants}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/eewom/implementation.jpg" 
                alt="EEWOM observers receiving training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="bg-white/90 text-[var(--dean-blue)] px-3 py-1 rounded-full text-sm font-medium">
                  Implementation in Action
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 items-start"
                  variants={contentVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--dean-blue)]/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
            variants={contentVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
            <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto">
              Through our strategic implementation approach, we ensure comprehensive coverage, real-time reporting, 
              and effective collaboration to strengthen Nigeria's electoral processes and promote democratic values.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 