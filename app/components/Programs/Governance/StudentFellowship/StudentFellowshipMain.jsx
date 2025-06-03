"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function StudentFellowshipMain() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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

    if (!isClient) {
        return (
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)]">
                                About the Program
                            </h2>
                            <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto"></div>
                        </div>

                        <div>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                The Student Open-Gov Fellowship is an intensive program designed to empower students to become active participants in local governance and budget transparency initiatives. The fellowship focuses on developing young leaders who can effectively advocate for transparency and accountability in local government processes.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Through comprehensive training and hands-on experience, fellows learn to navigate government processes, engage with officials, and drive meaningful change in their communities. The program emphasizes practical skills in advocacy, communication, and budget analysis.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Practical Training</h4>
                                    <p className="text-gray-600">
                                        Intensive workshops on budget analysis, advocacy, and community engagement techniques.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Hands-on Experience</h4>
                                    <p className="text-gray-600">
                                        Direct engagement with local government officials and real-world advocacy projects.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Leadership Development</h4>
                                    <p className="text-gray-600">
                                        Building the next generation of civic leaders through mentorship and skill development.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <div className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Network Building</h4>
                                    <p className="text-gray-600">
                                        Creating connections between students, government officials, and civil society organizations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

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
                                The Student Open-Gov Fellowship is an intensive program designed to empower students to become active participants in local governance and budget transparency initiatives. The fellowship focuses on developing young leaders who can effectively advocate for transparency and accountability in local government processes.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Through comprehensive training and hands-on experience, fellows learn to navigate government processes, engage with officials, and drive meaningful change in their communities. The program emphasizes practical skills in advocacy, communication, and budget analysis.
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Practical Training</h4>
                                    <p className="text-gray-600">
                                        Intensive workshops on budget analysis, advocacy, and community engagement techniques.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Hands-on Experience</h4>
                                    <p className="text-gray-600">
                                        Direct engagement with local government officials and real-world advocacy projects.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Leadership Development</h4>
                                    <p className="text-gray-600">
                                        Building the next generation of civic leaders through mentorship and skill development.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Network Building</h4>
                                    <p className="text-gray-600">
                                        Creating connections between students, government officials, and civil society organizations.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 