"use client";

import { motion } from 'framer-motion';

export default function WhyItMattersSection() {
    return (
        <motion.section
            className="py-20 md:py-28 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Background decoration */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-50 rounded-full opacity-50 -mr-40" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-red-50 rounded-full opacity-50 -ml-32" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-gradient-to-br from-blue-600 to-red-600 text-white rounded-2xl p-10 shadow-xl"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">Why It Matters</h2>
                        
                        <div className="flex justify-center gap-2 items-center mb-8">
                            <div className="w-10 h-1 bg-white/60"></div>
                            <div className="w-4 h-4 rounded-full bg-white/80"></div>
                            <div className="w-10 h-1 bg-white/60"></div>
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-8">
                            Climate change is not just a scientific issue — it's a governance issue. CDA empowers communities to take part in designing the very policies that shape their climate future. The program strengthens the role of citizens in creating just, transparent, and sustainable climate solutions.
                        </p>
                        
                        <div className="flex justify-center">
                            <motion.div 
                                className="h-1 w-20 bg-white/60"
                                animate={{ width: ["0%", "60%", "40%", "80%", "60%"] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 