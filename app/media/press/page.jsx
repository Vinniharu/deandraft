"use client"

import pressReleases from "@/pressReleases";
import { useState } from 'react';
import Link from 'next/link';

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export default function Press() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Get unique categories
    const allCategories = ['All', ...new Set(pressReleases.flatMap(pr => pr.categories))];
    
    // Filter press releases based on selected category
    const filteredReleases = selectedCategory === 'All' 
        ? pressReleases 
        : pressReleases.filter(pr => pr.categories.includes(selectedCategory));

    return (
        <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-800 to-red-600 text-white h-1/2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Press Releases</h1>
                        <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                            Stay updated with our latest news and announcements about our initiatives, 
                            achievements, and contributions to the community.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                                ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredReleases.map((pressRelease) => (
                        <article
                            key={pressRelease.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <Link href={`/media/press/${pressRelease.id}`} className="block p-6 h-full">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pressRelease.categories.map((category) => (
                                        <span
                                            key={category}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                                    {pressRelease.title}
                                </h2>
                                
                                <div className="text-sm text-gray-600 mb-4">
                                    <time>{formatDate(pressRelease.date)}</time>
                                    {pressRelease.author && (
                                        <span> • By {pressRelease.author}</span>
                                    )}
                                </div>
                                
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {pressRelease.summary}
                                </p>
                                
                                <span className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                                    Read Full Article
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
}
