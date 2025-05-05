"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import PageTransition from '@/app/components/PageTransition';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import HeroSection from '@/app/components/Programs/ClimateAction/NationalAction/HeroSection';
import IntroSection from '@/app/components/Programs/ClimateAction/NationalAction/IntroSection';
import HowItWorksSection from '@/app/components/Programs/ClimateAction/NationalAction/HowItWorksSection';
import HighlightsSection from '@/app/components/Programs/ClimateAction/NationalAction/HighlightsSection';
import ImpactSection from '@/app/components/Programs/ClimateAction/NationalAction/ImpactSection';
import CTASection from '@/app/components/Programs/ClimateAction/NationalAction/CTASection';

export default function NationalActionPage() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ErrorBoundary>
            <Head>
                <title>National Action Day on SDGs | DEAN Initiative</title>
                <meta 
                    name="description" 
                    content="The National Action Day on SDGs is a bold civic movement championed by DEAN Initiative to drive grassroots awareness and action around the United Nations Sustainable Development Goals across Nigeria." 
                />
                <meta 
                    name="keywords" 
                    content="SDGs, National Action Day, youth empowerment, sustainable development, civic action, Nigeria, DEAN Initiative" 
                />
            </Head>
            <PageTransition>
                <main className="overflow-hidden">
                    <HeroSection />
                    <IntroSection />
                    <HowItWorksSection />
                    <HighlightsSection />
                    <ImpactSection />
                    <CTASection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
