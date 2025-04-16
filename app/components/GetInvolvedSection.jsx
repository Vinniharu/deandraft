"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Link from 'next/link';

export default function GetInvolvedSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    
    const actions = [
        {
            title: "Donate",
            icon: "💰",
            description: "Support our initiatives with a donation",
            link: "#donate",
            color: "blue"
        },
        {
            title: "Join Us",
            icon: "👥",
            description: "Become a part of our community",
            link: "#join",
            color: "red"
        },
        {
            title: "Volunteer",
            icon: "🙋",
            description: "Contribute your skills and time",
            link: "#volunteer",
            color: "blue"
        },
        {
            title: "Contact",
            icon: "✉️",
            description: "Reach out to discuss collaboration",
            link: "#contact",
            color: "red"
        }
    ];

    return (
        <section 
            ref={sectionRef}
            id="get-involved" 
            className="relative py-24 md:py-32 overflow-hidden bg-[#0a1128] text-white"
        >
            {/* Gradient background */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#121d3a] to-[#1a294d]" />
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-3" />
                
                {/* Radial gradient for spotlight effect */}
                <div className="absolute inset-0 bg-radial-gradient from-[var(--dean-blue)]/10 to-transparent opacity-40" />
                
                {/* Subtle accent elements */}
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/5 blur-[150px] rounded-full" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[var(--dean-red)]/5 blur-[150px] rounded-full" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll animation="fadeUp">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Get Involved
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Be part of the movement.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-6"></div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {actions.map((action, index) => (
                        <RevealOnScroll key={action.title} animation="fadeUp" delay={0.1 * index}>
                            <Link href={action.link}>
                                <div className={`h-full bg-[#1a2747]/80 rounded-lg p-6 text-center border-b-4 border-[var(--dean-${action.color})] hover:translate-y-[-8px] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center`}>
                                    <div className={`w-16 h-16 rounded-full bg-[var(--dean-${action.color})]/20 flex items-center justify-center text-3xl mb-4`}>
                                        {action.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                                    <p className="text-gray-300 text-sm">{action.description}</p>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>
                
                {/* Newsletter subscription */}
                <RevealOnScroll animation="fadeUp" delay={0.5}>
                    <div className="mt-20 bg-[#1a2747]/50 rounded-lg p-8 md:p-10 max-w-4xl mx-auto border border-white/10">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
                            <p className="text-gray-300">Subscribe to our newsletter for updates on our initiatives and impact.</p>
                        </div>
                        
                        <form className="flex flex-col md:flex-row gap-3">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--dean-blue)]"
                                required
                            />
                            <button 
                                type="submit" 
                                className="px-6 py-3 rounded-md bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white font-medium hover:from-[var(--dean-blue)]/90 hover:to-[var(--dean-red)]/90 transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
} 