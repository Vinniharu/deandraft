"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function KeyDataSection() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (isInView) {
            let timer1, timer2, timer3;
            
            // Animate count1 to 100+
            const step1 = Math.ceil(100 / 40);
            timer1 = setInterval(() => {
                setCount1(prev => {
                    if (prev + step1 >= 100) {
                        clearInterval(timer1);
                        return 100;
                    }
                    return prev + step1;
                });
            }, 50);
            
            // Animate count2 to 200
            const step2 = Math.ceil(200 / 40);
            timer2 = setInterval(() => {
                setCount2(prev => {
                    if (prev + step2 >= 200) {
                        clearInterval(timer2);
                        return 200;
                    }
                    return prev + step2;
                });
            }, 50);
            
            // Animate count3 to 5
            const step3 = 1;
            timer3 = setInterval(() => {
                setCount3(prev => {
                    if (prev + step3 >= 5) {
                        clearInterval(timer3);
                        return 5;
                    }
                    return prev + step3;
                });
            }, 200);
            
            return () => {
                clearInterval(timer1);
                clearInterval(timer2);
                clearInterval(timer3);
            };
        }
    }, [isInView]);

    return (
        <motion.section
            className="py-20 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onViewportEnter={() => setIsInView(true)}
        >
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 right-0 h-24 bg-grid-pattern"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-grid-pattern"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Key Data</h2>
                        <div className="flex justify-center gap-2 items-center mb-6">
                            <div className="w-12 h-1 bg-red-600"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-12 h-1 bg-red-600"></div>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The numbers that demonstrate our impact
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            className="bg-blue-50 rounded-xl p-8 text-center shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">{count1}+</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Participants</h3>
                            <p className="text-gray-600">
                                Attendees at the climate finance conversation, including youth, activists, and officials
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="bg-red-50 rounded-xl p-8 text-center shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-red-600 mb-4">{count2}+</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Farmers Engaged</h3>
                            <p className="text-gray-600">
                                Small-scale farmers participated in focus groups across Abuja, Nasarawa, and Kaduna
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 text-center shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">{count3}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Actionable Strategies</h3>
                            <p className="text-gray-600">
                                Concrete recommendations delivered for improving agricultural resilience
                            </p>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="bg-gray-50 p-8 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Recommended Strategies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <motion.div
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-gray-800 mb-2">Improved Storage</h4>
                                <p className="text-gray-600 text-sm">
                                    Development of climate-resilient storage facilities to reduce post-harvest losses
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-gray-800 mb-2">Market Access</h4>
                                <p className="text-gray-600 text-sm">
                                    Creating more efficient market linkages for smallholder farmers
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-gray-800 mb-2">Capacity Building</h4>
                                <p className="text-gray-600 text-sm">
                                    Training farmers on climate-resilient agricultural practices
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-gray-800 mb-2">Financial Access</h4>
                                <p className="text-gray-600 text-sm">
                                    Improving access to climate finance and agricultural loans
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                            >
                                <h4 className="font-semibold text-gray-800 mb-2">Community Networks</h4>
                                <p className="text-gray-600 text-sm">
                                    Strengthening farmer cooperatives and resource-sharing networks
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 