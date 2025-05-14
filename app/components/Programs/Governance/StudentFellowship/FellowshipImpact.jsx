"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function FellowshipImpact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impacts = [
    {
      id: 1,
      title: "Budget Transparency",
      description: "Secured transparency in four key Area Councils in Abuja (AMAC, Gwagwalada, Kuje, and Kwali), providing citizens access to budget information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Youth Empowerment",
      description: "Equipped 12 fellows with skills in advocacy, governance, and public engagement, creating a new generation of leaders for good governance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Governance Recognition",
      description: "Enhanced the reputation of participating councils with international recognition for their commitment to transparency",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Citizen Engagement",
      description: "Demonstrated that persistent citizen advocacy can result in meaningful government action, setting a replicable model for engagement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-[var(--dean-blue)] to-[var(--dean-red)] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
          <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fellowship <span className="text-white">Impact</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <motion.p 
            className="text-white/90"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Student Open-Gov Fellowship has made significant strides in promoting transparency and accountability at the local government level.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {impacts.map((impact) => (
            <motion.div
              key={impact.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                  <div className="text-white">
                    {impact.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                  <p className="text-white/80">{impact.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div 
              className="p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Success Story: Budget Transparency</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--dean-red)]/20 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p>Obtained budget documents from 4 out of 6 Area Councils in the FCT</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--dean-red)]/20 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p>Created a precedent for future budget transparency initiatives</p>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[var(--dean-red)]/20 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Fostered a culture of accountability in local governance</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-white/90">
                  This achievement demonstrates that youth-led advocacy can effectively drive transparency 
                  and accountability in governance processes, creating a model for future engagement.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-[300px] md:h-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image
                  src="/studentfellowship/impact.jpg"
                alt="Fellows celebrating their achievements"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 