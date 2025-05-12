"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutEEWOM() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">About EEWOM</h2>
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
              The Election EyeWitness Observation Mission (EEWOM) tackles a historically overlooked gap in election 
              monitoring, presenting a strong potential to fortify Nigeria's electoral processes and demonstrating 
              the critical role of citizen-driven accountability in promoting democratic integrity.
            </p>
            
            <p>
              In response to the need for enhanced electoral transparency and youth engagement, DEAN INITIATIVE 
              initiated EEWOM for the February 25 presidential election. The electoral landscape presented challenges, 
              with a call for increased participation and vigilance in the face of potential irregularities.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/eewom/about1.jpg" 
                  alt="EEWOM observers monitoring an election"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/eewom/about2.jpg" 
                  alt="EEWOM situation room with officers collecting live reports"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
            
            <p>
              This impactful initiative not only observed but actively contributed to enhancing Nigeria's election 
              integrity and fostering youth involvement in shaping the country's political landscape. EEWOM was not 
              just an observation; it was a dynamic and impactful initiative that contributed to the enhancement of 
              Nigeria's election integrity and the active involvement of the youth in shaping the country's political 
              landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 