"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PBP() {
  const outcomes = [
    {
      title: "Increased Awareness and Commitment",
      description: "Over 40 stakeholders gained a better understanding of PBP principles, fostering a shared commitment to advancing OGP-Local implementation."
    },
    {
      title: "Actionable Recommendations",
      description: "Participants developed a list of strategies, including the need for robust institutional frameworks, capacity-building initiatives, and resource allocation for PBP processes."
    },
    {
      title: "Stronger Collaboration",
      description: "The event facilitated partnerships among civil society organizations, government representatives, and media, reinforcing collective action."
    },
    {
      title: "Empowered Local Governments",
      description: "Steering Committees from three Area Councils now have actionable tools to address transparency challenges, improve service delivery, and enhance citizen trust."
    }
  ];

  return (
    <section id="pbp" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Citizens' Open Dialogue on Participatory Budgeting and Planning (PBP)</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Leading change even in the face of systemic challenges
            </p>
          </motion.div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg mb-12"
            >
              <Image 
                src="/more/pbp.jpg" 
                alt="Citizens' Open Dialogue on Participatory Budgeting and Planning"
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-medium max-w-2xl">
                  Bringing together diverse stakeholders to transform local governance through inclusive and transparent budgeting practices.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <p>
                DEAN Initiative organized a one-day Citizens' Open Dialogue session that brought together over 40
                participants from diverse sectors, including civil society organizations like Centre LSD, BudgIT, Action
                Aid, and representatives from Kwali, AMAC, and Gwagwalada Area Councils. The event focused on
                equipping Steering Committee members with a deeper understanding of PBP and its alignment with OGP
                co-creation principles.
              </p>
              
              <p>
                Through interactive sessions and capacity-building workshops, the dialogue
                emphasized collaboration, transparency, and practical tools to drive the adoption of PBP. Stakeholders
                explored strategies to overcome challenges, strengthen citizen participation, and institutionalize inclusive
                governance practices.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-8 text-center">Key Outcomes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{outcome.title}</h4>
                  <p className="text-gray-700">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 