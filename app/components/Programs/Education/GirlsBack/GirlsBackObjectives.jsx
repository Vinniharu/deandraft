"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function GirlsBackObjectives() {
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
            title: "Financial Support",
            description: "Provide comprehensive financial support covering tuition, books, uniforms, and essential educational materials.",
            icon: "💰",
            color: "blue"
        },
        {
            title: "Community Engagement",
            description: "Work with community leaders and families to address cultural barriers and promote girls' education.",
            icon: "🤝",
            color: "red"
        },
        {
            title: "Mentorship Program",
            description: "Connect girls with successful female role models who provide guidance and inspiration.",
            icon: "👩‍🏫",
            color: "blue"
        },
        {
            title: "Safe Learning Environment",
            description: "Create and maintain safe, girl-friendly learning spaces that promote inclusive education.",
            icon: "🏫",
            color: "red"
        },
        {
            title: "Advocacy & Policy",
            description: "Advocate for policies that support girls' education and eliminate barriers to their learning.",
            icon: "📢",
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
                            Program Objectives
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Our comprehensive approach ensures that every girl has access to quality education and the support needed to succeed
                        </p>
                    </motion.div>

                    {/* Objectives Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={sectionVariants}
                    >
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 bg-[var(--dean-${objective.color})] text-white rounded-full flex items-center justify-center mr-4`}>
                                        <span className="text-2xl">{objective.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900">{objective.title}</h3>
                                </div>
                                <p className="text-gray-600">{objective.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Additional Info Box */}
                    <motion.div 
                        className="mt-16 bg-[var(--dean-blue)]/10 p-6 rounded-lg border border-[var(--dean-blue)]/20 max-w-4xl mx-auto"
                        variants={cardVariants}
                    >
                        <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-4">A Holistic Approach</h3>
                        <p className="text-gray-700">
                            Our program recognizes that girls' education challenges require interventions at multiple levels. 
                            By addressing financial, social, cultural, and structural barriers simultaneously, we create an 
                            ecosystem where girls can thrive educationally and reach their full potential.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 