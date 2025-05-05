"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollLink from '@/app/components/ScrollLink';

export default function ConclusionSection() {
    return (
        <motion.section
            className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-red-900 text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Decorative elements */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl -mr-48" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl -ml-40" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Climate Resilience</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            The MSC Kenya Climate Workshop was an important step in our ongoing efforts to build climate resilience among Nigerian farmers and youth.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
                            <ul className="space-y-3">
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-blue-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Increased awareness of climate finance opportunities among youth and farmers</p>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-blue-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Identified practical solutions to post-harvest losses in Northern Nigeria</p>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-blue-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Strengthened cross-regional collaboration between experts, officials, and farmers</p>
                                </motion.li>
                            </ul>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
                            <ul className="space-y-3">
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-red-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Implement pilot projects for improved storage facilities in target communities</p>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-red-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Develop climate finance proposal templates for youth-led agricultural initiatives</p>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <div className="mr-3 mt-1 text-red-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p>Expand the program to additional states and farming communities</p>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Want to learn more about our climate action initiatives or partner with us?
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                href="/contact" 
                                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full transition-colors duration-300 inline-block font-medium"
                            >
                                Contact Us
                            </Link>
                            <Link 
                                href="/programs/climate-action" 
                                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full transition-colors duration-300 inline-block font-medium"
                            >
                                Explore Climate Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 