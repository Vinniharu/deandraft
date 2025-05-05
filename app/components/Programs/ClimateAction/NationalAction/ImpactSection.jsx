"use client";

import { motion } from 'framer-motion';
import ScrollLink from '@/app/components/ScrollLink';

export default function ImpactSection() {
    const impacts = [
        {
            icon: "🌍",
            title: "Awareness",
            description: "Raised awareness on all 17 SDGs among Nigeria's next generation",
            regions: ["North Central", "North East", "North West", "South East", "South South", "South West"]
        },
        {
            icon: "🛠",
            title: "Local Ownership",
            description: "Built local ownership of global goals through community-based actions",
            regions: ["Urban Centers", "Rural Communities", "Coastal Areas", "Desert-prone Regions"]
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "Fostered collaboration between youth, educators, civil society, and government",
            regions: ["Federal Institutions", "State Agencies", "Local Government", "Community Organizations"]
        },
        {
            icon: "🚀",
            title: "Sustainability",
            description: "Launched school-led initiatives that live on beyond the Action Day",
            regions: ["Model Schools", "Green Clubs", "Science Centers", "Community Libraries"]
        }
    ];

    // Regional success stories
    const successStories = [
        {
            region: "Northern Nigeria",
            achievement: "Over 2,000 students trained as SDG advocates, leading peer education on climate action"
        },
        {
            region: "Southern Nigeria",
            achievement: "50+ beach and waterway cleanups conducted, removing over 10 tons of plastic waste"
        },
        {
            region: "Eastern Nigeria",
            achievement: "School recycling programs established in 150+ institutions, reducing waste by 40%"
        },
        {
            region: "Western Nigeria",
            achievement: "Digital literacy workshops reaching 5,000+ students in underserved communities"
        }
    ];

    return (
        <motion.section
            id="impact-section"
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Impact</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            From the coastal regions of Lagos to the arid zones of Borno, our initiative creates lasting change
                        </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {impacts.map((impact, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-500 hover:-translate-y-1 hover:scale-103 transition-transform duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                            >
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center text-2xl text-white mb-4">
                                        {impact.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{impact.title}</h3>
                                    <p className="text-gray-600 mb-4">{impact.description}</p>
                                    
                                    {/* Region tags */}
                                    <div className="mt-3 pt-3 border-t border-gray-100">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Regional Focus</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {impact.regions.slice(0, 3).map((region, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                                                >
                                                    {region}
                                                </span>
                                            ))}
                                            {impact.regions.length > 3 && (
                                                <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                                    +{impact.regions.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Regional success stories */}
                    <motion.div
                        className="mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Regional Success Stories</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {successStories.map((story, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
                                >
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        {story.region}
                                    </h4>
                                    <p className="text-gray-700">
                                        {story.achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto italic mb-8">
                            "The National Action Day on SDGs has transformed how young Nigerians engage with global challenges, creating a generation of empowered change-makers across every geopolitical zone."
                        </p>
                        
                        <ScrollLink
                            to="cta-section"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Ready to get involved?
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </ScrollLink>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 