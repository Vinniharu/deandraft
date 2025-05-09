"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImpactReport() {
  const stats = [
    { number: "100+", label: "Participants", description: "Young Nigerians from diverse backgrounds engaged in the Youth Assembly" },
    { number: "25", label: "States", description: "Representation across Nigeria, ensuring diverse regional perspectives" },
    { number: "10+", label: "Expert Sessions", description: "Led by electoral specialists, policymakers, and civil society leaders" },
    { number: "15+", label: "Reform Proposals", description: "Actionable recommendations for electoral law reform and process improvement" }
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Impact & Reach</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The #FixElectionYouthAssembly has made significant strides in mobilizing young Nigerians for electoral reform and civic engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/fixelection/impact.jpg" 
              alt="Youth assembly participants engaged in discussion"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-white/90 text-[var(--dean-blue)] px-3 py-1 rounded-full text-sm font-medium">
                #FixElectionYouthAssembly
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Achievements</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[var(--dean-blue)] mr-2">✓</span>
                <span className="text-gray-700">Created a nationwide platform for youth-led electoral reform dialogue</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--dean-blue)] mr-2">✓</span>
                <span className="text-gray-700">Developed policy briefs on electoral integrity and voting accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--dean-blue)] mr-2">✓</span>
                <span className="text-gray-700">Established partnerships with electoral bodies and civil society organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--dean-blue)] mr-2">✓</span>
                <span className="text-gray-700">Trained youth advocates who are now championing electoral reform in their communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--dean-blue)] mr-2">✓</span>
                <span className="text-gray-700">Increased social media engagement and public awareness on electoral issues</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 