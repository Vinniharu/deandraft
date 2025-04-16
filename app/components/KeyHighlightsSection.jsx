"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';
import Image from 'next/image';
import Link from 'next/link';

export default function KeyHighlightsSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    const highlights = [
        {
            id: 1,
            title: "Youth Health Access",
            subtitle: "with IrishAid",
            description: "Improving youth healthcare inclusion",
            color: "blue",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Lake Chad Climate Fellowship",
            description: "Training youth to tackle climate-linked insecurity",
            color: "blue",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "OGP-Local Project",
            description: "Promoting transparency in FCT local governance",
            color: "red",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "NextGen Teachers Bootcamp",
            description: "Equipping 260+ teachers with systems thinking tools",
            color: "blue",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            id: 5,
            title: "FixElection Youth Assembly",
            description: "Convening youth to reform Nigeria's electoral process",
            color: "red",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        }
    ];

    return (
        <section 
            ref={sectionRef}
            id="key-highlights" 
            className="relative py-20 md:py-28 overflow-hidden bg-gray-50"
        >
            {/* Subtle background elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100" />
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-3" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Key Programs
                        </h2>
                        <div className="h-1 w-24 bg-[var(--dean-blue)] mx-auto"></div>
                    </div>
                </div>
                
                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <RevealOnScroll 
                            key={highlight.id} 
                            animation="fadeUp" 
                            delay={0.05 * index}
                        >
                            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                                <div className={`p-4 bg-[var(--dean-${highlight.color})] text-white`}>
                                    <div className="flex items-center">
                                        <div className="bg-white/20 p-2 rounded-md mr-3">
                                            {highlight.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                {highlight.title}
                                            </h3>
                                            {highlight.subtitle && (
                                                <p className="text-sm text-white/80 font-medium">
                                                    {highlight.subtitle}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 flex-grow">
                                    <p className="text-gray-700">
                                        {highlight.description}
                                    </p>
                                </div>
                                <div className="px-5 pb-5">
                                    <Link href="#impact" className={`text-[var(--dean-${highlight.color})] text-sm font-medium hover:underline flex items-center`}>
                                        Learn more 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
                
                {/* CTA Button */}
                <RevealOnScroll animation="fadeUp" delay={0.2}>
                    <div className="mt-12 text-center">
                        <Link href="#impact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--dean-blue)] hover:bg-[var(--dean-blue)]/90 transition-colors duration-300">
                            View Our Impact
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
} 