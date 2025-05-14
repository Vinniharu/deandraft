"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ExternalLink from '@/app/components/ExternalLink';

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/20 to-[var(--dean-red)]/10" />
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
      </div>

      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[var(--dean-blue)]/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-[var(--dean-red)]/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join the <span className="text-[var(--dean-blue)]">#OpenLGAs</span> Movement
              </motion.h2>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-6"
                initial={{ opacity: 0, width: 0 }}
                animate={inView ? { opacity: 1, width: 96 } : { opacity: 0, width: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.p
                className="text-lg text-foreground/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Be part of our mission to transform local governance through transparency,
                accountability, and citizen participation. Together, we can build stronger communities.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-[var(--dean-blue)]/20 opacity-50" />
                <h3 className="text-xl font-semibold mb-3 text-[var(--dean-blue)]">For Citizens</h3>
                <p className="mb-4 text-foreground/80">
                  Become an advocate for transparent local governance. Participate in town hall meetings, 
                  monitoring activities, and community engagement programs.
                </p>
                <ExternalLink href="mailto:info@dean.com.ng">
                  <span className="inline-flex items-center text-[var(--dean-blue)] hover:text-[var(--dean-blue)]/80 transition">
                    Volunteer with us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </ExternalLink>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border border-[var(--dean-red)]/20 opacity-50" />
                <h3 className="text-xl font-semibold mb-3 text-[var(--dean-red)]">For Partners</h3>
                <p className="mb-4 text-foreground/80">
                  Partner with us to strengthen local governance systems. We collaborate with NGOs, 
                  government agencies, and international organizations.
                </p>
                <ExternalLink href="mailto:info@dean.com.ng">
                  <span className="inline-flex items-center text-[var(--dean-red)] hover:text-[var(--dean-red)]/80 transition">
                    Become a partner
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </ExternalLink>
              </motion.div>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <ExternalLink href="mailto:info@dean.com.ng">
                <span className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white rounded-lg font-medium shadow-lg hover:opacity-90 transition">
                  Contact Us For More Information
                </span>
              </ExternalLink>
            </motion.div>

            {/* Social media and hashtags */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)]">
                <span>#OpenLGAs</span>
              </div>
              <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)]">
                <span>#LocalGovernment</span>
              </div>
              <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)]">
                <span>#Transparency</span>
              </div>
              <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)]">
                <span>#Accountability</span>
              </div>
              <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)]">
                <span>#CitizenEngagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 