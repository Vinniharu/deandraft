"use client";

import { useEffect, useLayoutEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import SDGsHero from "@/app/components/Programs/Education/SDGs/SDGsHero";
import SDGsMain from "@/app/components/Programs/Education/SDGs/SDGsMain";
import SDGsObjectives from "@/app/components/Programs/Education/SDGs/SDGsObjectives";
import SDGsImpact from "@/app/components/Programs/Education/SDGs/SDGsImpact";
import SDGsGallery from "@/app/components/Programs/Education/SDGs/SDGsGallery";
import JoinUs from "@/app/components/JoinUs";

// Create a safe version of useLayoutEffect that falls back to useEffect on the server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function SDGsActivationPage() {
  useIsomorphicLayoutEffect(() => {
    // Use requestAnimationFrame to ensure the scroll happens after hydration
    const raf = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <SDGsHero />
          <SDGsMain />
          <SDGsObjectives />
          <SDGsImpact />
          <SDGsGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
