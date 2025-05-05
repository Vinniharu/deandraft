"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
    // Function to handle smooth scrolling to any section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.section 
            className="relative h-[50vh] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80 mix-blend-multiply"></div>
                <img 
                    src="/images/msc-kenya-workshop.jpg" 
                    alt="MSC Kenya Climate Workshop" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute right-0 top-1/3 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute left-0 bottom-1/3 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Small circles pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-white rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 z-20 text-white text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        MSC Kenya Climate Workshop
                    </h1>
                    
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <div className="h-1 w-24 bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                        <div className="h-1 w-24 bg-blue-500"></div>
                    </div>
                    
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 mb-8">
                        Empowering Nigerian farmers and youth with climate finance knowledge and post-harvest loss solutions
                    </p>
                    
                    <motion.div 
                        className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-medium">
                            <span className="text-red-300 mr-2">📅</span> August 20, 2024
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-medium">
                            <span className="text-blue-300 mr-2">👥</span> 100+ Participants
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-medium">
                            <span className="text-green-300 mr-2">📍</span> Abuja, Nasarawa, Kaduna
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <button 
                            onClick={() => scrollToSection('workshop-details')}
                            className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                        >
                            Learn More
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
} 