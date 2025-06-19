"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function LakeChadGallery() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      src: "/lakechad/1.jpg",
      alt: "Youth leaders discussing climate solutions",
      caption: "Fellows collaborating on climate initiatives",
      location: "N'Djamena, Chad",
    },
    {
      src: "/lakechad/2.jpg",
      alt: "Community engagement session",
      caption: "Community-based adaptation planning",
      location: "Maiduguri, Nigeria",
    },
    {
      src: "/lakechad/3.jpg",
      alt: "Climate data collection",
      caption: "Field research and data collection",
      location: "Lake Chad Basin",
    },
    {
      src: "/lakechad/4.jpg",
      alt: "Youth advocacy workshop",
      caption: "Capacity building workshop",
      location: "Maroua, Cameroon",
    },
    {
      src: "/lakechad/5.jpg",
      alt: "Climate resilience project",
      caption: "Implementation of local solutions",
      location: "Diffa, Niger",
    },
    {
      src: "/lakechad/6.jpg",
      alt: "Cross-border collaboration",
      caption: "Regional youth network meeting",
      location: "Lake Chad Region",
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
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
              Witness the impact of our youth-led climate initiatives across the
              Lake Chad Basin
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
          <Link
            href="/gallery"
            className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto mt-20 block"
          >
            View More Photos
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
