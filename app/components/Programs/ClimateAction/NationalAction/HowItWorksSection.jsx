"use client";

import { motion } from 'framer-motion';

export default function HowItWorksSection() {
    const approaches = [
        {
            icon: "📍",
            title: "State-wide Activation",
            description: "Each participating state organizes localized activities—school outreaches, road walks, environmental clean-ups, debates, art contests, and SDG awareness sessions.",
            locations: ["Lagos", "Abuja", "Kano", "Rivers", "Enugu", "Plateau", "Kaduna"]
        },
        {
            icon: "🎒",
            title: "School-Centered Engagement",
            description: "Students take center stage, becoming SDG Champions through classroom activities and community projects designed to spark conversation and drive action.",
            locations: ["Federal Government Colleges", "State Secondary Schools", "Private Institutions", "Primary Schools", "Universities"]
        },
        {
            icon: "🗣",
            title: "Youth-Led Advocacy",
            description: "Young people take leadership roles, engaging with policymakers and stakeholders to promote sustainable development in their communities.",
            locations: ["Local Government Headquarters", "State Houses of Assembly", "Community Town Halls", "Media Houses"]
        }
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
                        <div className="flex justify-center gap-1 items-center mb-6">
                            <div className="w-10 h-1 bg-red-600"></div>
                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                            <div className="w-10 h-1 bg-red-600"></div>
                        </div>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Across Nigeria, from Lagos to Borno, our National Action Day mobilizes youth in every region
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {approaches.map((approach, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                            >
                                <div className="text-4xl mb-4">{approach.icon}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{approach.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{approach.description}</p>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <h4 className="text-sm font-semibold text-blue-800 mb-2">Active in:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {approach.locations.map((location, idx) => (
                                            <span 
                                                key={idx} 
                                                className="inline-block text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100"
                                            >
                                                {location}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 p-6 rounded-xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">National Coverage</h3>
                        <p className="text-gray-700">
                            Our initiative has reached 36 states and the FCT, with over 200 local government areas actively participating in the National Action Day movement.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
} 