"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('all');
    
    // Gallery items with location information
    const galleryItems = [
        {
            id: 1,
            title: "SDG Workshop in Lagos",
            category: "workshop",
            location: "Lagos State",
            image: "/national-action/gallery/lagos-workshop.jpg",
            fallback: "https://placehold.co/600x400/blue/white?text=Lagos+Workshop"
        },
        {
            id: 2,
            title: "Youth Rally in Abuja",
            category: "rally",
            location: "Federal Capital Territory",
            image: "/national-action/gallery/abuja-rally.jpg",
            fallback: "https://placehold.co/600x400/red/white?text=Abuja+Rally"
        },
        {
            id: 3,
            title: "Tree Planting in Kano",
            category: "action",
            location: "Kano State",
            image: "/national-action/gallery/kano-tree-planting.jpg",
            fallback: "https://placehold.co/600x400/green/white?text=Kano+Tree+Planting"
        },
        {
            id: 4,
            title: "School Campaign in Rivers",
            category: "school",
            location: "Rivers State",
            image: "/national-action/gallery/rivers-school.jpg",
            fallback: "https://placehold.co/600x400/blue/white?text=Rivers+School"
        },
        {
            id: 5,
            title: "Climate Forum in Enugu",
            category: "workshop",
            location: "Enugu State",
            image: "/national-action/gallery/enugu-forum.jpg",
            fallback: "https://placehold.co/600x400/red/white?text=Enugu+Forum"
        },
        {
            id: 6,
            title: "Beach Cleanup in Cross River",
            category: "action",
            location: "Cross River State",
            image: "/national-action/gallery/cross-river-cleanup.jpg",
            fallback: "https://placehold.co/600x400/blue/white?text=Cross+River+Cleanup"
        }
    ];
    
    const filters = [
        { id: 'all', label: 'All Activities' },
        { id: 'workshop', label: 'Workshops' },
        { id: 'rally', label: 'Rallies' },
        { id: 'action', label: 'Action Projects' },
        { id: 'school', label: 'School Programs' }
    ];
    
    const filteredItems = activeFilter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeFilter);
    
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Action Gallery</h2>
                        <div className="flex justify-center gap-2 items-center mb-6">
                            <div className="w-12 h-1 bg-blue-600"></div>
                            <div className="w-4 h-4 rounded-full bg-red-600"></div>
                            <div className="w-12 h-1 bg-blue-600"></div>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore how National Action Day is making an impact across Nigeria
                        </p>
                    </motion.div>
                    
                    {/* Filter buttons */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3 mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </motion.div>
                    
                    {/* Gallery grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
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
                                    <div className="mt-2">
                                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                            item.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                                            item.category === 'rally' ? 'bg-red-100 text-red-800' :
                                            item.category === 'action' ? 'bg-green-100 text-green-800' :
                                            'bg-purple-100 text-purple-800'
                                        }`}>
                                            {filters.find(f => f.id === item.category)?.label || 'Activity'}
                                        </span>
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
                        <p className="text-gray-600 italic">
                            "These images represent just a small sample of the nationwide impact of National Action Day."
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 