"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function BudgetWatchObjectives() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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
            title: "Empower Communities",
            description: "Empower grassroot communities through multi-stakeholder dialogues and townhall engagements with public officials.",
            icon: "🏘️",
            color: "blue"
        },
        {
            title: "Increase Participation",
            description: "Strengthen the voice of young people, women, and persons with disabilities in governance processes.",
            icon: "👥",
            color: "red"
        },
        {
            title: "Simplify Information",
            description: "Create and share simplified information about fiscal transparency through various media channels.",
            icon: "📊",
            color: "blue"
        },
        {
            title: "Monitor Development",
            description: "Track the implementation of the National Development Plan with focus on key sectors.",
            icon: "📈",
            color: "red"
        },
        {
            title: "Build Capacity",
            description: "Strengthen community understanding of budget processes and fiscal responsibility.",
            icon: "📚",
            color: "blue"
        },
        {
            title: "Foster Accountability",
            description: "Establish mechanisms for citizens to hold representatives accountable for budget implementation.",
            icon: "⚖️",
            color: "red"
        }
    ];

    if (!isClient) {
        return (
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
                <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Static version of your content */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                                Project Objectives
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                                Our carefully designed objectives ensure meaningful impact in promoting budget transparency and citizen participation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {objectives.map((objective, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                                >
                                    <div className="p-8">
                                        <div className={`w-16 h-16 mb-6 rounded-full bg-[var(--dean-${objective.color})]/10 flex items-center justify-center text-3xl`}>
                                            {objective.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                                        <p className="text-gray-600">{objective.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 mt-12 border-l-4 border-[var(--dean-blue)]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Approach</h3>
                            <p className="text-gray-600">
                                The #BudgetWatch Project takes a holistic approach to budget monitoring and transparency, 
                                addressing not just fiscal oversight but also the social, educational, and technological 
                                components that influence effective citizen participation in governance. Through this 
                                comprehensive strategy, we aim to create lasting impact in Nigeria's budgeting processes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <motion.section
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
                            Our carefully designed objectives ensure meaningful impact in promoting budget transparency and citizen participation
                        </p>
                    </motion.div>

                    {/* Objectives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
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

                    {/* Comprehensive Approach */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-xl shadow-lg p-8 mt-12 border-l-4 border-[var(--dean-blue)]"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Approach</h3>
                        <p className="text-gray-600">
                            The #BudgetWatch Project takes a holistic approach to budget monitoring and transparency, 
                            addressing not just fiscal oversight but also the social, educational, and technological 
                            components that influence effective citizen participation in governance. Through this 
                            comprehensive strategy, we aim to create lasting impact in Nigeria's budgeting processes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 