"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  StudentFellowshipHero, 
  AboutStudentFellowship, 
  FellowshipProcess,
  FellowshipImpact,
  CallToAction 
} from "@/app/components/Programs/Governance/StudentFellowship";

export default function StudentFellowship() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/studentfellowship/hero.jpg",
      "/studentfellowship/about.jpg",
      "/studentfellowship/process.jpg",
      "/studentfellowship/impact.jpg"
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
          <AboutStudentFellowship />
          <FellowshipProcess />
          <FellowshipImpact />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
