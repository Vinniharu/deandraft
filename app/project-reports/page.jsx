"use client";

import { useEffect } from "react";
import ProjectReportsHero from "@/app/components/Publications/ProjectReportsHero";
import ProjectReportsList from "@/app/components/Publications/ProjectReportsList";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";

export default function ProjectReportsPage() {
  // Preload PDF thumbnails for better performance
  useEffect(() => {
    const pdfList = [
      "https://drive.google.com/file/d/1h6pEkn08ZebUV8eYaMFnwmVuGF6yzP-R/view?usp=drive_link",
      "https://drive.google.com/file/d/1RsZWRoTj5neNWaykSbNZPtwcHj9y8sor/view?usp=drive_link",
      "https://drive.google.com/file/d/1fRFKI_PbklTbd3H9UjM2ygOiCUK_hBC0/view?usp=drive_link",
      "https://drive.google.com/file/d/1PqepUF8Odnegts3dhtWc6LkB35_x0tVU/view?usp=drive_link",
      "https://drive.google.com/file/d/1btN1PnJmf_wOW9h5j8KbjjymKb_DmkNA/view?usp=drive_link"
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
          <ProjectReportsHero />
          <ProjectReportsList />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 