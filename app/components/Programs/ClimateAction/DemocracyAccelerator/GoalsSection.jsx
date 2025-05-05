"use client";

import { motion } from 'framer-motion';

export default function GoalsSection() {
    const goals = [
        "Foster inclusive climate governance",
        "Train youth and civil society actors in participatory democracy tools",
        "Strengthen community-driven climate policy development",
        "Support local leaders to design sustainable public participation programs"
    ];

    return (
        <motion.section
            className="py-20 md:py-24 bg-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Program Goals</h2>
                        <div className="flex justify-center gap-1 items-center mb-6">
                            <div className="w-10 h-1 bg-red-600"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-10 h-1 bg-red-600"></div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
                        <ul className="space-y-6">
                            {goals.map((goal, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                >
                                    <div className="mt-1 mr-4 text-xl md:text-2xl text-blue-600">🔹</div>
                                    <p className="text-gray-700 leading-relaxed">{goal}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
} 