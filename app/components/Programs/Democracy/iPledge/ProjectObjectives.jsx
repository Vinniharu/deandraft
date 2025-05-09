"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectObjectives() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Project Objectives</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <p>
              Voters Activation Project aims to build the citizens' political power through quality voting
              participation, using their voting commitment to advocate for their rights, and using the same to hold
              elected officials accountable. VAP seeks to reignite citizens' interest and participation in Nigeria's
              democracy through increased voter turnout in elections.
            </p>
            <p>
              Through well-defined project activities, VAP seeks to foster a democratic process through a conscious review of the Electoral Act to address voting barriers such as:
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Rigorous voting registration</li>
              <li>Restrictions to vote only at the registered locations</li>
              <li>Disenfranchisement of Nigerians in Diaspora</li>
              <li>The inability of registered voter to participate in voting due to relocation from one state or local government area to another</li>
              <li>Restriction of movement on the voting day which affects the mobility of voters from their homes to their polling units</li>
            </ul>
            
            <p className="mt-6">
              The project will run for 24 months across 6 States in Nigeria.
            </p>
            
            <div className="mt-12 relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ipledge/objectives.jpg" 
                alt="Citizens engaging in democratic process"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 