"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import JoinUs from "@/app/components/JoinUs";
import { 
  BudgetWatchHero, 
  BudgetWatchMain,
  BudgetWatchObjectives,
  BudgetWatchImpact,
  GallerySection,
} from "@/app/components/Programs/Governance/BudgetWatch";

export default function BudgetWatch() {
  // Preload images for better performance
  useEffect(() => {
    const imageList = [
      "/budgetwatch/hero.jpg",
      "/budgetwatch/about.jpg",
      "/budgetwatch/1.jpg",
      "/budgetwatch/2.jpg",
      "/budgetwatch/3.jpg",
      "/budgetwatch/4.jpg",
      "/budgetwatch/5.jpg",
      "/budgetwatch/6.jpg"
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
          <BudgetWatchMain />
          <BudgetWatchObjectives />
          <BudgetWatchImpact />
          <GallerySection />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
