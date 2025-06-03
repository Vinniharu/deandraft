"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OpenLGAsMain() {
    // Set up intersection observer hooks for animation triggers
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [contentRef, contentInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        delay: 200
    });

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
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

    const decorationVariants = {
        hidden: { width: 0 },
        visible: { 
            width: "100px",
            transition: { duration: 0.8, ease: "easeOut" }
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

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <motion.section 
            ref={sectionRef}
            className="py-16 md:py-24 bg-white relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decoration elements */}
            <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/3 blur-[150px] rounded-full" />
            <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[var(--dean-red)]/3 blur-[150px] rounded-full" />
            
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Main content */}
                    <motion.div 
                        ref={contentRef}
                        className="space-y-10"
                        initial="hidden"
                        animate={contentInView ? "visible" : "hidden"}
                        variants={sectionVariants}
                    >
                        {/* Introduction */}
                        <motion.div className="text-center space-y-6" variants={paragraphVariants}>
                            <motion.h2 variants={headingVariants} className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)]">
                                About #OpenLGAs
                            </motion.h2>
                            <motion.div variants={decorationVariants} className="h-1 w-24 bg-[var(--dean-red)] mx-auto"></motion.div>
                        </motion.div>

                        <motion.div variants={paragraphVariants}>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                The #OpenLGAs Project is our flagship initiative that seeks to drive accountability, 
                                transparency, and openness at the third tier of government - the local government 
                                administration. This tier of government, though the closest to the people, has 
                                remained highly inaccessible.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                Local governments play a crucial role in delivering basic services to citizens, 
                                yet they often operate with limited transparency and accountability mechanisms. 
                                Through #OpenLGAs, DEAN Initiative bridges this gap by creating platforms for 
                                civic engagement, capacity building, and policy advocacy that strengthen local 
                                governance systems.
                            </p>
                        </motion.div>

                        {/* Vision Statement */}
                        <motion.div variants={paragraphVariants}>
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--dean-blue)] shadow-sm">
                                <h3 className="text-xl font-semibold text-[var(--dean-blue)] mb-3">Our Vision</h3>
                                <p className="text-gray-600 italic">
                                    "To create a transparent and accountable local government system where citizens are 
                                    actively engaged in governance, and public resources are effectively managed for 
                                    sustainable community development."
                                </p>
                            </div>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div variants={paragraphVariants} className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Citizen Engagement</h4>
                                    <p className="text-gray-600">
                                        Creating platforms for active citizen participation in local governance through town hall meetings and community forums.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Transparency Mechanisms</h4>
                                    <p className="text-gray-600">
                                        Implementing tools and frameworks for transparent budgeting, procurement, and project monitoring.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-blue)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Capacity Building</h4>
                                    <p className="text-gray-600">
                                        Training local government officials and community leaders in good governance practices.
                                    </p>
                                </div>
                                
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                    <motion.div variants={iconVariants} className="w-12 h-12 bg-[var(--dean-red)]/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--dean-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </motion.div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Policy Advocacy</h4>
                                    <p className="text-gray-600">
                                        Advocating for reforms and policies that promote accountability in local governance.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 