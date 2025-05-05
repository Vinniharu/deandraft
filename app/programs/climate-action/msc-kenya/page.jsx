"use client";

import { useEffect } from 'react';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import HeroSection from '@/app/components/Programs/ClimateAction/MSCKenya/HeroSection';
import ChallengeSection from '@/app/components/Programs/ClimateAction/MSCKenya/ChallengeSection';
import WorkshopDetailsSection from '@/app/components/Programs/ClimateAction/MSCKenya/WorkshopDetailsSection';
import OutcomeSection from '@/app/components/Programs/ClimateAction/MSCKenya/OutcomeSection';
import KeyDataSection from '@/app/components/Programs/ClimateAction/MSCKenya/KeyDataSection';
import GallerySection from '@/app/components/Programs/ClimateAction/MSCKenya/GallerySection';
import ConclusionSection from '@/app/components/Programs/ClimateAction/MSCKenya/ConclusionSection';

export default function MSCKenya() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="overflow-hidden">
                    {/* Hero Section */}
                    <HeroSection />
                    
                    {/* Challenge Section */}
                    <ChallengeSection />
                    
                    {/* Workshop Details Section */}
                    <WorkshopDetailsSection />
                    
                    {/* Outcome Section */}
                    <OutcomeSection />
                    
                    {/* Key Data Section */}
                    <KeyDataSection />
                    
                    {/* Gallery Section */}
                    <GallerySection />
                    
                    {/* Conclusion Section */}
                    <ConclusionSection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
