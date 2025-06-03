"use client";

import ExternalLink from "@/app/components/ExternalLink";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function IPledgeGallery() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      src: "/ipledge/1.jpg",
      alt: "Voter education session",
      caption: "Community voter education workshop",
      location: "Lagos, Nigeria",
    },
    {
      src: "/ipledge/2.jpg",
      alt: "Youth engagement program",
      caption: "Youth leaders discussing electoral participation",
      location: "Abuja, Nigeria",
    },
    {
      src: "/ipledge/3.jpg",
      alt: "Community outreach",
      caption: "Grassroots mobilization campaign",
      location: "Kano, Nigeria",
    },
    {
      src: "/ipledge/4.jpg",
      alt: "Stakeholder meeting",
      caption: "Collaboration with electoral officials",
      location: "Port Harcourt, Nigeria",
    },
    {
      src: "/ipledge/5.jpg",
      alt: "Training workshop",
      caption: "Capacity building for community advocates",
      location: "Enugu, Nigeria",
    },
    {
      src: "/ipledge/6.jpg",
      alt: "Public awareness",
      caption: "Street campaign for voter awareness",
      location: "Kaduna, Nigeria",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={headerVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Witness the impact of our voter education and democratic engagement initiatives across Nigeria
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <ExternalLink
            href="https://drive.google.com/drive/folders/1ZT9fJq0-9kwcJIomv--uz5kpwvrdq-eW?usp=drive_link"
            className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto my-20 block"
          >
            View More Photos
          </ExternalLink>
        </div>
      </div>
    </motion.section>
  );
} 