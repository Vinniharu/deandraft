"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, scale: 0.9 },
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
      {/* Background decorations */}
      <div className="absolute -left-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -right-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--dean-blue)] mb-3">
            Gallery
          </h2>
          <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Showcasing our SDGs Activation activities across schools and
            communities in Nigeria.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={imageVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative aspect-w-4 aspect-h-3 h-64">
                <Image
                  src={`/sdgs/${index}.jpg`}
                  alt={`Gallery Image ${index}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
