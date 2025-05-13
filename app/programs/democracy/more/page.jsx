"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  MoreHero, 
  CAAVS, 
  PBP, 
  CallToAction 
} from "@/app/components/Programs/Democracy/More";

export default function MorePage() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/more/hero.jpg",
      "/more/abaji.jpg",
      "/more/kwali.jpg",
      "/more/dobi.jpg",
      "/more/pbp.jpg"
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
          <MoreHero />
          <CAAVS />
          <PBP />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}

