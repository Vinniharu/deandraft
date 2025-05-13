"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Join Our Democracy Programs</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              Be part of our initiatives to strengthen democracy in Nigeria through community engagement, electoral education, and participatory governance. Together, we can build a more transparent and inclusive democratic system.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="mailto:info@deaninitiative.org" 
                className="px-8 py-4 bg-[var(--dean-blue)] text-white rounded-full font-semibold hover:bg-[var(--dean-blue)]/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Join Our Programs
              </Link>
              <Link 
                href="/programs/democracy" 
                className="px-8 py-4 bg-white text-[var(--dean-blue)] border border-[var(--dean-blue)] rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg"
              >
                Explore More Initiatives
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
                #CommunityEngagement
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #ElectoralReform
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #ParticipatorGovernance
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                #DemocracyInAction
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 