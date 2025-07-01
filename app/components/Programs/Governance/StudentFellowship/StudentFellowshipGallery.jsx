"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ExternalLink from "@/app/components/ExternalLink";
import Link from "next/link";

export default function StudentFellowshipGallery() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
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

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Gallery images data
  const galleryImages = [
    {
      src: "/studentfellowship/s1.jpg",
      alt: "Fellowship Training Session",
    },
    {
      src: "/studentfellowship/s2.jpg",
      alt: "Community Engagement",
    },
    {
      src: "/studentfellowship/s3.jpg",
      alt: "Budget Analysis Workshop",
    },
    {
      src: "/studentfellowship/s4.jpg",
      alt: "Advocacy Meeting",
    },
    {
      src: "/studentfellowship/s5.jpg",
      alt: "Stakeholder Engagement",
    },
    {
      src: "/studentfellowship/s6.jpg",
      alt: "Fellows Presentation",
    },
  ];

  return (
    <motion.section
      id="gallery"
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={headerVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Fellowship Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Explore our transformative fellowship experiences and community
              engagements
            </p>
          </motion.div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                variants={galleryItemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                    }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            href="/gallery"
            className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto my-20 block"
          >
            View All Images
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
