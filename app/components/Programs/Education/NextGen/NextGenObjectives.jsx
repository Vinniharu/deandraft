"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NextGenObjectives() {
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

    const objectives = [
        {
            title: "Build Teachers' Capacity",
            description: "Build teachers' confidence, skills & motivation to deliver effective skill- & competency-based education in classroom.",
            icon: "📚",
            color: "blue"
        },
        {
            title: "Develop Critical Thinking",
            description: "Develop systems & design thinking skills so they can analyze & propose solutions to sustainability challenges.",
            icon: "🧠",
            color: "red"
        },
        {
            title: "Provide Practical Tools",
            description: "Provide them with practical tools & guidance to create sustained & impactful learning experiences.",
            icon: "🛠️",
            color: "blue"
        },
        {
            title: "Empower Changemakers",
            description: "Empower them to become changemakers in their educational setting.",
            icon: "💪",
            color: "red"
        },
        {
            title: "Foster Lifelong Learning",
            description: "Instill a culture of lifelong learning & networking among them and their peers.",
            icon: "🔄",
            color: "blue"
        }
    ];

    return (
        <motion.section
            id="project-objectives"
            ref={sectionRef}
            className="py-20 bg-gray-50 relative overflow-hidden"
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
                            Project Objectives
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Our carefully designed objectives ensure that the NextGen Teachers Bootcamp delivers transformative outcomes for educators
                        </p>
                    </motion.div>

                    {/* Objectives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                custom={index}
                            >
                                <div className="p-8">
                                    <div className={`w-16 h-16 mb-6 rounded-full bg-[var(--dean-${objective.color})]/10 flex items-center justify-center text-3xl`}>
                                        {objective.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                                    <p className="text-gray-600">{objective.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <motion.div
                        variants={cardVariants}
                        className="text-center mt-12"
                    >
                        <a 
                            href="#impact" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--dean-blue)] hover:bg-[var(--dean-blue)]/90 transition-colors duration-300"
                        >
                            See Our Impact
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 