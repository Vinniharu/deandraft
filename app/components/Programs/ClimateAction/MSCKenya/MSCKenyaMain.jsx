"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MSCKenyaMain() {
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
                            About the Workshop
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Bridging the gap between climate finance and agricultural resilience
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
                        variants={paragraphVariants}
                    >
                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                The MSC Kenya Climate Workshop brought together climate finance experts from MicroSave Consulting, Kenya, to share knowledge and insights with Nigerian stakeholders. The workshop focused on addressing critical challenges in climate finance access and post-harvest loss reduction.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Through interactive sessions and focus group discussions, the workshop created a platform for knowledge exchange between experts, youth activists, local government stakeholders, and farmers from multiple states in Nigeria.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                The workshop featured comprehensive discussions on climate finance opportunities, proposal writing techniques, and resource mobilization strategies. Participants gained practical insights into accessing funding for climate-related agricultural projects.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Special attention was given to understanding and addressing post-harvest loss challenges faced by farmers across different crops and regions, with experts providing targeted solutions and recommendations.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-r from-[#1a2747] to-[#2a3a5d] rounded-xl shadow-xl p-8 md:p-10 text-white"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
                        <p className="text-lg text-center text-gray-100 max-w-4xl mx-auto italic">
                            "To create a sustainable ecosystem where Nigerian farmers and youth have the knowledge, resources, and support needed to implement climate-smart agricultural practices and access climate finance opportunities."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 