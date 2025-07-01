"use client";

import * as React from "react";
import * as FramerMotion from "framer-motion";
import { useState, useEffect } from 'react';

export default function StudentFellowshipHero() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
        },
    };

    if (!isClient) {
        return (
            <div
                className="text-white"
                style={{
                    backgroundImage: "url('/studentfellowship/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="w-full mx-auto px-4 h-[50vh] flex items-center justify-center bg-[var(--dean-red)]/20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Student Open-Gov Fellowship
                        </h1>

                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Empowering students to drive transparency and accountability in local governance
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <FramerMotion.motion.div
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{
                backgroundImage: "url('/studentfellowship/hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full mx-auto px-4 h-[50vh] flex items-center justify-center bg-[var(--dean-red)]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <FramerMotion.motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        variants={textVariants}
                    >
                        Student Open-Gov Fellowship
                    </FramerMotion.motion.h1>

                    <FramerMotion.motion.p
                        className="text-lg text-white/90 max-w-2xl mx-auto"
                        variants={textVariants}
                    >
                        Empowering students to drive transparency and accountability in local governance
                    </FramerMotion.motion.p>
                </div>
            </div>
        </FramerMotion.motion.div>
    );
} 