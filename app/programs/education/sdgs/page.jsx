import { Metadata } from "next";
import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import SDGsHero from "@/app/components/Programs/Education/SDGs/SDGsHero";
import SDGsMain from "@/app/components/Programs/Education/SDGs/SDGsMain";
import SDGsObjectives from "@/app/components/Programs/Education/SDGs/SDGsObjectives";
import SDGsImpact from "@/app/components/Programs/Education/SDGs/SDGsImpact";
import SDGsGallery from "@/app/components/Programs/Education/SDGs/SDGsGallery";
import JoinUs from "@/app/components/JoinUs";

export const metadata = {
  title: "SDGs Activation Program | Dean Foundation",
  description: "Taking Sustainable Development Goals to classrooms across Nigeria through education and community engagement.",
  keywords: ["SDGs", "sustainable development goals", "education", "World's Largest Lesson", "Dean Foundation", "Nigeria"],
};

export default function SDGsActivationPage() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <SDGsHero />
          <SDGsMain />
          {/* <SDGsObjectives /> */}
          <SDGsImpact />
          <SDGsGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
