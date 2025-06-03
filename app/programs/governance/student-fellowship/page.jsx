"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  StudentFellowshipHero, 
  StudentFellowshipMain,
  StudentFellowshipObjectives,
  StudentFellowshipImpact,
  StudentFellowshipGallery,
} from "@/app/components/Programs/Governance/StudentFellowship";

export default function StudentFellowship() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/studentfellowship/hero.jpg",
      "/studentfellowship/about.jpeg",
      "/studentfellowship/1.jpg",
      "/studentfellowship/2.jpg",
      "/studentfellowship/3.jpg",
      "/studentfellowship/4.jpg",
      "/studentfellowship/5.jpg",
      "/studentfellowship/6.jpg"
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
          <StudentFellowshipHero />
          <StudentFellowshipMain />
          <StudentFellowshipObjectives />
          <StudentFellowshipImpact />
          <StudentFellowshipGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
