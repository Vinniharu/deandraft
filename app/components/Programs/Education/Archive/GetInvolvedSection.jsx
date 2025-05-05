"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function GetInvolvedSection() {
    const buttonVariants = {
        rest: { scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.section
            className="relative py-20 md:py-28 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background with gradient - updated to red and blue theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 z-0">
                {/* Background patterns */}
                <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Involved</h2>
                        
                        <div className="w-20 h-1 bg-white/50 mx-auto mb-10"></div>
                        
                        <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            Be part of the change. Join us in transforming educational outcomes for Nigerian youth.
                        </p>
                        
                        <motion.div
                            className="text-4xl mb-12"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 260, 
                                damping: 20,
                                delay: 0.5
                            }}
                        >
                            <span className="inline-block p-5 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                📩
                            </span>
                        </motion.div>
                        
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div variants={itemVariants}>
                                <Link href="#" className="block">
                                    <motion.div
                                        className="bg-white hover:bg-blue-50 text-blue-600 rounded-xl py-5 px-6 shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        initial="rest"
                                    >
                                        <span className="text-2xl mb-2">👥</span>
                                        <span className="font-semibold text-lg">Volunteer</span>
                                    </motion.div>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Link href="#" className="block">
                                    <motion.div
                                        className="bg-white hover:bg-red-50 text-red-600 rounded-xl py-5 px-6 shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        initial="rest"
                                    >
                                        <span className="text-2xl mb-2">🎁</span>
                                        <span className="font-semibold text-lg">Donate</span>
                                    </motion.div>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Link href="#" className="block">
                                    <motion.div
                                        className="bg-white hover:bg-blue-50 text-blue-600 rounded-xl py-5 px-6 shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        initial="rest"
                                    >
                                        <span className="text-2xl mb-2">📝</span>
                                        <span className="font-semibold text-lg">Apply</span>
                                    </motion.div>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Link href="#" className="block">
                                    <motion.div
                                        className="bg-white hover:bg-red-50 text-red-600 rounded-xl py-5 px-6 shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        initial="rest"
                                    >
                                        <span className="text-2xl mb-2">🤝</span>
                                        <span className="font-semibold text-lg">Collaborate</span>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 