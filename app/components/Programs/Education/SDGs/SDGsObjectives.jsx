"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SDGsObjectives() {
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
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const objectivesList = [
        {
            title: "SDG Education in Schools",
            description: "To introduce and integrate Sustainable Development Goals education into the Nigerian school system, fostering awareness and understanding among students.",
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        },
        {
            title: "Community Mobilization",
            description: "To engage local communities in sustainability initiatives, creating a grassroots movement that supports and amplifies SDG-related actions.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Student Leadership",
            description: "To develop youth leadership capacity in sustainability advocacy, empowering students to become champions of the SDGs in their communities.",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        },
        {
            title: "Policy Influence",
            description: "To advocate for educational policy reforms that incorporate sustainable development principles into the national curriculum.",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        },
        {
            title: "Multi-stakeholder Collaboration",
            description: "To build partnerships between schools, government agencies, NGOs, and businesses to create a unified approach to sustainable development education.",
            icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        },
        {
            title: "Resource Development",
            description: "To create and distribute educational resources that make SDGs accessible and engaging for students of all ages.",
            icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        }
    ];

    const globalGoals = [
        { number: 1, name: "No Poverty", color: "bg-red-500" },
        { number: 2, name: "Zero Hunger", color: "bg-yellow-500" },
        { number: 3, name: "Good Health", color: "bg-green-500" },
        { number: 4, name: "Quality Education", color: "bg-red-600" },
        { number: 5, name: "Gender Equality", color: "bg-orange-500" },
        { number: 6, name: "Clean Water", color: "bg-blue-500" },
        { number: 7, name: "Renewable Energy", color: "bg-yellow-400" },
        { number: 8, name: "Good Jobs", color: "bg-red-700" },
        { number: 9, name: "Innovation", color: "bg-orange-600" },
        { number: 10, name: "Reduced Inequalities", color: "bg-pink-500" },
        { number: 11, name: "Sustainable Cities", color: "bg-amber-600" },
        { number: 12, name: "Responsible Consumption", color: "bg-yellow-600" },
        { number: 13, name: "Climate Action", color: "bg-green-600" },
        { number: 14, name: "Life Below Water", color: "bg-blue-600" },
        { number: 15, name: "Life On Land", color: "bg-green-700" },
        { number: 16, name: "Peace & Justice", color: "bg-blue-700" },
        { number: 17, name: "Partnerships", color: "bg-indigo-500" }
    ];

    return (
        <motion.section
            ref={sectionRef}
            className="py-20 bg-gray-50 relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/10 blur-[100px]"></div>
            <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/10 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>

            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    variants={headerVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)] mb-4">
                        Our Objectives
                    </h2>
                    <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
                    <p className="text-gray-700 text-lg">
                        We're committed to advancing the Sustainable Development Goals through education,
                        awareness, and action-oriented initiatives across Nigeria.
                    </p>
                </motion.div>

                {/* Objectives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {objectivesList.map((objective, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover:border-[var(--dean-blue)]/20"
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[var(--dean-blue)]/20 to-[var(--dean-red)]/20 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[var(--dean-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={objective.icon}></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-2">{objective.title}</h3>
                            <p className="text-gray-600">{objective.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Global Goals Section */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-md border border-gray-100 max-w-4xl mx-auto"
                    variants={cardVariants}
                >
                    <h3 className="text-2xl font-bold text-[var(--dean-blue)] mb-6 text-center">The 17 Global Goals</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {globalGoals.map((goal) => (
                            <div
                                key={goal.number}
                                className="flex flex-col items-center text-center"
                            >
                                <div className={`w-12 h-12 ${goal.color} rounded-full flex items-center justify-center text-white font-bold mb-1`}>
                                    {goal.number}
                                </div>
                                <span className="text-xs text-gray-700">{goal.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    variants={cardVariants}
                    className="text-center mt-12"
                >
                    <a 
                        href="#impact" 
                        className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white font-medium transition-transform hover:scale-105"
                    >
                        See Our Impact
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
} 