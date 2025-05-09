"use client";

import { motion } from "framer-motion";

export default function YouthParticipation() {
  const points = [
    {
      title: "Fresh Perspectives",
      description: "Youth possess unique perspectives on the challenges facing society, offering innovative solutions to long-standing problems."
    },
    {
      title: "Technological Savvy",
      description: "Young people are natural adopters of technology, which can be a transformative tool for electoral process modernization."
    },
    {
      title: "Stakeholders for the Future",
      description: "The youth hold a vested interest in the future of Nigeria; their active involvement ensures their needs and aspirations are reflected in the democratic process."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[80px]"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Relevance of Youth Participation in Democracy</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700 mb-12"
          >
            <p className="text-xl font-medium text-center">
              Young people constitute a dynamic and potent force for positive change in Nigeria. They represent a
              significant portion of the electorate, and their voices are essential in building a participatory
              democracy.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-b from-[var(--dean-blue)]/5 to-[var(--dean-red)]/5 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl text-[var(--dean-blue)] mb-4">
                  {index === 0 ? "💡" : index === 1 ? "🚀" : "🔄"}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--dean-blue)]">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-[var(--dean-blue)]/10 to-[var(--dean-red)]/10 p-8 rounded-xl shadow-md"
          >
            <p className="text-lg italic text-gray-700 text-center">
              "The #FixElectionYouthAssembly emphasized the critical role of young people as catalysts for change,
              urging them to champion accountability and inclusivity in Nigeria's democratic processes. By equipping
              participants with knowledge and platforms for dialogue, the initiative sought to reignite hope in a system
              capable of representing the interests and aspirations of its largest demographic."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 