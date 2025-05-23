"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhotoGallery() {
  const photos = [
    { src: "/ceep/gallery1.jpg", alt: "CEEP Campaign 1" },
    { src: "/ceep/gallery2.jpg", alt: "CEEP Campaign 2" },
    { src: "/ceep/gallery3.jpg", alt: "CEEP Campaign 3" },
    { src: "/ceep/gallery4.jpg", alt: "CEEP Campaign 4" },
    { src: "/ceep/gallery5.jpg", alt: "CEEP Campaign 5" },
    { src: "/ceep/gallery6.jpeg", alt: "CEEP Campaign 6" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Images from our advocacy campaigns, community engagements, and training programs across Nigeria
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={photo.src} 
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 