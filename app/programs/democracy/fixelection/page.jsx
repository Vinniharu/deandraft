"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  FixElectionHero, 
  AboutFixElection, 
  Objectives, 
  YouthParticipation, 
  ImpactReport, 
  PhotoGallery,
  CallToAction 
} from "@/app/components/Programs/Democracy/FixElection";

export default function FixElectionPage() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/fixelection/hero.jpg",
      "/fixelection/about1.jpg",
      "/fixelection/about2.jpg",
      "/fixelection/objectives.jpeg",
      "/fixelection/impact.jpg",
      "/fixelection/gallery1.jpg",
      "/fixelection/gallery2.jpg",
      "/fixelection/gallery3.jpg",
      "/fixelection/gallery4.jpeg",
      "/fixelection/gallery5.jpeg",
      "/fixelection/gallery6.jpeg"
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
          <FixElectionHero />
          <AboutFixElection />
          <Objectives />
          <YouthParticipation />
          <ImpactReport />
          <PhotoGallery />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}