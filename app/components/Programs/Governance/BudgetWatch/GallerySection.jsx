"use client";

import ExternalLink from "@/app/components/ExternalLink";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function GallerySection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const galleryImages = [
        {
            src: "/budgetwatch/1.jpg",
            alt: "Community budget dialogue"
        },
        {
            src: "/budgetwatch/2.jpg",
            alt: "Budget monitoring training"
        },
        {
            src: "/budgetwatch/3.jpg",
            alt: "Community engagement"
        },
        {
            src: "/budgetwatch/4.jpg",
            alt: "Budget awareness campaign"
        },
        {
            src: "/budgetwatch/5.jpg",
            alt: "Stakeholder meeting"
        },
        {
            src: "/budgetwatch/6.jpg",
            alt: "Community feedback"
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="py-20 bg-white relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div className="text-center mb-16" variants={headerVariants}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                            Gallery
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Witness the impact of our budget transparency and citizen engagement initiatives
                        </p>
                    </motion.div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                variants={imageVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <ExternalLink
                        href="https://drive.google.com/drive/folders/12JX8RvDBHsms8nJ4Duaa8sYkGVeh6RAL?usp=drive_link"
                        className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto my-20 block"
                    >
                        View More Photos
                    </ExternalLink>
                </div>
            </div>
        </motion.section>
    );
}