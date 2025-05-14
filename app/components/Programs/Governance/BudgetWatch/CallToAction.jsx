"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Budget Watch Movement</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Together, we can strengthen governance through citizen participation in budgeting processes. 
              Join our efforts to foster transparency, accountability, and more responsive governance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="mailto:info@dean.com.ng" 
                className="px-8 py-4 bg-white text-[var(--dean-blue)] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                #BudgetTransparency
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                #CitizenParticipation
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                #OpenGovernance
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                #BudgetWatch
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 