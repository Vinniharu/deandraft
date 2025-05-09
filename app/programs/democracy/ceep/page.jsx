"use client";

import { useEffect } from "react";
import PageTransition from "../../../components/PageTransition";
import ErrorBoundary from "../../../components/ErrorBoundary";
import JoinUs from "../../../components/JoinUs";

// Import all components from the index file
import {
  CEEPHero,
  AboutCEEP,
  ProjectObjectives,
  ImpactReport,
  PhotoGallery,
  CallToAction
} from "../../../components/Programs/Democracy/CEEP";

export default function Ceep() {
  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = [
      "/ceep/mainbg.jpeg",
      "/ceep/about1.jpg",
      "/ceep/about2.jpg",
      "/ceep/objectives.jpg",
      "/ceep/gallery1.jpg",
      "/ceep/gallery2.jpg",
      "/ceep/gallery3.jpg",
      "/ceep/gallery4.jpg",
      "/ceep/gallery5.jpg",
      "/ceep/gallery6.jpg",
    ];
    
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <CEEPHero />
          <AboutCEEP />
          <ProjectObjectives />
          <ImpactReport />
          <PhotoGallery />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}

