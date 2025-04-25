"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NextGenImpact() {
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
        { value: "100%", label: "Found content clear, engaging, and transformative" },
        { value: "91.2%", label: "Expressed strong desire for formal climate education training" },
        { value: "82.7%", label: "Rated toolkit as highly relevant and effective" }
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
                            Our bootcamp has transformed the teaching approach and mindset of educators across Nigeria
                        </p>
                    </motion.div>

                    {/* Impact Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left side - Key Achievements */}
                        <motion.div
                            className="space-y-6"
                            variants={cardVariants}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 inline-flex items-center">
                                <span className="bg-[var(--dean-blue)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    🏆
                                </span>
                                Key Achievements
                            </h3>
                            
                            <div className="space-y-4">
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Empowered educators to approach education as a transformative tool for sustainable development.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Strengthened understanding and adoption of competency-based and systems-thinking approaches.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Enhanced capacity to teach core and transferable skills, equipping students to tackle real-world challenges.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="flex items-start" 
                                    variants={itemVariants}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)] mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-gray-700">
                                        Created a network of education changemakers collaborating across schools and regions.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right side - Feedback Statistics */}
                        <motion.div variants={cardVariants}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 inline-flex items-center">
                                <span className="bg-[var(--dean-red)]/10 w-10 h-10 flex items-center justify-center rounded-full mr-3">
                                    📊
                                </span>
                                Key Feedback
                            </h3>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {feedbackData.map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-gray-50 rounded-lg p-6 shadow-sm"
                                        variants={cardVariants}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-24 h-24 rounded-full bg-[var(--dean-blue)]/10 flex items-center justify-center text-3xl text-[var(--dean-blue)] font-bold border-4 border-[var(--dean-blue)]/20 mr-6 flex-shrink-0">
                                                {item.value}
                                            </div>
                                            <p className="text-gray-700">{item.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Get Involved Section */}
                    <motion.div 
                        variants={cardVariants}
                        className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white mt-12"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold mb-3">How to Get Involved</h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Join our mission to transform education by getting involved in the NextGen Teachers Bootcamp
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { title: "Volunteer", icon: "🙋‍♀️", description: "Share your expertise as a facilitator or mentor" },
                                { title: "Apply", icon: "📝", description: "Join as a participant in our next bootcamp cohort" },
                                { title: "Donate", icon: "❤️", description: "Support our program with financial contributions" },
                                { title: "Collaborate", icon: "🤝", description: "Partner with us to expand our reach and impact" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300"
                                    whileHover={{ y: -5 }}
                                    variants={cardVariants}
                                >
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-gray-300 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 