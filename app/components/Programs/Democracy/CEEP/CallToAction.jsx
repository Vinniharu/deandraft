"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join The CEEP Movement</h2>
          <p className="text-lg text-white/90 mb-10">
            Together, we can strengthen Nigeria's democracy by empowering citizens to advocate for electoral integrity and good governance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:info@dean.com.ng" className="px-8 py-3 bg-white text-[var(--dean-blue)] font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-xl">
              Get Involved
            </Link>
            <Link href="/programs/democracy/more" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300">
              Explore Other Democracy Programs
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 