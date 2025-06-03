"use client";

import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import PageTransition from "@/app/components/PageTransition";
import AcceleratorGallery from "@/app/components/Programs/ClimateAction/DemocracyAccelerator/AcceleratorGallery";
import AcceleratorHero from "@/app/components/Programs/ClimateAction/DemocracyAccelerator/AcceleratorHero";
import AcceleratorImpact from "@/app/components/Programs/ClimateAction/DemocracyAccelerator/AcceleratorImpact";
import AcceleratorMain from "@/app/components/Programs/ClimateAction/DemocracyAccelerator/AcceleratorMain";
import AcceleratorObjectives from "@/app/components/Programs/ClimateAction/DemocracyAccelerator/AcceleratorObjectives";


export default function AcceleratorPage() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <AcceleratorHero />
          <AcceleratorMain />
          <AcceleratorObjectives />
          <AcceleratorImpact />
          <AcceleratorGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 