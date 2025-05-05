"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HighlightsSection() {
    const highlights = [
        "Engaged over 30,000 youth participants nationwide",
        "Partnered with schools, youth groups, and local government agencies",
        "Created over 1,500 student-led SDG awareness campaigns",
        "Distributed learning materials and SDG guides to hundreds of schools"
    ];

    return (
        <motion.section
            className="py-20 md:py-28 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50/50 rounded-full -ml-12 -mb-12" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Highlights</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="order-2 md:order-1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <ul className="space-y-4">
                                {highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    >
                                        <div className="mt-1 mr-4 text-green-600">✔</div>
                                        <p className="text-gray-700">{highlight}</p>
                                    </motion.li>
                                ))}
                            </ul>
                            
                            <motion.div
                                className="mt-10 text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <Link 
                                    href="#"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <span className="mr-2">📷</span>
                                    <span>See National Action Day in Action</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            className="order-1 md:order-2 p-6"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="relative">
                                {/* Decorative frames for the SDG wheel image */}
                                <div className="absolute top-4 left-4 w-full h-full bg-red-100 rounded-lg transform rotate-3"></div>
                                <div className="absolute top-2 left-2 w-full h-full bg-blue-100 rounded-lg transform -rotate-2"></div>
                                
                                {/* Main image */}
                                <div className="relative bg-gradient-to-br from-blue-500 to-red-500 rounded-lg p-1">
                                    <div className="bg-white rounded-lg overflow-hidden">
                                        <img 
                                            src="/national-action/sdg-wheel.jpg" 
                                            alt="SDG Wheel"
                                            className="w-full h-auto object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://placehold.co/600x400/blue/white?text=SDG+Wheel";
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 