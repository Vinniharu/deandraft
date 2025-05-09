"use client";

import { motion } from "framer-motion";

export default function ImpactReport() {
  const impacts = [
    {
      icon: "👥",
      title: "Community Engagement",
      description: "Engaged with over 50 influential community leaders across multiple regions"
    },
    {
      icon: "🎓",
      title: "Training Programs",
      description: "Conducted 25+ training sessions on election data analysis and civic advocacy"
    },
    {
      icon: "🗣️",
      title: "Advocacy Campaigns",
      description: "Launched 15 grassroots campaigns against electoral malpractices"
    },
    {
      icon: "📱",
      title: "Civic Tech Tools",
      description: "Developed and deployed civic tech tools reaching 10,000+ citizens"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-red-900 text-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact Report</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            CEEP has made significant strides in promoting electoral integrity and citizen-led advocacy
            against electoral corruption across Nigeria.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
              <p className="text-white/80">{impact.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg italic text-white/90 max-w-3xl mx-auto">
            Through these initiatives, we've strengthened communities' ability to hold political actors accountable and improved electoral processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 