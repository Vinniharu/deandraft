"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function MSCKenyaGallery() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const galleryImages = [
    {
      src: "/msc/img1.jpg",
      alt: "Experts from MicroSave Consulting",
      caption: "MSC Experts",
      location: "DEAN Initiative HQ",
    },
    {
      src: "/msc/img2.jpg",
      alt: "Climate Finance Workshop",
      caption: "Workshop Session",
      location: "Abuja",
    },
    {
      src: "/msc/img3.jpg",
      alt: "Farmer Focus Group",
      caption: "Farmer Discussion",
      location: "Kaduna State",
    },
    {
      src: "/msc/img4.jpg",
      alt: "Youth Climate Activists",
      caption: "Youth Engagement",
      location: "Workshop Session",
    },
    {
      src: "/msc/img5.jpg",
      alt: "Post-Harvest Loss Discussion",
      caption: "Technical Session",
      location: "Nasarawa State",
    },
    {
      src: "/msc/img6.jpg",
      alt: "Local Government Representatives",
      caption: "Policy Discussion",
      location: "Panel Session",
    },
  ];

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
              Workshop Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Capturing moments of knowledge exchange and collaboration
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                variants={galleryItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-w-16 aspect-h-9">
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