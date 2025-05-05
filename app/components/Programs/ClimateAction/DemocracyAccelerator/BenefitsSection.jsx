"use client";

import { motion } from 'framer-motion';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: "🎓",
            title: "Expert Training",
            description: "Learn from global climate democracy experts"
        },
        {
            icon: "🛠️",
            title: "Practical Tools",
            description: "For budgeting, participation, and decision-making"
        },
        {
            icon: "🤝",
            title: "Networking",
            description: "Connect with civic innovators worldwide"
        },
        {
            icon: "📈",
            title: "Technical Support",
            description: "From idea design to implementation"
        },
        {
            icon: "📢",
            title: "Visibility",
            description: "Opportunities to present projects at international forums"
        }
    ];

    return (
        <motion.section
            className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-red-50 relative overflow-hidden"
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
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Fellows Gain</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Fellows receive comprehensive support throughout their journey with the Climate Democracy Accelerator:
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500 hover:-translate-y-1 hover:scale-103 transition-transform duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                            >
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 