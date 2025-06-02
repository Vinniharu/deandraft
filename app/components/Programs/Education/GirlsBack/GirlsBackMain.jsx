"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function GirlsBackMain() {
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
                                The Girls Back to School Program is a transformative initiative designed to address the critical 
                                challenges that prevent girls from continuing their education in vulnerable communities across Nigeria. 
                                Through comprehensive support and community engagement, we work to eliminate barriers and create 
                                sustainable pathways for girls' education.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Our program tackles multiple barriers including poverty, early marriage, gender-based discrimination, 
                                and inadequate school facilities through a holistic approach that combines direct support, advocacy, 
                                and community mobilization. We believe that when girls are educated, entire communities benefit.
                            </p>
                        </motion.div>

                        {/* Vision Statement */}
                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--dean-blue)] shadow-sm">
                                <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-3">Our Vision</h3>
                                <p className="text-gray-600 italic">
                                    "We envision a Nigeria where every girl has unhindered access to quality education, 
                                    empowering them to reach their full potential and contribute meaningfully to society."
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Financial Support</h4>
                                    <p className="text-gray-600">
                                        Comprehensive financial assistance covering tuition, books, uniforms, and other educational necessities.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Community Engagement</h4>
                                    <p className="text-gray-600">
                                        Working with community leaders and families to address cultural barriers and promote girls' education.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Mentorship Program</h4>
                                    <p className="text-gray-600">
                                        Connecting girls with successful female role models who provide guidance and inspiration.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Safe Learning Environment</h4>
                                    <p className="text-gray-600">
                                        Creating and maintaining safe, girl-friendly learning spaces that promote inclusive education.
                                    </p>
                                    </div>
                                    </div>
                                </motion.div>

                        {/* Target Audience */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Target Beneficiaries</h3>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--dean-red)] shadow-sm">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Out-of-school girls in vulnerable communities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Girls at risk of dropping out due to financial constraints</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Communities with high rates of early marriage and gender inequality</span>
                                    </li>
                                </ul>
                        </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 