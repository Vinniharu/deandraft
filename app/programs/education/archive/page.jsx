"use client";

import React from 'react';
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import HeroSection from '@/app/components/Programs/Education/Archive/HeroSection';
import IntroSection from '@/app/components/Programs/Education/Archive/IntroSection';
import ProgramsSection from '@/app/components/Programs/Education/Archive/ProgramsSection';
import GetInvolvedSection from '@/app/components/Programs/Education/Archive/GetInvolvedSection';

export default function Archive() {
    return (
        <ErrorBoundary>
            <PageTransition>
                <main className="min-h-screen">
                    <HeroSection />
                    <IntroSection />
                    <ProgramsSection />
                    <GetInvolvedSection />
                </main>
            </PageTransition>
        </ErrorBoundary>
    );
}
