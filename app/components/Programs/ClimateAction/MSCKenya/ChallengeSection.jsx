"use client";

import { motion } from 'framer-motion';

export default function ChallengeSection() {
    return (
        <motion.section
            className="py-20 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full -ml-12 -mb-12" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">The Challenge</h2>
                        <div className="flex justify-center gap-2 items-center mb-6">
                            <div className="w-12 h-1 bg-blue-600"></div>
                            <div className="w-4 h-4 rounded-full bg-red-600"></div>
                            <div className="w-12 h-1 bg-blue-600"></div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="bg-gradient-to-r from-blue-50 to-red-50 p-8 rounded-xl shadow-md mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Limited access to climate finance and insufficient technical knowledge on mitigating
                            post-harvest losses pose significant challenges for young people, non-profits, and smallholder
                            farmers in Nigeria. Farmers face difficulties such as:
                        </p>
                        
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                <div className="text-3xl mb-3">🏗️</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Inadequate Storage</h3>
                                <p className="text-gray-600">
                                    Limited access to proper storage facilities leads to significant post-harvest losses.
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="text-3xl mb-3">🌤️</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Climate Variability</h3>
                                <p className="text-gray-600">
                                    Unpredictable weather patterns affect crop yields and quality across regions.
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-6 rounded-lg shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="text-3xl mb-3">💰</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Constraints</h3>
                                <p className="text-gray-600">
                                    Lack of financial resources to adopt climate-resilient agricultural practices.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
                            "These challenges create a cycle of vulnerability for farmers, particularly in Northern Nigeria where climate change impacts are increasingly severe."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 