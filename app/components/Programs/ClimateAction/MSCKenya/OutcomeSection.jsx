"use client";

import { motion } from 'framer-motion';

export default function OutcomeSection() {
    const outcomes = [
        {
            title: "Engagement",
            items: [
                "100+ participants, including climate activists, students, and local government stakeholders, engaged in the climate finance conversation.",
                "Farmers from three states in Northern-Nigeria participated in detailed focus group discussions."
            ],
            icon: "👥",
            color: "blue"
        },
        {
            title: "Awareness",
            items: [
                "This activity highlighted the critical role of climate finance in mitigating post-harvest losses.",
                "Actionable strategies were shared on proposal writing, resource mobilization, and leveraging grants to address climate issues."
            ],
            icon: "💡",
            color: "red"
        }
    ];

    return (
        <motion.section
            className="py-20 bg-gradient-to-br from-blue-50 to-red-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-70 -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-70 -ml-48 -mb-48" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Outcome</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            The workshop achieved significant results across multiple dimensions
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${
                                    outcome.color === "blue" ? "border-blue-500" : "border-red-500"
                                }`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 ${
                                            outcome.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-600"
                                        }`}>
                                            {outcome.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">{outcome.title}</h3>
                                    </div>
                                    
                                    <ul className="space-y-3">
                                        {outcome.items.map((item, itemIndex) => (
                                            <motion.li
                                                key={itemIndex}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (index * 0.2) + (itemIndex * 0.1), duration: 0.5 }}
                                            >
                                                <div className={`mr-3 mt-1 ${
                                                    outcome.color === "blue" ? "text-blue-600" : "text-red-600"
                                                }`}>
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700">{item}</p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        className="bg-white p-8 rounded-xl shadow-md mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Impact</h3>
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Youth Empowerment:</strong> Young participants and stakeholders were empowered with knowledge on accessing climate finance.
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-red-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Government Capacity:</strong> Local government officials received guidance on mobilizing resources for climate action and integrating community-driven solutions.
                                </p>
                            </motion.div>
                            
                            <motion.div
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                            >
                                <div className="mr-3 mt-1 text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">
                                    <strong>Farmer Solutions:</strong> Farmers identified climate-resilient solutions to post-harvest losses, including improved storage facilities and market access.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto italic">
                            "The event highlighted the intersection of climate finance and grassroots resilience, fostering collaboration among young people, experts, and farmers to drive sustainable agricultural practices in Nigeria."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 