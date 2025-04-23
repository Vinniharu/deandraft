"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';

export default function VisionMissionSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <section 
            ref={sectionRef}
            id="vision-mission" 
            className="relative py-20 md:py-28 overflow-hidden bg-[#0a1128] text-white"
        >
            {/* Subtle background elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                {/* Dark gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#121d3a]" />
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-3" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Purpose</h2>
                    <div className="h-1 w-24 bg-white mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Vision */}
                    <RevealOnScroll animation="fadeUp" delay={0.1}>
                        <div className="bg-[#1a2747] rounded-lg p-8 shadow-lg border-l-4 border-[var(--dean-blue)]">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-[var(--dean-blue)]/20 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                A world where empowered youth lead transformative change to achieve inclusive, sustainable, and participatory societies for all.
                            </p>
                        </div>
                    </RevealOnScroll>

                    {/* Mission */}
                    <RevealOnScroll animation="fadeUp" delay={0.2}>
                        <div className="bg-[#1a2747] rounded-lg p-8 shadow-lg border-l-4 border-[var(--dean-red)]">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-[var(--dean-red)]/20 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">Our Mission</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                To drive impactful youth-led actions using 21st-century tools that foster innovation, collaboration, and participatory development.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
                
                {/* Our Core Values */}
                <div className="mt-20">
                    <RevealOnScroll animation="fadeUp" delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values: YOU-RISE</h2>
                            <div className="h-1 w-24 bg-white mx-auto"></div>
                        </div>
                    </RevealOnScroll>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <RevealOnScroll animation="fadeUp" delay={0.1}>
                            <div className="bg-[#1a2747] rounded-lg p-6 text-center shadow-md h-full border-t-2 border-white/20">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--dean-blue)]/20 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Youthful</h3>
                                <p className="text-gray-300 text-sm">Embracing the energy and creativity of young people</p>
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.2}>
                            <div className="bg-[#1a2747] rounded-lg p-6 text-center shadow-md h-full border-t-2 border-white/20">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--dean-red)]/20 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Resilience</h3>
                                <p className="text-gray-300 text-sm">Overcoming challenges for lasting impact</p>
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.3}>
                            <div className="bg-[#1a2747] rounded-lg p-6 text-center shadow-md h-full border-t-2 border-white/20">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--dean-blue)]/20 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                                <p className="text-gray-300 text-sm">Upholding trust and transparency in all we do</p>
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.4}>
                            <div className="bg-[#1a2747] rounded-lg p-6 text-center shadow-md h-full border-t-2 border-white/20">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--dean-red)]/20 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                                <p className="text-gray-300 text-sm">Creating long-term, future-ready solutions</p>
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.5}>
                            <div className="bg-[#1a2747] rounded-lg p-6 text-center shadow-md h-full border-t-2 border-white/20">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--dean-blue)]/20 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Equity & Inclusion</h3>
                                <p className="text-gray-300 text-sm">Ensuring fair, respectful, and diverse participation</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
} 