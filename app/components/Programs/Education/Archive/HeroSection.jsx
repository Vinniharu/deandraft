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
            
            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-16 z-30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full w-full">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,101.3C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </motion.div>
    );
} 