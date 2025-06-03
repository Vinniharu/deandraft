"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function IPledgeObjectives() {
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
            title: "Voter Education",
            description: "Empower citizens with knowledge about voting rights, electoral processes, and informed participation.",
            icon: "📚",
            color: "blue"
        },
        {
            title: "Community Engagement",
            description: "Foster dialogue between communities and electoral bodies to address voting barriers.",
            icon: "🤝",
            color: "red"
        },
        {
            title: "Youth Mobilization",
            description: "Engage and empower young voters through targeted outreach and digital campaigns.",
            icon: "👥",
            color: "blue"
        },
        {
            title: "Stakeholder Collaboration",
            description: "Build partnerships with civil society organizations and community leaders.",
            icon: "🔄",
            color: "red"
        },
        {
            title: "Policy Advocacy",
            description: "Champion electoral reforms for inclusive and accessible voting systems.",
            icon: "📋",
            color: "blue"
        }
    ];

    return (
        <motion.section
            id="objectives"
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
                            Our carefully designed objectives ensure meaningful impact in democratic participation and civic engagement
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

                    {/* Additional Info */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--dean-blue)]"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Holistic Approach</h3>
                        <p className="text-gray-600">
                            Our initiative takes a comprehensive approach to democratic engagement, addressing not just voter education but also social inclusion, youth participation, and community mobilization to strengthen Nigeria's democratic processes.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 