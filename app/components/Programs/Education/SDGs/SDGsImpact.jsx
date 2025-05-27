"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
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

    const feedbackData = [
        { value: "1,827+", label: "Schools Reached", description: "Across 1,702 communities in Nigeria" },
        { value: "700K+", label: "Student Pledges", description: "Committed to SDG action" },
        { value: "3,357", label: "Community Events", description: "Town halls and outreach programs" }
    ];

    const achievements = [
        "Successfully integrated SDG education into school curricula across multiple states",
        "Developed comprehensive teaching resources and training materials for educators",
        "Created lasting partnerships with educational institutions and government agencies",
        "Established student-led SDG clubs and initiatives in participating schools",
        "Facilitated cross-cultural exchanges with international sustainability programs"
    ];

    return (
        <motion.section
            id="impact"
            ref={sectionRef}
            className="py-20 bg-white relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
            <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={headerVariants}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                            Impact & Achievements
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Our program has created significant impact across Nigerian schools and communities
                        </p>
                    </motion.div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {feedbackData.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                                <p className="text-gray-600">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Key Achievements */}
                    <motion.div
                        className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start"
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-100">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 