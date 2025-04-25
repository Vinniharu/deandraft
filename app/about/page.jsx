import AboutHero from "../components/About/AboutHero";
import AboutMain from "../components/About/AboutMain";
import MissionVision from "../components/About/MissionVision";
import PageTransition from "../components/PageTransition";
import ErrorBoundary from "../components/ErrorBoundary";
import AboutTeam from "../components/About/AboutTeam";
import AboutYabm from "../components/About/AboutYabm";
import AboutBoard from "../components/About/AboutBoard";
import JoinUs from "../components/JoinUs";

export default function About() {
  return (
    <ErrorBoundary>
      <PageTransition>
        <main className="min-h-screen">
          <AboutHero />
          <AboutMain />
          <MissionVision />
          <AboutTeam />
          <AboutYabm />
          <AboutBoard />
          <JoinUs />
        </main>
      </PageTransition>
    </ErrorBoundary>
  );
}
