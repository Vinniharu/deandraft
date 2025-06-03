"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ExternalLink from "@/app/components/ExternalLink";

export default function PhotoGallery() {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const photos = [
    {
      src: "/ceep/gallery1.jpg",
      alt: "CEEP Campaign 1",
    },
    {
      src: "/ceep/gallery2.jpg",
      alt: "CEEP Campaign 2",
    },
    {
      src: "/ceep/gallery3.jpg",
      alt: "CEEP Campaign 3",
    },
    {
      src: "/ceep/gallery4.jpg",
      alt: "CEEP Campaign 4",
    },
    {
      src: "/ceep/gallery5.jpg",
      alt: "CEEP Campaign 5",
    },
    {
      src: "/ceep/gallery6.jpeg",
      alt: "CEEP Campaign 6",
    },
  ];

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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  // Handle keyboard events for modal
  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    const currentIndex = photos.findIndex(
      (img) => img.src === selectedImage.src
    );

    switch (e.key) {
      case "Escape":
        setSelectedImage(null);
        break;
      case "ArrowLeft":
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setSelectedImage(photos[prevIndex]);
        break;
      case "ArrowRight":
        const nextIndex = (currentIndex + 1) % photos.length;
        setSelectedImage(photos[nextIndex]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div className="text-center mb-16" variants={headingVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Images from our CEEP campaigns and programs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={galleryVariants}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
        <ExternalLink
          href="https://drive.google.com/drive/folders/1I9XWQPTCshVPHLPkED03tXzwE8jxe4ic"
          className="w-fit px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300 m-auto my-20 block"
        >
          View More Photos
        </ExternalLink>
      </div>
    </motion.section>
  );
}
