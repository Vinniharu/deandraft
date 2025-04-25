"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function SDGsImpact() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            id="impact"
            ref={sectionRef}
            className="py-20 relative overflow-hidden bg-gradient-to-b from-[var(--dean-blue)] to-[var(--dean-red)]"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16 text-white"
                    variants={headerVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact & Achievements</h2>
                    <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
                    <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                        The SDGs Activation program has created significant impact across Nigerian schools and communities, 
                        fostering understanding and action toward sustainable development.
                    </p>
                </motion.div>

                {/* Summit Image Section */}
                <motion.div
                    className="mb-16 rounded-lg overflow-hidden shadow-xl"
                    variants={cardVariants}
                >
                    <div className="relative h-[400px] w-full">
                        <Image
                            src="/sdgs/summit.jpeg"
                            alt="SDGs Activation Summit"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dean-blue)]/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">SDG Activation Week Summit</h3>
                            <p className="text-white/90">
                                Bringing together 500 delegates from government, education, and civil society to 
                                advance sustainable development education in Nigeria.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    variants={sectionVariants}
                >
                    <motion.div 
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10"
                        variants={cardVariants}
                    >
                        <h3 className="text-4xl font-bold text-white mb-2">1,827</h3>
                        <p className="text-gray-200">Schools Reached</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10"
                        variants={cardVariants}
                    >
                        <h3 className="text-4xl font-bold text-white mb-2">1,702</h3>
                        <p className="text-gray-200">Communities Engaged</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10"
                        variants={cardVariants}
                    >
                        <h3 className="text-4xl font-bold text-white mb-2">700K+</h3>
                        <p className="text-gray-200">Student Signatures</p>
                    </motion.div>

                    <motion.div 
                        className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-white/10"
                        variants={cardVariants}
                    >
                        <h3 className="text-4xl font-bold text-white mb-2">3,357</h3>
                        <p className="text-gray-200">Community Meetings</p>
                    </motion.div>
                </motion.div>

                {/* Key Outcomes */}
                <motion.div variants={sectionVariants} className="mb-16">
                    <motion.h3 
                        className="text-2xl font-semibold text-white mb-8 text-center"
                        variants={headerVariants}
                    >
                        Key Outcomes
                    </motion.h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                            variants={cardVariants}
                        >
                            <h4 className="text-xl font-semibold text-white mb-4">Increased Awareness</h4>
                            <p className="text-gray-200 mb-4">
                                Students and teachers across Nigeria now have a deeper understanding of the SDGs and 
                                their relevance to local and global challenges.
                            </p>
                            <div className="flex items-start mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-200">
                                    Survey results show 85% of participating students can now explain the SDGs and their importance.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                            variants={cardVariants}
                        >
                            <h4 className="text-xl font-semibold text-white mb-4">Local Action Projects</h4>
                            <p className="text-gray-200 mb-4">
                                Schools have initiated over 500 local sustainability projects addressing issues like waste 
                                management, clean water, and renewable energy.
                            </p>
                            <div className="flex items-start mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-200">
                                    These projects have created measurable environmental and social improvements in their communities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                            variants={cardVariants}
                        >
                            <h4 className="text-xl font-semibold text-white mb-4">Educational Policy</h4>
                            <p className="text-gray-200 mb-4">
                                Our advocacy has led to commitments from education authorities to incorporate SDG education 
                                into curriculum frameworks.
                            </p>
                            <div className="flex items-start mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-200">
                                    Pilot programs for SDG-integrated curricula are now running in 150 schools nationwide.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                            variants={cardVariants}
                        >
                            <h4 className="text-xl font-semibold text-white mb-4">Student Leadership</h4>
                            <p className="text-gray-200 mb-4">
                                The program has cultivated a network of young SDG champions who continue to drive sustainability 
                                initiatives in their schools and communities.
                            </p>
                            <div className="flex items-start mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-200">
                                    Over 2,000 student leaders trained as SDG ambassadors in their schools.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Call to Action */}
                <motion.div 
                    className="mt-16 text-center"
                    variants={headerVariants}
                >
                    <h3 className="text-2xl font-semibold text-white mb-4">Join the Movement</h3>
                    <p className="text-gray-200 mb-6 max-w-3xl mx-auto">
                        Whether you're a student, teacher, community leader, or organization, there are many ways to 
                        get involved with the SDGs Activation program and contribute to a sustainable future.
                    </p>
                    <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-[var(--dean-blue)] font-medium py-3 px-8 rounded-md transition-colors duration-300 hover:shadow-lg">
                        Get Involved
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
} 