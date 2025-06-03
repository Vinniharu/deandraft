"use client";

import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import PageTransition from "@/app/components/PageTransition";
import LakeChadGallery from "@/app/components/Programs/ClimateAction/LakeChad/LakeChadGallery";
import LakeChadHero from "@/app/components/Programs/ClimateAction/LakeChad/LakeChadHero";
import LakeChadImpact from "@/app/components/Programs/ClimateAction/LakeChad/LakeChadImpact";
import LakeChadMain from "@/app/components/Programs/ClimateAction/LakeChad/LakeChadMain";
import LakeChadObjectives from "@/app/components/Programs/ClimateAction/LakeChad/LakeChadObjectives";

export default function LakeChadPage() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <LakeChadHero />
          <LakeChadMain />
          <LakeChadObjectives />
          <LakeChadImpact />
          <LakeChadGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 