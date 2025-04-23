"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import HomeHero from './components/Home/HomeHero';
import OurStorySection from './components/Home/OurStorySection';
import ImpactSection from './components/Home/ImpactSection';
import KeyHighlightsSection from './components/Home/KeyHighlightsSection';
import VisionMissionSection from './components/Home/VisionMissionSection';
import TeamPartnersSection from './components/Home/TeamPartnersSection';
import GetInvolvedSection from './components/Home/GetInvolvedSection';
import HomeHero from './components/HomeHero';
import OurStorySection from './components/OurStorySection';
import ImpactSection from './components/ImpactSection';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import VisionMissionSection from './components/VisionMissionSection';
import TeamPartnersSection from './components/TeamPartnersSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import SpecialInterventionProjects from './components/SpecialInterventionProjects';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const pathname = usePathname();
  
  return (
    <motion.main
      key={pathname || "home"}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <HomeHero />
      <OurStorySection />
      <SpecialInterventionProjects/>
      <KeyHighlightsSection />
      <ImpactSection />
      <VisionMissionSection />
      <TeamPartnersSection />
      <GetInvolvedSection />
    </motion.main>
  );
}
