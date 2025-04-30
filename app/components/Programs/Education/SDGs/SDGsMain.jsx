"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function SDGsMain() {
    const info = [
        {
            title: "School Reach",
            description: "The Students Activation reached 1,827 schools in 1,702 communities",
            iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            title: "Community Engagement",
            description: "We organized 3,357 community town hall meetings, religious partnerships, and outreaches",
            iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Curriculum Advocacy",
            description: "We advocated for the inclusion of SDGs education into the national education curriculum",
            iconPath: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        },
        {
            title: "Student Pledges",
            description: "We collected 700,000 students' signatures through our pledge cards/registers",
            iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        },
        {
            title: "Stakeholder Summit",
            description: "Convened a 500-delegate capacity stakeholders' summit with government officials",
            iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        }
    ]
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
            className="py-20 md:py-28 relative overflow-hidden bg-gray-50"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decoration */}
            <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/10 blur-[100px]"></div>
            <div className="absolute -right-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/10 blur-[100px]"></div>
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
                                src="/sdgs/main-image.JPG"
                                alt="SDGs Activation Program"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dean-blue)]/40 to-transparent"></div>
                        </motion.div>
                    </div>

                    {/* Right column: Content */}
                    <div className="w-full lg:w-1/2" ref={contentRef}>
                        <motion.div 
                            className="mb-6"
                            variants={headingVariants}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)] mb-2">SDG Activation Week Summit</h2>
                            <motion.div className="h-1 bg-[var(--dean-red)] rounded-full" variants={decorationVariants}></motion.div>
                        </motion.div>

                        <motion.p 
                            className="text-gray-700 text-lg mb-6 leading-relaxed"
                            variants={paragraphVariants}
                        >
                            With support from the World's Largest Lesson (WLL), whose vision is to take Sustainable Development Goals (SDGs) to classrooms all over the world, we have implemented the SDGs Activation with remarkable achievements across Nigeria.
                        </motion.p>

                        <motion.p 
                            className="text-gray-700 text-lg mb-8 leading-relaxed"
                            variants={paragraphVariants}
                        >
                            Building on this overarching goal, DEAN Initiative, through a partnership with World's Largest Lesson UK, proceeds on a 5-year project plan, the single largest local action mobilization for sustainable development education.
                        </motion.p>

                        {/* Key achievements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {info.map((achievement, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex gap-4 p-4 rounded-lg bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover:border-[var(--dean-blue)]/20"
                                    variants={featureVariants}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={achievement.iconPath}></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--dean-blue)] mb-1">{achievement.title}</h3>
                                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Partnership section */}
                <motion.div 
                    className="mt-16 pt-12 text-center border-t border-gray-200"
                    variants={paragraphVariants}
                >
                    <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-4">Partnership with World's Largest Lesson</h3>
                    <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Our collaboration with World's Largest Lesson (WLL) has enabled us to bring global sustainability education to local classrooms, 
                        empowering students and teachers to become active participants in achieving the Sustainable Development Goals.
                    </p>
                    {/* <div className="mt-8">
                        <a 
                            href="#objectives" 
                            className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white font-medium transition-transform hover:scale-105"
                        >
                            Learn More About Our Objectives
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                    </div> */}
                </motion.div>
            </div>
        </motion.section>
    );
} 