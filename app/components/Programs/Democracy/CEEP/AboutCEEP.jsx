"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutCEEP() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">About CEEP</h2>
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
              #CEEP works with Women and Youth Groups using influential community leaders to lead a grassroot
              citizens led advocacy campaign against election vices. Data has become a mirror in development
              activities through which complex and difficult stories can be presented in a clear and undoubted
              format for policy and planning engagement.
            </p>
            <p>
              These identified groups are trained using election data based on election history and resulting effect on 
              national development. Election is people centered and #ceep is built to deliver chains of activities 
              that will make the people own election and all the processes around their involvement. 
              #ceep is an advocacy of the people by the people against every act of electoral corruption.
            </p>
            <p>
              This project combines the use of Civic Tech tools with new media advocacy activities to engage, train
              and mobilize citizens to raise their informed voices in a coordinated manner through a creative
              community story telling template. This sustainably promote the Democracy Rethinking ideals of
              #ceep and ensure speedy citizens actions during election activities.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/ceep/about1.jpg" 
                  alt="CEEP community engagement session"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/ceep/about2.jpg" 
                  alt="Citizens participating in election education"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 