"use client";

import { motion } from 'framer-motion';

export default function IntroSection() {
    return (
        <motion.section
            className="py-20 md:py-28 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background decoration */}
            <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-50 rounded-full opacity-70" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-50 rounded-full opacity-70" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white backdrop-blur-sm bg-opacity-90 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 -mt-8 -mr-8">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-red-50 opacity-70">
                                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.3,42.4C65.2,55.5,54.6,67.3,41.3,76.5C28.1,85.6,12.2,92.1,-1.7,94.6C-15.6,97.1,-31.2,95.7,-45.4,89.1C-59.6,82.5,-72.3,70.8,-79.1,56.4C-85.9,42,-86.8,25,-87.9,7.9C-89,-9.1,-90.4,-26.1,-84.7,-40.8C-79,-55.5,-66.2,-67.8,-51.5,-74.9C-36.8,-82,-18.4,-83.8,-1.2,-81.9C16,-80,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                                <h2 className="text-2xl font-bold text-gray-800">About the Initiative</h2>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                The National Action Day on SDGs is a bold civic movement championed by DEAN Initiative to drive grassroots awareness and action around the United Nations Sustainable Development Goals (SDGs). Held annually across Nigeria, the campaign activates youth, schools, and community groups to take collective action for a better, more sustainable future.
                            </p>
                            
                            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">Purpose & Vision</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The National Action Day is not just an event — it's a nationwide call to action. It unites citizens across all 36 states to learn, reflect, and act on the most pressing global challenges, from poverty and gender inequality to climate change and education.
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-3 mt-8">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Youth Empowerment</span>
                                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Sustainable Development</span>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Civic Action</span>
                                <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Education</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 