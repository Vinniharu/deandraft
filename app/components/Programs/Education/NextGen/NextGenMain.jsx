"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NextGenMain() {
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

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
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
                        {/* Introduction */}
                        <motion.div className="text-center space-y-6" variants={paragraphVariants}>
                            <motion.h2 variants={headingVariants} className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)]">
                                About the Program
                            </motion.h2>
                            <motion.div variants={decorationVariants} className="h-1 w-24 bg-[var(--dean-red)] mx-auto"></motion.div>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                The NextGen Teachers' Bootcamp is an intensive workshop project for teachers aspiring to join the
                                community of education reformers. The Bootcamp focuses on motivating and building the capacity of
                                teachers to deliver a holistic and relevant learning experience that enables students to develop core,
                                transferable skills and competencies in the classroom.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Grounded in the principles of Education for Sustainable Development (ESD), with a particular focus on systems thinking and design thinking, the
                                Bootcamp believes that in a complex and dynamic world, identifying and solving problems is crucial
                                for achieving collective and sustainable prosperity.
                            </p>
                        </motion.div>

                        {/* Education Vision */}
                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--dean-blue)] shadow-sm">
                                <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-3">Our Education Vision</h3>
                                <p className="text-gray-600 italic">
                                    "We envision an education system where teachers are empowered to facilitate learning beyond traditional methods, 
                                    equipping students with the mindset, skills, and knowledge to navigate complex challenges of the 21st century."
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Competency-Based Learning</h4>
                                    <p className="text-gray-600">
                                        Equipping teachers with methodologies to develop students' practical skills and competencies, not just theoretical knowledge.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Systems Thinking</h4>
                                    <p className="text-gray-600">
                                        Developing educators' ability to analyze interconnected systems and understand complex relationships between components.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Design Thinking</h4>
                                    <p className="text-gray-600">
                                        Teaching educators how to apply design thinking methodologies to create innovative solutions to educational challenges.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Collaborative Learning</h4>
                                    <p className="text-gray-600">
                                        Fostering collaboration among educators, creating a community of practice for continuous improvement and knowledge sharing.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Target Audience */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Target Audience</h3>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--dean-red)] shadow-sm">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Secondary School Teachers across Nigeria</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Universal Basic Education Commission (UBEC) officials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>State Universal Basic Education Board (SUBEB) representatives</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Education administrators and policymakers</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Quote */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <p className="text-xl text-center font-medium text-gray-700 italic">
                                "The NextGen Teachers Bootcamp is transforming education by empowering teachers with the tools, mindset, and community to become changemakers in their classrooms."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 