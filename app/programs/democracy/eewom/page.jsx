"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  EEWOMHero, 
  AboutEEWOM, 
  Objectives, 
  Implementation, 
  ImpactReport, 
  Recommendations,
  CallToAction 
} from "@/app/components/Programs/Democracy/EEWOM";

export default function EEWOMPage() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/eewom/hero.jpg",
      "/eewom/about1.jpg",
      "/eewom/about2.jpg",
      "/eewom/objectives.jpg",
      "/eewom/implementation.jpg",
      "/eewom/impact.jpg"
    ];
    
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <EEWOMHero />
          <AboutEEWOM />
          <Objectives />
          <Implementation />
          <ImpactReport />
          <Recommendations />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
