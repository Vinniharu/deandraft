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
      "/openlgas/1.jpg",
      "/openlgas/2.jpeg",
      "/openlgas/3.jpeg",
      "/openlgas/4.jpeg",
      "/openlgas/5.jpeg",
      "/openlgas/6.jpeg"
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
