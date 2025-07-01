"use client";

import { useEffect } from "react";
import PublicationsHero from "@/app/components/Publications/PublicationsHero";
import PublicationsMenu from "@/app/components/Publications/PublicationsMenu";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";

export default function PublicationsPage() {
  // Preload both types of reports for better performance
  useEffect(() => {
    const pdfList = [
      "https://drive.google.com/file/d/1nanJ0Hdi_tdArLytwUygcLZV0NgXcWJU/view?usp=drive_link",
      "https://drive.google.com/file/d/1OxMBhY3ZeJ5vSJdAKFmQ9rWy3aDiRZNi/view?usp=drive_link",
      "https://drive.google.com/file/d/1h6pEkn08ZebUV8eYaMFnwmVuGF6yzP-R/view?usp=drive_link",
      "https://drive.google.com/file/d/1RsZWRoTj5neNWaykSbNZPtwcHj9y8sor/view?usp=drive_link"
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
          <PublicationsMenu />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
