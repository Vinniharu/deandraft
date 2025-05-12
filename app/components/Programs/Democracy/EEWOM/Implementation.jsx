"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Implementation() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Implementation Strategy</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/eewom/implementation.jpg" 
                  alt="EEWOM observers receiving training"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-3">Observer Network</h3>
                <p className="text-gray-700">
                  DEAN INITIATIVE strategically deployed a vast network of over 1,000 observers, drawn from our 
                  Archive of Volunteers, covering all 744 local government areas across Nigeria.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-3">Situation Room</h3>
                <p className="text-gray-700">
                  To facilitate real-time feedback and incident reporting, a dynamic team of over 30 Situation Room 
                  officers collected live reports from EEW observers.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-3">Strategic Partnerships</h3>
                <p className="text-gray-700">
                  Partnerships played a pivotal role in our success, as DEAN INITIATIVE collaborated with organizations 
                  such as Civic Hive, CODE, and Dataphyte.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-3">Parallel Vote Tabulation</h3>
                <p className="text-gray-700">
                  Employing the Parallel Vote Tabulation (PVT) methodology, we leveraged the Election EyeWitness 
                  Citizen Observers stationed across various polling units to obtain accurate, real-time information.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 