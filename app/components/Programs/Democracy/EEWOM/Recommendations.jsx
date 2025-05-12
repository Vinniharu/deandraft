"use client";

import { motion } from "framer-motion";

export default function Recommendations() {
  const recommendations = [
    {
      title: "Transition to Digital Voting",
      description: "Advocate for a user-friendly digitized voting system (E-voting) to prevent result manipulation and enhance free and fair elections with increased voter participation."
    },
    {
      title: "Thorough E-Voting Implementation",
      description: "Implement E-voting systems that are thoroughly modeled, developed, evaluated, and deployed by INEC to ensure reliability and security."
    },
    {
      title: "Transparency and Verifiability",
      description: "Ensure transparency in each step of the election process, independent verifiability, and protection of votes from alteration."
    },
    {
      title: "Equal Voter Opportunities",
      description: "INEC should ensure equal opportunities for all eligible voters, regardless of their location or socioeconomic status."
    },
    {
      title: "Blockchain Technology",
      description: "Explore the use of Blockchain technology to prevent vote fraud due to its decentralized characteristics and enhanced security features."
    },
    {
      title: "Budget Scrutiny",
      description: "Encourage public and civil society organizations to scrutinize and challenge INEC regarding the review of its budget in previous elections."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Our Recommendations</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Based on our observations and analysis, DEAN INITIATIVE recommends the following improvements 
              to enhance the electoral process in Nigeria:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{recommendation.title}</h3>
                </div>
                <p className="text-gray-700 pl-14">{recommendation.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
              "DEAN Initiative's Election EyeWitness Observation Mission was not just an observation; it was a 
              dynamic and impactful initiative that contributed to the enhancement of Nigeria's election integrity 
              and the active involvement of the youth in shaping the country's political landscape."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 