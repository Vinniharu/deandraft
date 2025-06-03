"use client";

import { useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import IPledgeHero from "@/app/components/Programs/Democracy/iPledge/IPledgeHero";
import IPledgeMain from "@/app/components/Programs/Democracy/iPledge/IPledgeMain";
import IPledgeObjectives from "@/app/components/Programs/Democracy/iPledge/IPledgeObjectives";
import IPledgeImpact from "@/app/components/Programs/Democracy/iPledge/IPledgeImpact";
import IPledgeGallery from "@/app/components/Programs/Democracy/iPledge/IPledgeGallery";
import JoinUs from "@/app/components/JoinUs";

export default function IPledgePage() {
  // Metadata for the page
  const metadata = {
    title: "iPledge2Vote | DEAN Initiative",
    description: "The iPledge2Vote Project addresses voting barriers and aims to make elections more accessible and democratic through stakeholder engagement and community-level dialogue.",
    keywords: "iPledge2Vote, voter education, democratic participation, electoral reform, civic engagement, DEAN Initiative"
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <IPledgeHero />
          <IPledgeMain />
          <IPledgeObjectives />
          <IPledgeImpact />
          <IPledgeGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
