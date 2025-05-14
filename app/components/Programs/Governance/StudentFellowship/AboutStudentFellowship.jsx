"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutStudentFellowship() {
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
              src="/studentfellowship/about.jpg"
              alt="Student Open-Gov Fellowship in action"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Floating label */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 text-white">
              <p className="text-sm font-medium">University of Abuja Fellows</p>
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
                The <span className="text-[var(--dean-blue)]">Student Open-Gov Fellowship</span>
              </h2>
              
              <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)]" />
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Launched in May 2024, the Student Open-Gov Fellowship aims to foster youth participation 
                  in local government budget processes, starting at the University of Abuja. The program 
                  empowers young leaders to drive transparency and accountability in governance.
                </p>
                
                <p className="mt-4">
                  Through a rigorous selection and training process, 12 fellows were equipped with the 
                  necessary tools for community engagement. They participated in a Knowledge Sharing Session 
                  with Local Government Area (LGA) Information Officers and set out to request budget copies 
                  from local councils.
                </p>
                
                <p className="mt-4">
                  Despite encountering significant challenges, such as bureaucratic delays and initial refusals, 
                  the fellows ultimately succeeded in obtaining budgets from four councils: Abuja Municipal Area 
                  Council (AMAC), Gwagwalada, Kuje, and Kwali. This success marked a significant achievement in 
                  driving transparency, as it encouraged councils to release their budget information in response 
                  to sustained advocacy.
                </p>
              </div>
              
              <div className="pt-6">
                <a href="#process" className="inline-flex items-center text-[var(--dean-blue)] hover:text-[var(--dean-red)] transition-colors">
                  <span>Learn about our fellowship process</span>
                  <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 