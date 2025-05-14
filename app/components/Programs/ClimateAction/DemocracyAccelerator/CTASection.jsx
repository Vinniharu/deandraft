"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CTASection() {
    const [dots, setDots] = useState([]);
    
    // Generate random dot positions only on the client side
    useEffect(() => {
        const newDots = Array.from({ length: 20 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: 5 + Math.random() * 5,
            animationDelay: Math.random() * 5
        }));
        setDots(newDots);
    }, []);

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
            
            {/* Animated dots pattern - client-side only */}
            <div className="absolute inset-0">
                {dots.map((dot, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                        style={{
                            top: dot.top,
                            left: dot.left,
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: dot.animationDuration,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: dot.animationDelay,
                        }}
                    />
                ))}
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Lead Climate Democracy?</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Be part of a growing movement that puts people at the center of climate action. Join, support, or learn more about the Climate Democracy Accelerator.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        className="text-center max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <p className="text-white/90 mb-8">
                            📩 Reach out to collaborate or nominate civic leaders for future cohorts.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                href="mailto:info@dean.com.ng" 
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
                            >
                                Contact Us
                            </Link>
                            <Link 
                                href="mailto:info@dean.com.ng" 
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
                            >
                                Apply for Next Cohort
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 