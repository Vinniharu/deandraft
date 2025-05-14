"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutOpenLGAs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--dean-blue)]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[var(--dean-red)]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Image */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/openlgas/about.JPEG"
              alt="OpenLGAs Initiative in action"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Floating label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 text-white">
              <p className="text-sm font-medium">Local Government Engagement</p>
            </div>
          </motion.div>

          {/* Right column: Content */}
          <div ref={ref}>
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                The <span className="text-[var(--dean-blue)]">#OpenLGAs</span> Project
              </h2>
              
              <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)]" />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  The #OpenLGAs Project is our flagship initiative that seeks to drive accountability, 
                  transparency, and openness at the third tier of government - the local government 
                  administration; this tier of government, though the closest to the people, has 
                  remained highly inaccessible.
                </p>
                
                <p className="mt-4">
                  Local governments play a crucial role in delivering basic services to citizens, 
                  yet they often operate with limited transparency and accountability mechanisms. 
                  Through #OpenLGAs, DEAN Initiative bridges this gap by creating platforms for 
                  civic engagement, capacity building, and policy advocacy that strengthen local 
                  governance systems.
                </p>
                
                <p className="mt-4">
                  Our approach combines research, training, townhall meetings, and recognition 
                  of good practices to transform how local governments engage with citizens and 
                  deliver on their mandates.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)]">
                  <span>Fiscal Transparency</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)]">
                  <span>Citizen Engagement</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)]">
                  <span>Local Reforms</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)]">
                  <span>Open Government</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 