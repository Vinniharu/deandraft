"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactReport() {
  const stats = [
    {
      number: "1,000+",
      label: "Observers Deployed",
      description: "Comprehensive coverage across all local government areas"
    },
    {
      number: "744",
      label: "LGAs Covered",
      description: "Complete nationwide coverage across Nigeria"
    },
    {
      number: "30+",
      label: "Situation Room Officers",
      description: "Ensuring immediate feedback from observers"
    },
    {
      number: "3+",
      label: "Strategic Partnerships",
      description: "Collaboration with Civic Hive, CODE, and Dataphyte"
    }
  ];

  const achievements = [
    "Deployment of 1,000 observers providing comprehensive coverage across all local government areas",
    "Successfully channeling positive energy from the youth into productive participation in the electoral process",
    "Over 30 Situation Room officers ensuring immediate feedback from EEW observers",
    "Strategic partnerships enabling collective impact on tracking and analyzing presidential results"
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Impact & Achievements</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The EEWOM initiative has achieved substantial impact, enhancing electoral transparency and 
              fostering youth engagement in Nigeria's democratic processes.
            </p>
          </motion.div>
          
          {/* Key achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-[var(--dean-blue)]/5 to-[var(--dean-red)]/5 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--dean-blue)] flex items-center justify-center text-white mt-1 mr-3">
                      ✓
                    </span>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/eewom/impact.jpg" 
                alt="EEWOM impact in electoral monitoring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-medium">
                  EEWOM has contributed to enhancing Nigeria's election integrity and fostering youth involvement 
                  in shaping the country's political landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 