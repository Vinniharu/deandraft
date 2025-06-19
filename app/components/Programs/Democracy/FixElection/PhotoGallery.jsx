"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      src: "/fixelection/gallery1.jpeg",
      alt: "Youth assembly participants in group discussion"
    },
    {
      src: "/fixelection/gallery2.jpeg",
      alt: "Panel session at the Youth Assembly"
    },
    {
      src: "/fixelection/gallery3.jpeg",
      alt: "Workshop activity with assembly participants"
    },
    {
      src: "/fixelection/gallery4.jpeg",
      alt: "Participants networking at the assembly"
    },
    {
      src: "/fixelection/gallery5.jpeg",
      alt: "Keynote presentation at the assembly"
    },
    {
      src: "/fixelection/gallery6.jpeg",
      alt: "Participants engaging in hands-on activity"
    }
  ];

  // Animation variants
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
    
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
    
    switch (e.key) {
      case 'Escape':
        setSelectedImage(null);
        break;
      case 'ArrowLeft':
        const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setSelectedImage(galleryImages[prevIndex]);
        break;
      case 'ArrowRight':
        const nextIndex = (currentIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[nextIndex]);
        break;
      default:
        break;
    }
  };

  // Effect to add/remove keyboard listener
  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <section className="py-16 md:py-24 bg-white relative">
        {/* Background decorations */}
        <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[80px]"></div>
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">Photo Gallery</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Glimpses from the #FixElectionYouthAssembly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg"
            >
              View More Photos
            </Link>
          </motion.div>
        </div>
      </section>

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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 