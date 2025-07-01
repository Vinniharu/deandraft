"use client";

import { useEffect } from "react";
import AnnualReportsHero from "@/app/components/Publications/AnnualReportsHero";
import AnnualReportsList from "@/app/components/Publications/AnnualReportsList";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";

export default function AnnualReportsPage() {
  // Preload PDF thumbnails for better performance
  useEffect(() => {
    const pdfList = [
      "https://drive.google.com/file/d/1nanJ0Hdi_tdArLytwUygcLZV0NgXcWJU/view?usp=drive_link",
      "https://drive.google.com/file/d/1OxMBhY3ZeJ5vSJdAKFmQ9rWy3aDiRZNi/view?usp=drive_link"
    ];
    
    pdfList.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <AnnualReportsHero />
          <AnnualReportsList />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 