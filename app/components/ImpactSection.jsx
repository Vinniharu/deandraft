"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Image from 'next/image';

export default function ImpactSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <section 
            ref={sectionRef}
            id="impact" 
            className="relative min-h-screen w-full overflow-hidden py-24 md:py-32 bg-[#0a1128]"
        >
            {/* Subtle background elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                {/* Dark gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#121d3a]" />
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-3" />
                
                {/* Subtle accent elements */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/3 blur-[150px] rounded-full" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[var(--dean-red)]/3 blur-[150px] rounded-full" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <RevealOnScroll animation="fadeUp">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                            A Decade of Impact
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                    </RevealOnScroll>
                    
                    <RevealOnScroll animation="fadeUp" delay={0.1}>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6">
                            From classrooms to communities, polling booths to policy tables, DEAN Initiative has reached thousands across Nigeria.
                        </p>
                    </RevealOnScroll>
                </div>
                
                {/* Impact Grid - Refined Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Education */}
                    <RevealOnScroll animation="fadeLeft" delay={0.1}>
                        <div className="relative p-6 md:p-8 rounded-lg bg-[#1a2747] border-l-4 border-[var(--dean-blue)] shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="bg-[var(--dean-blue)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🎓
                                </span>
                                Education
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">📚</span>
                                    <span className="text-gray-200">Trained <span className="font-semibold text-white">5,000+ Youth Educators</span> and <span className="font-semibold text-white">300 Hygiene Educators</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">🌱</span>
                                    <span className="text-gray-200">Empowered <span className="font-semibold text-white">150 Climate Educators</span> to promote environmental literacy</span>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                    
                    {/* Governance */}
                    <RevealOnScroll animation="fadeRight" delay={0.1}>
                        <div className="relative p-6 md:p-8 rounded-lg bg-[#1a2747] border-l-4 border-[var(--dean-red)] shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="bg-[var(--dean-red)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🏛️
                                </span>
                                Governance
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">📊</span>
                                    <span className="text-gray-200">Enabled <span className="font-semibold text-white">30+ communities</span> to track national budgets</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">🏛️</span>
                                    <span className="text-gray-200">Strengthened open governance across all <span className="font-semibold text-white">6 FCT Area Councils</span></span>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                    
                    {/* Democracy */}
                    <RevealOnScroll animation="fadeLeft" delay={0.2}>
                        <div className="relative p-6 md:p-8 rounded-lg bg-[#1a2747] border-l-4 border-[var(--dean-blue)] shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="bg-[var(--dean-blue)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🗳️
                                </span>
                                Democracy
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">🗳️</span>
                                    <span className="text-gray-200">Deployed <span className="font-semibold text-white">3,000+ youth</span> as election observers nationwide</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">📣</span>
                                    <span className="text-gray-200">Activated <span className="font-semibold text-white">200+ youth advocates</span>, boosting voter turnout to <span className="font-semibold text-white">94%</span> in the FCT</span>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                    
                    {/* Climate Action */}
                    <RevealOnScroll animation="fadeRight" delay={0.2}>
                        <div className="relative p-6 md:p-8 rounded-lg bg-[#1a2747] border-l-4 border-[var(--dean-red)] shadow-md">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="bg-[var(--dean-red)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🌍
                                </span>
                                Climate Action
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-xl mr-3 flex-shrink-0">🌍</span>
                                    <span className="text-gray-200">Trained <span className="font-semibold text-white">climate fellows</span> to lead justice-focused environmental projects</span>
                                </li>
                                <li className="flex items-start opacity-0">
                                    <span className="text-xl mr-3">📚</span>
                                    <span>Placeholder</span>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                </div>
                
                {/* Impact Counter - Professional Style */}
                <RevealOnScroll animation="fadeUp" delay={0.3}>
                    <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-[#1a2747]/80 rounded-lg p-6 text-center">
                            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">8,000+</span>
                            <span className="text-gray-300 text-sm uppercase tracking-wider font-medium">Youth Engaged</span>
                        </div>
                        <div className="bg-[#1a2747]/80 rounded-lg p-6 text-center">
                            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">30+</span>
                            <span className="text-gray-300 text-sm uppercase tracking-wider font-medium">Communities</span>
                        </div>
                        <div className="bg-[#1a2747]/80 rounded-lg p-6 text-center">
                            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">10+</span>
                            <span className="text-gray-300 text-sm uppercase tracking-wider font-medium">Years of Impact</span>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
