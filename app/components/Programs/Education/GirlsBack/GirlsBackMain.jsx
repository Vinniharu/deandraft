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

    const featureVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.section
            id="about"
            ref={sectionRef}
            className="py-20 md:py-28 relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
            <div className="absolute -right-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Left column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
                            variants={paragraphVariants}
                        >
                            <Image
                                src="/girlback/main-image.jpg"
                                alt="Girls Back to School Program"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </motion.div>
                    </div>

                    {/* Right column: Content */}
                    <div className="w-full lg:w-1/2" ref={contentRef}>
                        <motion.div 
                            className="mb-6"
                            variants={headingVariants}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About the Program</h2>
                            <motion.div className="h-1 bg-[var(--dean-red)] rounded-full" variants={decorationVariants}></motion.div>
                        </motion.div>

                        <motion.p 
                            className="text-gray-700 text-lg mb-6 leading-relaxed"
                            variants={paragraphVariants}
                        >
                            The Girls Back to School Program is a transformative initiative designed to address the critical challenges that prevent girls from continuing their education in vulnerable communities across Nigeria.
                        </motion.p>

                        <motion.p 
                            className="text-gray-700 text-lg mb-8 leading-relaxed"
                            variants={paragraphVariants}
                        >
                            Our program tackles barriers such as poverty, early marriage, gender-based discrimination, and inadequate school facilities through comprehensive support, advocacy, and community engagement. We believe that when girls are educated, entire communities benefit.
                        </motion.p>

                        {/* Key features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {[
                                {
                                    title: "Scholarships",
                                    description: "Financial support to cover education costs for vulnerable girls",
                                    iconPath: "M12 6v12m-8-6h16"
                                },
                                {
                                    title: "Mentorship",
                                    description: "Pairing girls with role models who guide their educational journey",
                                    iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                },
                                {
                                    title: "Community Engagement",
                                    description: "Working with parents and community leaders to support girls' education",
                                    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                },
                                {
                                    title: "Advocacy",
                                    description: "Influencing policies to create girl-friendly educational environments",
                                    iconPath: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                }
                            ].map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                                    variants={featureVariants}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-[var(--dean-red)] text-white rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath}></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 