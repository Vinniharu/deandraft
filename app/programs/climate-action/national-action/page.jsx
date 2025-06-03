"use client";

import { useEffect } from 'react';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import PageTransition from '@/app/components/PageTransition';
import NationalActionHero from '@/app/components/Programs/ClimateAction/NationalAction/NationalActionHero';
import NationalActionMain from '@/app/components/Programs/ClimateAction/NationalAction/NationalActionMain';
import NationalActionObjectives from '@/app/components/Programs/ClimateAction/NationalAction/NationalActionObjectives';
import NationalActionImpact from '@/app/components/Programs/ClimateAction/NationalAction/NationalActionImpact';
import NationalActionGallery from '@/app/components/Programs/ClimateAction/NationalAction/NationalActionGallery';
import JoinUs from "@/app/components/JoinUs";

export default function NationalActionPage() {
    // Metadata for the page
    const metadata = {
        title: "National Action Day on SDGs | DEAN Initiative",
        description: "The National Action Day on SDGs is a bold civic movement championed by DEAN Initiative to drive grassroots awareness and action around the United Nations Sustainable Development Goals across Nigeria.",
        keywords: "SDGs, National Action Day, youth empowerment, sustainable development, civic action, Nigeria, DEAN Initiative"
    };

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="min-h-screen">
                    <NationalActionHero />
                    <NationalActionMain />
                    <NationalActionObjectives />
                    <NationalActionImpact />
                    <NationalActionGallery />
                    <JoinUs />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
