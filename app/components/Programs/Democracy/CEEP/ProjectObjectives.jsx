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
              CEEP develops and delivers community democracy dialogues tools in the forms of Trainings,
              Community Town hall Engagements and civic tech capable of building a new citizen based actions
              against every form of election fraud, vices and corruption which will in turn make the Nigerian
              government and politics more accountable and transparent to all by:
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>Enhancing citizens' democratic participation</li>
              <li>Demanding for better service delivery</li>
              <li>Strengthening citizens, led advocacy agenda</li>
              <li>Training citizens to use election data for advocacy and accountability</li>
              <li>Mobilizing community leaders as advocates against electoral corruption</li>
              <li>Creating platforms for inclusive democratic dialogue</li>
            </ul>
            
            <div className="mt-12 relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/ceep/objectives.jpg" 
                alt="CEEP training session"
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