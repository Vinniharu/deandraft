"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutFixElection() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">About #FixElectionYouthAssembly</h2>
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
              #FixElectionYouthAssembly aims to harness the energy of young Nigerians and channel it into
              constructive action for electoral reform. This one-day assembly empowers young voters, gathers
              their insights, and collectively shapes the future of Nigerian democracy.
            </p>
            
            <p>
              The #FixElectionYouthAssembly phase 2 convened over 100 youth participants from Gwagwalada
              community and the University of Abuja main campus, including aspiring young political leaders. This
              forum was aimed at addressing the disillusionment among young Nigerians by empowering them to
              critically evaluate pressing electoral challenges, such as mistrust in processes and vote buying, while
              proposing actionable reforms.
            </p>
            
            <p>
              Participants also explored technology-driven solutions to rebuild trust in
              elections and foster youth-led advocacy for electoral transparency and integrity.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/fixelection/about1.jpg" 
                  alt="FixElection Youth Assembly participants engaged in discussion"
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/fixelection/about2.jpg" 
                  alt="Young Nigerians contributing to electoral reform discussions"
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