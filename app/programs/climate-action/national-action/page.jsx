"use client";

import { useEffect } from 'react';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import HeroSection from '@/app/components/Programs/ClimateAction/NationalAction/HeroSection';
import IntroSection from '@/app/components/Programs/ClimateAction/NationalAction/IntroSection';
import HowItWorksSection from '@/app/components/Programs/ClimateAction/NationalAction/HowItWorksSection';
import HighlightsSection from '@/app/components/Programs/ClimateAction/NationalAction/HighlightsSection';
import ImpactSection from '@/app/components/Programs/ClimateAction/NationalAction/ImpactSection';
import GallerySection from '@/app/components/Programs/ClimateAction/NationalAction/GallerySection';
import CTASection from '@/app/components/Programs/ClimateAction/NationalAction/CTASection';

export default function NationalAction() {
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
                    
                    {/* Intro Section */}
                    <IntroSection />
                    
                    {/* How It Works Section */}
                    <HowItWorksSection />
                    
                    {/* Highlights Section */}
                    <HighlightsSection />
                    
                    {/* Impact Section */}
                    <ImpactSection />
                    
                    {/* Gallery Section */}
                    <GallerySection />
                    
                    {/* CTA Section */}
                    <CTASection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
