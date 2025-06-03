"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function CallToAction() {
  const [isClient, setIsClient] = useState(false);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const content = (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );

  if (!isClient) {
    return content;
  }

  return (
    <motion.section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white relative"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={contentVariants}
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
    </motion.section>
  );
} 