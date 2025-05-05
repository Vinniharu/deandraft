"use client";

import React from 'react';
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import HeroSection from '@/app/components/Programs/Education/Transforming/HeroSection';
import MainContent from '@/app/components/Programs/Education/Transforming/MainSection';
import GallerySection from '@/app/components/Programs/Education/Transforming/GallerySection';

export default function TransformingEdu() {
    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="min-h-screen">
                    {/* Hero Section */}
                    <HeroSection />
                    
                    {/* Main Content */}
                    <MainContent />
                    
                    {/* Gallery Section */}
                    <GallerySection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}

