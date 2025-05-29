"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
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
                    backgroundImage: "url('/archive/mainbg.JPG')", // Replace with actual image path
                    filter: "brightness(0.6)"
                }}
            />
            
            {/* Gradient overlay - updated to red and blue theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80 z-10" />
            
            {/* Animated patterns - updated to red and blue theme */}
            <div className="absolute inset-0 z-20 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                    <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
                </div>
            </div>
            
            {/* Content */}
            <div className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center px-4 z-30">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                        Education Archive
                    </h1>
                    
                    <div className="w-24 h-1 bg-white/70 mx-auto mb-6" />
                    
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80">
                        Documenting our journey of educational transformation across Nigeria
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
} 