"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  BudgetWatchHero, 
  AboutBudgetWatch, 
  Objectives,
  PreviousWork,
  CallToAction 
} from "@/app/components/Programs/Governance/BudgetWatch";

export default function BudgetWatch() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/budgetwatch/hero.jpg",
      "/budgetwatch/about.jpg",
      "/budgetwatch/previous.jpg"
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
          <BudgetWatchHero />
          <AboutBudgetWatch />
          <Objectives />
          <PreviousWork />
          <CallToAction />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
