"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function CallToAction() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Static version of Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--dean-blue)]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--dean-red)]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Join the Student Open-Gov Fellowship</h2>
              <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
                Are you a student passionate about transparency, accountability, and good governance? Apply 
                to join our next cohort of fellows and be part of the movement to transform local governance 
                in Nigeria.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  href="mailto:info@dean.com.ng" 
                  className="px-8 py-4 bg-[var(--dean-blue)] text-white rounded-full font-semibold hover:bg-[var(--dean-blue)]/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Apply for Next Cohort
                </Link>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Learn</h3>
                  <p className="text-gray-600">Gain practical knowledge about governance and budget processes</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <p className="text-gray-600">Network with like-minded youth and governance stakeholders</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Impact</h3>
                  <p className="text-gray-600">Drive real change in your community through advocacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--dean-blue)]/10 blur-[80px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[var(--dean-red)]/10 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full border-4 border-[var(--dean-blue)]/20 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full border-4 border-[var(--dean-red)]/20 hidden md:block"></div>
      <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-[var(--dean-blue)]/10 hidden md:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Join the Student Open-Gov Fellowship</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Are you a student passionate about transparency, accountability, and good governance? Apply 
              to join our next cohort of fellows and be part of the movement to transform local governance 
              in Nigeria.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="mailto:info@dean.com.ng" 
                className="px-8 py-4 bg-[var(--dean-blue)] text-white rounded-full font-semibold hover:bg-[var(--dean-blue)]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply for Next Cohort
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
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #StudentFellowship
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #OpenGovernance
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #YouthEngagement
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #BudgetTransparency
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 