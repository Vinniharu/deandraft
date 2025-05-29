"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ExternalLink from "@/app/components/ExternalLink";

export default function SDGsGallery() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

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
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Gallery images data
  const galleryImages = [
    {
      src: "/sdgs/1.JPG",
      alt: "SDGs Workshop Session",
    },
    {
      src: "/sdgs/2.JPG",
      alt: "Community Outreach Program",
    },
    {
      src: "/sdgs/3.JPG",
      alt: "Student Projects Exhibition",
    },
    {
      src: "/sdgs/4.JPG",
      alt: "Teacher Training Session",
    },
    {
      src: "/sdgs/5.jpg",
      alt: "SDGs Summit",
    },
    {
      src: "/sdgs/6.jpg",
      alt: "School Implementation",
    },
  ];

  // Handle keyboard events for modal
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  // Effect to add/remove keyboard listener
  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore scrolling when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
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
                Program Gallery
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Explore our transformative SDGs education experiences across
                Nigeria
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
                  onClick={() => setSelectedImage(image)}
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
            <ExternalLink
              href="https://drive.google.com/drive/folders/1t3o9WSqKpwHoSAooFw8aFLauGXMUXWq0"
               className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto my-20 block"
            >
                View More Photos
            </ExternalLink>
          </div>
        </div>
      </motion.section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={modalVariants}
              className="relative max-w-7xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  priority
                  quality={95}
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
