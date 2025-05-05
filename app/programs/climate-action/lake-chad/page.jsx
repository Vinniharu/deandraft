"use client";

import ErrorBoundary from '@/app/components/ErrorBoundary';
import PageTransition from '@/app/components/PageTransition';
import CTASection from '@/app/components/Programs/ClimateAction/LakeChad/CTASection';
import HeroSection from '@/app/components/Programs/ClimateAction/LakeChad/HeroSection';
import ImpactSection from '@/app/components/Programs/ClimateAction/LakeChad/ImpactSection';
import IntroSection from '@/app/components/Programs/ClimateAction/LakeChad/IntroSection';
import ObjectivesSection from '@/app/components/Programs/ClimateAction/LakeChad/ObjectivesSection';
import OpportunitiesSection from '@/app/components/Programs/ClimateAction/LakeChad/OpportunitiesSection';
import { useEffect } from 'react';
export default function LakeChadFellowship() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <HeroSection />
          <IntroSection />
          <ObjectivesSection />
          <ImpactSection />
          <OpportunitiesSection />
          <CTASection />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 