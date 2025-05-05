"use client";

import { motion } from "framer-motion";

export default function ObjectivesSection() {
    const objectives = [
        "Build capacity in storytelling, data visualization, and social media advocacy",
        "Strengthen understanding of the climate–insecurity–GBV nexus",
        "Equip fellows to design and implement community-based climate resilience projects",
        "Create a cross-border youth advocacy network for sustained impact",
        "Position fellows to influence local, national, and global climate policies"
    ];

    return (
        <motion.section
        style={{ backgroundImage: "url('/lakechad/nextbg.JPG')" }}
            className="py-20 md:py-24 bg-gray-50 relative overflow-hidden bg-center bg-fixed bg-cover "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            
        >
            <div className="absolute inset-0 bg-gray-400 backdrop-blur-2xl opacity-50 h-full"></div>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -right-24 top-24 w-96 h-96 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute left-1/4 top-1/3 w-64 h-64 border-2 border-red-500 rounded-full"></div>
                <div className="absolute right-1/3 bottom-1/4 w-80 h-80 border-2 border-blue-500 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Fellowship Objectives</h2>
                        <div className="flex justify-center gap-1 items-center mb-6">
                            <div className="w-10 h-1 bg-red-600"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-10 h-1 bg-red-600"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <ul className="space-y-6">
                                {objectives.map((objective, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl md:text-2xl text-blue-600">🔹</div>
                                        <p className="text-gray-700 leading-relaxed">{objective}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="bg-gradient-to-br from-blue-600 to-red-600 p-8 rounded-xl text-white h-full">
                                <h3 className="text-2xl font-bold mb-6">Opportunities for Fellows</h3>
                                
                                <ul className="space-y-4">
                                    <motion.li 
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.4 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl">💡</div>
                                        <div>
                                            <p className="font-semibold">Skill Development</p>
                                            <p className="text-white/80">From climate communication to project management</p>
                                        </div>
                                    </motion.li>
                                    
                                    <motion.li 
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.4 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl">🌍</div>
                                        <div>
                                            <p className="font-semibold">Global Exposure</p>
                                            <p className="text-white/80">Access to climate summits and international policy platforms</p>
                                        </div>
                                    </motion.li>
                                    
                                    <motion.li 
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.4 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl">🤝</div>
                                        <div>
                                            <p className="font-semibold">Mentorship</p>
                                            <p className="text-white/80">Ongoing support from regional and global climate experts</p>
                                        </div>
                                    </motion.li>
                                    
                                    <motion.li 
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.4 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl">💸</div>
                                        <div>
                                            <p className="font-semibold">Seed Funding</p>
                                            <p className="text-white/80">For implementing innovative climate justice solutions</p>
                                        </div>
                                    </motion.li>
                                    
                                    <motion.li 
                                        className="flex items-start"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9, duration: 0.4 }}
                                    >
                                        <div className="mt-1 mr-4 text-xl">📢</div>
                                        <div>
                                            <p className="font-semibold">Advocacy Tools</p>
                                            <p className="text-white/80">To influence climate narratives and policy agendas</p>
                                        </div>
                                    </motion.li>
                                </ul>
                                
                                {/* Decorative elements */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/10 -mb-12 -mr-12"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white/10 -mt-8 -ml-8"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
} 