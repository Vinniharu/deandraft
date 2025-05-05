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

    const activities = [
        "Organize an event",
        "Host a workshop",
        "Volunteer",
        "Share your story"
    ];
    
    // Add upcoming events with locations
    const upcomingEvents = [
        {
            name: "SDG Campus Tour",
            location: "University of Lagos",
            date: "May 15-20, 2023"
        },
        {
            name: "Youth Climate Forum",
            location: "Abuja International Conference Center",
            date: "June 5, 2023"
        },
        {
            name: "Community Action Workshop",
            location: "Kano State Library",
            date: "July 12-13, 2023"
        }
    ];

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
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Be part of the movement. Join thousands of young Nigerians making the SDGs real in their communities.
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Next National Action Day</h3>
                            <div className="flex items-center mb-6">
                                <div className="text-2xl mr-3">📅</div>
                                <p className="text-lg">September <span className="text-red-300">24, 2023</span></p>
                            </div>
                            
                            <h4 className="text-xl font-semibold mb-3">Activities:</h4>
                            <ul className="space-y-2 pl-2">
                                {activities.map((activity, index) => (
                                    <motion.li 
                                        key={index}
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></div>
                                        <span>{activity}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            
                            {/* Coordination centers */}
                            <div className="mt-6 pt-6 border-t border-white/20">
                                <h4 className="text-lg font-semibold mb-3">Coordination Centers:</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-start">
                                        <span className="text-red-300 mr-2">●</span>
                                        <span>Lagos (South West)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-300 mr-2">●</span>
                                        <span>Abuja (North Central)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-red-300 mr-2">●</span>
                                        <span>Port Harcourt (South South)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-300 mr-2">●</span>
                                        <span>Kano (North West)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-red-300 mr-2">●</span>
                                        <span>Enugu (South East)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-300 mr-2">●</span>
                                        <span>Maiduguri (North East)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
                            
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        className="border-l-2 border-red-400 pl-4 py-1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    >
                                        <h4 className="font-semibold text-lg">{event.name}</h4>
                                        <div className="flex items-center text-sm text-white/80 mt-1">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="text-sm text-white/80 mt-1">
                                            <span className="text-red-300">📅</span> {event.date}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-white/20">
                                <p className="text-lg mb-6">
                                    Want to bring National Action Day to your state or school?
                                </p>
                                
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link 
                                        href="#" 
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                                    >
                                        Contact Us
                                    </Link>
                                    <Link 
                                        href="#" 
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
                                    >
                                        Download Resource Pack
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <p className="text-white/80 text-sm">
                            For more information, follow us on social media or email <span className="underline">info@deaninitiative.org</span>
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                            Headquarters: 5 Awolowo Road, Ikoyi, Lagos | Regional offices in Abuja, Kano, and Port Harcourt
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 