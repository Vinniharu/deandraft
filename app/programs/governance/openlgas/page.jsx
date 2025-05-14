"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  OpenLGAsHero, 
  AboutOpenLGAs, 
  Achievements, 
  GallerySection,
  CallToAction 
} from "@/app/components/Programs/Governance/OpenLGAs";

export default function OpenLGAsPage() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/openlgas/hero.JPG",
      "/openlgas/about.JPEG",
      "/openlgas/townhall1.JPEG",
      "/openlgas/townhall2.JPEG",
      "/openlgas/award.JPEG",
      "/openlgas/capacity.JPEG"
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
          <OpenLGAsHero />
          <AboutOpenLGAs />
          <Achievements />
          <GallerySection />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
