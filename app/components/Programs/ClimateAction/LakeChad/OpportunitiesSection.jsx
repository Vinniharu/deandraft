"use client";

import { motion } from "framer-motion";

export default function OpportunitiesSection() {
    const opportunities = [
        {
            icon: "📊",
            title: "Data Collection & Analysis",
            description: "Fellows gain skills in climate data collection and analysis methodologies to support evidence-based advocacy."
        },
        {
            icon: "🎬",
            title: "Digital Storytelling",
            description: "Learn to create compelling digital narratives showcasing climate impacts and community-led solutions."
        },
        {
            icon: "🔍",
            title: "Research & Publication",
            description: "Contribute to research papers and policy briefs exploring the climate-insecurity-GBV nexus in the Lake Chad region."
        },
        {
            icon: "🤝",
            title: "Network Building",
            description: "Connect with climate experts, policymakers, and youth advocates across the region and globally."
        },
        {
            icon: "💼",
            title: "Project Development",
            description: "Receive mentorship and seed funding to design and implement community-based climate resilience projects."
        },
        {
            icon: "🎓",
            title: "Leadership Development",
            description: "Enhance leadership capabilities through tailored training, mentorship, and hands-on experiences."
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
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Fellowship Opportunities</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Fellows will have access to diverse learning and growth opportunities throughout the program:
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {opportunities.map((opportunity, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500 hover:-translate-y-1 hover:scale-103 transition-transform duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                            >
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white mb-4">
                                        {opportunity.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{opportunity.title}</h3>
                                    <p className="text-gray-600">{opportunity.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Apply?</h3>
                        <p className="text-gray-600 mb-6">
                            Applications for the next cohort of the Lake Chad Climate Justice Youth Fellowship will open in January 2024.
                            Sign up to receive notifications when applications open.
                        </p>
                        <button className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                            <span className="mr-2">✉️</span>
                            <span>Join Our Mailing List</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 