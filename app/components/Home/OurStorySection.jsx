"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from '../RevealOnScroll';
import Image from 'next/image';

export default function OurStorySection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section 
            ref={sectionRef}
            id="our-story" 
            className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
        >
            {/* Animated background elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/10 to-[var(--dean-red)]/5" />
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10" />
                
                {/* Floating geometric shapes */}
                <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-[var(--dean-blue)]/10 blur-xl" />
                <div className="absolute right-[15%] top-[30%] h-40 w-40 rounded-full bg-[var(--dean-red)]/10 blur-xl" />
                <div className="absolute left-[20%] bottom-[20%] h-48 w-48 rounded-full bg-[var(--dean-blue)]/5 blur-xl" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left column: Content */}
                    <div className="space-y-8">
                        <RevealOnScroll animation="fadeUp">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                                Our Story
                            </h2>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.2}>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-foreground/90 leading-relaxed">
                                    Founded in 2010 and officially registered in 2015, the Development of Educational Action Network (DEAN) Initiative is a youth-powered, non-profit organization advancing sustainable development through innovation, collaboration, and inclusive participation.
                                </p>
                                <p className="text-foreground/90 leading-relaxed mt-4">
                                    We believe youth are the driving force behind transformative change, and we are committed to equipping them with the tools, platforms, and opportunities they need to lead.
                                </p>
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeUp" delay={0.4}>
                            <div className="flex flex-wrap gap-2 mt-6">
                                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)] backdrop-blur-sm">
                                    <span>Founded 2010</span>
                                </div>
                                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)] backdrop-blur-sm">
                                    <span>Registered 2015</span>
                                </div>
                                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)] backdrop-blur-sm">
                                    <span>Youth-powered</span>
                                </div>
                                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)] backdrop-blur-sm">
                                    <span>Non-profit</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                    
                    {/* Right column: Visual elements */}
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                        <RevealOnScroll animation="fadeLeft" delay={0.3}>
                            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/20 to-[var(--dean-red)]/20 z-10" />
                                <Image 
                                    src="/hero/hero-2.jpg" 
                                    alt="DEAN Initiative in action" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                        
                        <RevealOnScroll animation="fadeRight" delay={0.5}>
                            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/20 to-[var(--dean-red)]/20 z-10" />
                                <Image 
                                    src="/hero/hero-3.jpeg" 
                                    alt="DEAN Initiative community" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </RevealOnScroll>
                        
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full border-2 border-[var(--dean-blue)] opacity-20" />
                        <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full border-2 border-[var(--dean-red)] opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
