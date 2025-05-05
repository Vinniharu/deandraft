"use client";

import { useEffect } from 'react';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import HeroSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/HeroSection';
import IntroSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/IntroSection';
import GoalsSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/GoalsSection';
import ImpactSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/ImpactSection';
import BenefitsSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/BenefitsSection';
import WhyItMattersSection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/WhyItMattersSection';
import CTASection from '@/app/components/Programs/ClimateAction/DemocracyAccelerator/CTASection';

export default function DemocracyAccelerator() {
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
                    
                    {/* Goals Section */}
                    <GoalsSection />
                    
                    {/* Impact Section */}
                    <ImpactSection />
                    
                    {/* Fellows Benefits Section */}
                    <BenefitsSection />
                    
                    {/* Why It Matters Section */}
                    <WhyItMattersSection />
                    
                    {/* CTA Section */}
                    <CTASection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
