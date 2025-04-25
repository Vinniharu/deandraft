"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function NextGenGallery() {
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedImage, setSelectedImage] = useState(null);

    // Animation variants
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

    const galleryItemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2, ease: "easeIn" },
        },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    // Gallery images data
    const galleryImages = [
        {
            src: "/nextgen/ld1.jpg",
            alt: "Lagos Day 1 Bootcamp",
            caption: "Lagos Day 1 Bootcamp",
            location: "Lagos"
        },
        {
            src: "/nextgen/ld2.jpg",
            alt: "Lagos Day 2 Bootcamp",
            caption: "Lagos Day 2 Bootcamp",
            location: "Lagos"
        },
        {
            src: "/nextgen/a.jpg",
            alt: "Abuja Bootcamp",
            caption: "Abuja Bootcamp",
            location: "Abuja"
        },
        {
            src: "/nextgen/apd1.jpg",
            alt: "Abuja Pilot Day 1 Bootcamp",
            caption: "Abuja Pilot Day 1 Bootcamp",
            location: "Abuja"
        },
        {
            src: "/nextgen/apd2.jpg",
            alt: "Abuja Pilot Day 2 Bootcamp",
            caption: "Abuja Pilot Day 2 Bootcamp",
            location: "Abuja"
        },
        {
            src: "/nextgen/hrc.jpg",
            alt: "Holy Rosary Girls College Abuja Bootcamp",
            caption: "Holy Rosary Girls College Abuja Bootcamp",
            location: "Abuja"
        }
    ];

    return (
        <motion.section
            id="gallery"
            ref={sectionRef}
            className="py-20 bg-gray-50 relative overflow-hidden"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
        >
            {/* Background decorations */}
            <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
            <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={headerVariants}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                            Bootcamp Gallery
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            Explore our transformative bootcamp experiences across different locations in Nigeria
                        </p>
                    </motion.div>

                    {/* Photo Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                variants={galleryItemVariants}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            objectFit: "cover"
                                        }}
                                        className="transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>
                                    
                                    {/* Caption Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <div className="text-xs font-medium text-white/70 mb-1 uppercase tracking-wider">
                                            {image.location}
                                        </div>
                                        <h3 className="text-lg font-semibold">{image.caption}</h3>
                                    </div>
                                    
                                    {/* View button on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                            <span className="text-white text-sm font-medium">View Larger</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image Lightbox */}
                    <AnimatePresence>
                        {selectedImage && (
                            <>
                                {/* Overlay */}
                                <motion.div
                                    className="fixed inset-0 bg-black/90 z-50"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={overlayVariants}
                                    onClick={() => setSelectedImage(null)}
                                />

                                {/* Modal Content */}
                                <motion.div
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={modalVariants}
                                >
                                    <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors z-10"
                                            onClick={() => setSelectedImage(null)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>

                                        {/* Image container with aspect ratio */}
                                        <div className="relative w-full" style={{ height: "70vh" }}>
                                            <Image
                                                src={selectedImage.src}
                                                alt={selectedImage.alt}
                                                fill
                                                style={{
                                                    objectFit: "contain"
                                                }}
                                                sizes="100vw"
                                                priority
                                            />
                                        </div>

                                        {/* Caption */}
                                        <div className="bg-black/50 p-4 text-white">
                                            <h3 className="text-lg font-semibold">
                                                {selectedImage.caption}
                                            </h3>
                                            <p className="text-sm text-white/70">
                                                Location: {selectedImage.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
} 