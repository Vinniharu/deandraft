"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--dean-blue)]/10 to-[var(--dean-red)]/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--dean-blue)]/10 blur-[80px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[var(--dean-red)]/10 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Circles decoration */}
      <div className="absolute top-10 right-10 w-16 h-16 border-2 border-[var(--dean-blue)]/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-[var(--dean-red)]/20 rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-[var(--dean-blue)]/20 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
              Join the Movement for Electoral Reform
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              The #FixElectionYouthAssembly is more than an event — it's a movement of young Nigerians committed to 
              strengthening democracy through electoral integrity. Together, we can build a future where every vote 
              counts and every voice matters.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link 
                href="mailto:info@deaninitiative.org" 
                className="px-8 py-3 bg-[var(--dean-blue)] text-white rounded-full font-medium hover:bg-[var(--dean-blue)]/90 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Involved
              </Link>
              
              <Link 
                href="/programs/democracy" 
                className="px-8 py-3 bg-white text-[var(--dean-blue)] border border-[var(--dean-blue)]/20 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Explore Democracy Programs
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--dean-blue)] shadow-sm">
              #FixElectionYouthAssembly
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--dean-blue)] shadow-sm">
              #ElectoralReform
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--dean-blue)] shadow-sm">
              #YouthEngagement
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--dean-blue)] shadow-sm">
              #DemocracyInAction
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 