"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Gallery items - these would be replaced with actual workshop photos
    const galleryItems = [
        {
            id: 1,
            title: "Experts from MicroSave Consulting",
            location: "DEAN Initiative HQ",
            image: "https://placehold.co/600x400/blue/white?text=MSC+Experts",
            fallback: "https://placehold.co/600x400/blue/white?text=MSC+Experts"
        },
        {
            id: 2,
            title: "Climate Finance Workshop",
            location: "Abuja",
            image: "https://placehold.co/600x400/red/white?text=Climate+Finance+Workshop",
            fallback: "https://placehold.co/600x400/red/white?text=Climate+Finance+Workshop"
        },
        {
            id: 3,
            title: "Farmer Focus Group",
            location: "Kaduna State",
            image: "https://placehold.co/600x400/green/white?text=Farmer+Focus+Group",
            fallback: "https://placehold.co/600x400/green/white?text=Farmer+Focus+Group"
        },
        {
            id: 4,
            title: "Youth Climate Activists",
            location: "Workshop Session",
            image: "https://placehold.co/600x400/blue/white?text=Youth+Activists",
            fallback: "https://placehold.co/600x400/blue/white?text=Youth+Activists"
        },
        {
            id: 5,
            title: "Post-Harvest Loss Discussion",
            location: "Nasarawa State",
            image: "https://placehold.co/600x400/red/white?text=Post-Harvest+Discussion",
            fallback: "https://placehold.co/600x400/red/white?text=Post-Harvest+Discussion"
        },
        {
            id: 6,
            title: "Local Government Representatives",
            location: "Policy Discussion Panel",
            image: "https://placehold.co/600x400/blue/white?text=Government+Representatives",
            fallback: "https://placehold.co/600x400/blue/white?text=Government+Representatives"
        }
    ];
    
    return (
        <motion.section
            className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full -ml-12 -mb-12" />
            
            {/* Grid pattern background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Workshop Gallery</h2>
                        <div className="flex justify-center gap-2 items-center mb-6">
                            <div className="w-12 h-1 bg-blue-600"></div>
                            <div className="w-4 h-4 rounded-full bg-red-600"></div>
                            <div className="w-12 h-1 bg-blue-600"></div>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Highlights from the MSC Kenya Climate Workshop
                        </p>
                    </motion.div>
                    
                    {/* Gallery grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className="relative h-64 w-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = item.fallback;
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                    <div className="flex items-center mt-2 text-gray-600">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm">{item.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <a 
                            href="https://drive.google.com/drive/folders/1MVpzj_Gcv222uDsksM_ApMknoW3xFmgz?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Complete Photo Gallery
                        </a>
                    </motion.div>
                </div>
            </div>
            
            {/* Lightbox modal */}
            {selectedImage && (
                <motion.div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="h-96 w-full">
                            <img 
                                src={selectedImage.image} 
                                alt={selectedImage.title} 
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = selectedImage.fallback;
                                }}
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-600">
                                <span className="font-medium">Location:</span> {selectedImage.location}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.section>
    );
} 