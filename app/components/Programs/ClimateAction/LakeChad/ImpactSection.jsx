"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function ImpactSection() {
    const achievements = [
        "Trained 20 fellows from the Lake Chad region",
        "Launched youth-led projects tackling flooding, desertification, and deforestation",
        "Amplified community voices through climate stories and local media",
        "Fostered regional collaboration between youth, policymakers, and civil society",
        "Increased advocacy for gender-responsive climate solutions"
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
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Impact & Achievements</h2>
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
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    >
                                        <div className="mt-1 mr-4 text-green-600">✔</div>
                                        <p className="text-gray-700">{achievement}</p>
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
                                    href="https://drive.google.com/drive/folders/1ZT9fJq0-9kwcJIomv--uz5kpwvrdq-eW" 
                                    target="_blank"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <span className="mr-2">📷</span>
                                    <span>View Fellowship Photos</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            className="order-1 md:order-2 p-6"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                                {/* Decorative background elements */}
                                <div className="absolute -top-4 -left-4 w-full h-full bg-red-100 rounded-xl transform rotate-3 z-0"></div>
                                <div className="absolute -top-2 -left-2 w-full h-full bg-blue-100 rounded-xl transform -rotate-2 z-0"></div>
                                
                                {/* Main gallery container */}
                                <div className="relative h-full w-full bg-gradient-to-br from-blue-600 to-red-600 p-2 rounded-xl z-10">
                                    <div className="bg-white h-full w-full rounded-lg overflow-hidden grid grid-cols-3 grid-rows-3 gap-2 p-2">
                                        {/* Featured large image */}
                                        <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                                            <img 
                                                src="/lakechad/1.jpg" 
                                                alt="Lake Chad Fellowship Main Event" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        
                                        {/* Smaller gallery images */}
                                        <div className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
                                            <img 
                                                src="/lakechad/2.jpg" 
                                                alt="Fellowship workshop" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        
                                        <div className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
                                            <img 
                                                src="/lakechad/3.jpg" 
                                                alt="Community engagement" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        
                                        <div className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
                                            <img 
                                                src="/lakechad/4.jpg" 
                                                alt="Field research" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        
                                        <div className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
                                            <img 
                                                src="/lakechad/5.jpg" 
                                                alt="Team collaboration" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        
                                        <div className="rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
                                            <img 
                                                src="/lakechad/6.jpg" 
                                                alt="Project presentation" 
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Overlay gradient for depth effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 z-20 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 