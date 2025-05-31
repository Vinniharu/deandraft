"use client";

import { useEffect } from "react";
import PublicationsHero from "@/app/components/Publications/PublicationsHero";
import DocumentsList from "@/app/components/Publications/DocumentsList";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";

export default function PublicationsPage() {
  // Preload PDF thumbnails for better performance
  useEffect(() => {
    const pdfList = [
      "/documents/annual-impact-report-2023.pdf",
      "/documents/education-reform-brief.pdf",
      "/documents/community-development-research.pdf"
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
          <PublicationsHero />
          <DocumentsList />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
