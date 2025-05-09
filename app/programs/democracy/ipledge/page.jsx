"use client";

import { useEffect } from "react";
import PageTransition from "../../../components/PageTransition";
import ErrorBoundary from "../../../components/ErrorBoundary";
import JoinUs from "../../../components/JoinUs";

// Import all components from the index file
import {
  IPledgeHero,
  AboutProject,
  ProjectObjectives,
  ImpactReport,
  PhotoGallery,
  CallToAction
} from "../../../components/Programs/Democracy/iPledge";

export default function IPledge() {
  // Load image assets and preload them
  useEffect(() => {
    const preloadImages = [
      "/ipledge/mainbg.jpg",
      "/ipledge/vote1.jpg",
      "/ipledge/vote2.jpg",
      "/ipledge/objectives.jpg",
      "/ipledge/gallery1.jpg",
      "/ipledge/gallery2.jpg",
      "/ipledge/gallery3.jpg",
      "/ipledge/gallery4.jpg",
      "/ipledge/gallery5.jpg",
      "/ipledge/gallery6.jpg",
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
          <IPledgeHero />
          <AboutProject />
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
