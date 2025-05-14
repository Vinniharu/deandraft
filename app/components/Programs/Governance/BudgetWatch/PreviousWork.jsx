"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function PreviousWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    "Simplified budget copies shared with communities",
    "Trained community actors on budget processes",
    "Citizens submitted reports on ongoing projects",
    "3 out of 6 area councils publicly presented their budget",
    "AMAC launched a co-creation budget with citizens input"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[var(--dean-blue)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[var(--dean-red)]/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              ref={ref}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Building on <span className="text-[var(--dean-blue)]">Previous Success</span>
              </h2>
              
              <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)]" />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  The BudgetWatch project builds on our previous initiative, "Accountability is Legal," 
                  which was successfully implemented within the six area councils in FCT Abuja using 
                  the OGP local mechanism.
                </p>
                
                <p className="mt-4">
                  Through this initiative, DEAN Initiative encouraged area council chairmen to foster 
                  open governance processes for public participation and equipped citizens with tools to 
                  monitor and track projects implemented by the area councils within their communities.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Key Achievements</h3>
                
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    >
                      <svg className="h-5 w-5 text-[var(--dean-blue)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-xl h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/budgetwatch/previous.jpg"
              alt="Previous Accountability is Legal project"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                <h3 className="text-white text-xl font-bold mb-2">"Accountability is Legal" Initiative</h3>
                <p className="text-white/80">
                  Through our OpenLGA portal, citizens submitted reports on the status of ongoing projects within their communities. 
                  These data formed the basis for community town hall dialogues between local government representatives and citizens.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 