"use client";

import { useEffect } from 'react';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import PageTransition from '@/app/components/PageTransition';
import MSCKenyaHero from '@/app/components/Programs/ClimateAction/MSCKenya/MSCKenyaHero';
import MSCKenyaMain from '@/app/components/Programs/ClimateAction/MSCKenya/MSCKenyaMain';
import MSCKenyaObjectives from '@/app/components/Programs/ClimateAction/MSCKenya/MSCKenyaObjectives';
import MSCKenyaImpact from '@/app/components/Programs/ClimateAction/MSCKenya/MSCKenyaImpact';
import MSCKenyaGallery from '@/app/components/Programs/ClimateAction/MSCKenya/MSCKenyaGallery';
import JoinUs from "@/app/components/JoinUs";

export default function MSCKenyaPage() {
    // Metadata for the page
    const metadata = {
        title: "MSC Kenya Climate Workshop | DEAN Initiative",
        description: "The MSC Kenya Climate Workshop is a collaborative initiative to empower Nigerian farmers and youth with climate finance knowledge and post-harvest loss solutions.",
        keywords: "climate finance, MSC Kenya, workshop, post-harvest loss, youth empowerment, climate action, DEAN Initiative"
    };

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="min-h-screen">
                    <MSCKenyaHero />
                    <MSCKenyaMain />
                    <MSCKenyaObjectives />
                    <MSCKenyaImpact />
                    <MSCKenyaGallery />
                    <JoinUs />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
