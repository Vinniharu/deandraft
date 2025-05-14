"use client";

import { motion } from 'framer-motion';

export default function OpenLGAsHero() {
    return (
        <motion.div
            className="relative text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* Background with gradient overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/openlgas/hero.jpg')",
                    filter: "brightness(0.5)"
                }}
            />
            
            {/* Gradient overlay with DEAN colors theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--dean-blue)]/80 to-[var(--dean-red)]/80 z-10" />
            
            {/* Animated patterns with DEAN colors */}
            <div className="absolute inset-0 z-20 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[var(--dean-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-[var(--dean-red)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-[var(--dean-blue)]/70 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                </div>
            </div>
            
            {/* Content */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center px-4 z-30">
                <motion.div
                    className="text-center max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        <span className="text-[var(--dean-blue)]">#</span>OpenLGAs
                    </h1>
                    
                    <div className="flex justify-center gap-2 items-center mb-6">
                        <div className="w-10 h-1 bg-[var(--dean-blue)]"></div>
                        <div className="w-4 h-4 rounded-full bg-[var(--dean-red)]"></div>
                        <div className="w-10 h-1 bg-[var(--dean-blue)]"></div>
                    </div>
                    
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
                        Driving accountability, transparency, and openness at the third tier of government -
                        the local government administration; the closest to the people, yet the most inaccessible.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <a href="#about" className="px-6 py-3 bg-[var(--dean-blue)] text-white rounded-lg hover:bg-[var(--dean-blue)]/90 transition shadow-lg">
                            Learn More
                        </a>
                        <a href="#achievements" className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white/10 transition backdrop-blur-sm">
                            Our Impact
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
} 