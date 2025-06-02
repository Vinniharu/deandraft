import PageTransition from "@/app/components/PageTransition";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import GirlsBackHero from "@/app/components/Programs/Education/GirlsBack/GirlsBackHero";
import GirlsBackMain from "@/app/components/Programs/Education/GirlsBack/GirlsBackMain";
import GirlsBackObjectives from "@/app/components/Programs/Education/GirlsBack/GirlsBackObjectives";
import GirlsBackImpact from "@/app/components/Programs/Education/GirlsBack/GirlsBackImpact";
import GirlsBackGallery from "@/app/components/Programs/Education/GirlsBack/GirlsBackGallery";
import JoinUs from "@/app/components/JoinUs";

export const metadata = {
  title: "Girls Back to School Program | Dean Foundation",
  description: "Empowering girls through education and eliminating barriers to their continuous learning in vulnerable communities.",
  keywords: ["girls education", "back to school", "education empowers", "Dean Foundation", "girl child"],
};

export default function GirlsBackToSchoolPage() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <GirlsBackHero />
          <GirlsBackMain />
          <GirlsBackObjectives />
          <GirlsBackImpact />
          <GirlsBackGallery />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
} 