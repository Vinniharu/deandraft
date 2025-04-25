"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMain() {
    // Set up intersection observer hooks for animation triggers
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [contentRef, contentInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 200
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const decorationVariants = {
        hidden: { width: 0 },
        visible: { 
            width: "100px",
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut", 
                delay: 0.3 
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, rotate: -10 },
        visible: { 
            opacity: 1, 
            rotate: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <motion.section 
            ref={sectionRef}
            className="py-16 md:py-24 bg-white relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decoration elements */}
            <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/3 blur-[150px] rounded-full" />
            <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[var(--dean-red)]/3 blur-[150px] rounded-full" />
            
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Main content */}
                    <motion.div 
                        ref={contentRef}
                        className="space-y-10"
                        initial="hidden"
                        animate={contentInView ? "visible" : "hidden"}
                        variants={sectionVariants}
                    >
                        {/* First paragraph - with shadow box */}
                        <motion.div
                            className="bg-white shadow-xl rounded-lg p-8 relative border-l-4 border-[var(--dean-blue)]"
                            variants={paragraphVariants}
                        >
                            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full border-2 border-[var(--dean-blue)] opacity-20" />
                            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full border-2 border-[var(--dean-red)] opacity-20" />
                            
                            <p className="text-gray-700 leading-relaxed text-lg">
                                The Development of Educational Action Network (DEAN) Initiative is a non-governmental, non-profit, and non-partisan organization founded in 2010 and officially registered in 2015. Rooted in the power of youth, DEAN champions youth-driven solutions that address societal challenges through innovation, collaboration, and inclusive participation.
                            </p>
                        </motion.div>
                        
                        {/* Second paragraph - with gradient background */}
                        <motion.div
                            className="relative rounded-lg p-8 bg-gradient-to-r from-[var(--dean-blue)]/10 to-[var(--dean-red)]/10"
                            variants={cardVariants}
                        >
                            <p className="text-gray-700 leading-relaxed text-lg mb-8">
                                We operate across various thematic areas—education, governance, democracy, and climate action—mobilizing thousands of young people, educators, and communities across Nigeria to create lasting impact.
                            </p>
                            
                            {/* Thematic areas */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                {[
                                    { 
                                        title: "Education", 
                                        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                        color: "blue"
                                    },
                                    { 
                                        title: "Governance", 
                                        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                                        color: "red"
                                    },
                                    { 
                                        title: "Democracy", 
                                        icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                                        color: "blue"
                                    },
                                    { 
                                        title: "Climate Action", 
                                        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 9.5l3 3m0 0l3-3m-3 3V4",
                                        color: "red"
                                    },
                                ].map((area, index) => (
                                    <motion.div 
                                        key={area.title}
                                        className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                                        variants={paragraphVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate={contentInView ? "visible" : "hidden"}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                    >
                                        <motion.div 
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-[var(--dean-${area.color})]/10`}
                                            variants={iconVariants}
                                        >
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className={`h-8 w-8 text-[var(--dean-${area.color})]`}
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    d={area.icon}
                                                />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Impact statement */}
                        <motion.div
                            className="mt-10 text-center"
                            variants={paragraphVariants}
                        >
                            <p className="text-lg font-medium text-gray-700 italic">
                                "Through our initiatives, we've empowered young Nigerians to become agents of positive change in their communities and beyond."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
