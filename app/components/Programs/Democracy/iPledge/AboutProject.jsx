"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutProject() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">About The Project</h2>
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
              The iPledge2Vote Project addresses voting barriers which have affected our voting process and have
              made the elections uninteresting. Through stakeholders engagement and community-level dialogue,
              issues surrounding electoral process such as rigorous registration, voting only at the registration
              wards, disenfranchisement to voting for citizens staying outside Nigeria, inability to vote due to
              change in address.
            </p>
            <p>
              The Voters Activation Project (VAP) mobilizes citizens' town hall meetings with relevant stakeholders to
              strategically design ideas and possible review of electoral policy and laws in order to open-up and
              digitalize our electoral process to become easily accessible and more democratic.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/ipledge/vote1.jpg" 
                  alt="Community engagement session"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/ipledge/vote2.jpg" 
                  alt="Voters during registration"
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