"use client";

import { motion } from "framer-motion";

export default function ProgramCard({ program, index }) {
    // Updated color classes to use only red and blue themes
    const colorClasses = {
        blue: {
            primaryBg: "bg-blue-600",
            secondaryBg: "bg-blue-50",
            primaryText: "text-blue-600",
            secondaryText: "text-blue-800",
            lightBg: "bg-blue-100",
            darkBg: "bg-blue-700",
            borderColor: "border-blue-200",
            hoverBg: "hover:bg-blue-700",
            iconBg: "bg-blue-100"
        },
        red: {
            primaryBg: "bg-red-600",
            secondaryBg: "bg-red-50",
            primaryText: "text-red-600",
            secondaryText: "text-red-800",
            lightBg: "bg-red-100",
            darkBg: "bg-red-700",
            borderColor: "border-red-200",
            hoverBg: "hover:bg-red-700",
            iconBg: "bg-red-100"
        }
    };

    // Determine if this card should use blue or red based on even/odd index
    const colorKey = index % 2 === 0 ? 'blue' : 'red';
    const colors = colorClasses[colorKey];
    
    // Animations
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + (i * 0.1),
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };
    
    const impactItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.6 + (i * 0.1),
                duration: 0.5
            }
        })
    };

    return (
        <motion.div
            className="group"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
        >
            <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${colors.secondaryBg} border border-gray-100`}>
                {/* Program header */}
                <div className={`${colors.primaryBg} p-5 md:p-7 text-white relative overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <circle cx="50" cy="50" r="40" fill="white" />
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <circle cx="20" cy="20" r="20" fill="white" />
                        </svg>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold relative z-10">
                        {program.title}
                    </h2>
                </div>
                
                {/* Program content */}
                <div className="p-6 md:p-8">
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {program.description}
                    </p>
                    
                    <div className="mb-8">
                        <div className="flex items-center mb-5">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors.lightBg} ${colors.primaryText} mr-3`}>
                                <span className="text-lg">📌</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Impact</h3>
                        </div>
                        
                        <ul className="space-y-4 ml-2">
                            {program.impacts.map((impact, i) => (
                                <motion.li 
                                    key={i} 
                                    className="flex items-start"
                                    variants={impactItemVariants}
                                    custom={i}
                                >
                                    <div className={`mt-1.5 mr-4 w-2 h-2 rounded-full ${colors.primaryBg}`}></div>
                                    <span className="text-gray-700">{impact}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                   
                </div>
            </div>
        </motion.div>
    );
} 