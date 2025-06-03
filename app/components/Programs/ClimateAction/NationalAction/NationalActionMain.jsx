"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NationalActionMain() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
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

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
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

    return (
        <motion.section 
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
                    <motion.div
                        className="text-center mb-16"
                        variants={headingVariants}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                            About the Initiative
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Driving grassroots awareness and action around the United Nations Sustainable Development Goals
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
                        variants={paragraphVariants}
                    >
                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                The National Action Day on SDGs is a bold civic movement championed by DEAN Initiative to drive grassroots awareness and action around the United Nations Sustainable Development Goals. Held annually across Nigeria, the campaign activates youth, schools, and community groups to take collective action for a better, more sustainable future.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Through participatory workshops, capacity building, and collaborative projects, we empower stakeholders to engage meaningfully in sustainable development while fostering democratic values and practices at the grassroots level.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                Each participating state organizes localized activities—school outreaches, road walks, environmental clean-ups, debates, art contests, and SDG awareness sessions. Students take center stage, becoming SDG Champions through classroom activities and community projects.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Young people take leadership roles, engaging with policymakers and stakeholders to promote sustainable development in their communities, ensuring that the global goals become local realities.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
                        <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
                            "We envision a Nigeria where every citizen, especially young people, understands and actively contributes to achieving the Sustainable Development Goals, creating lasting positive change in their communities."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 