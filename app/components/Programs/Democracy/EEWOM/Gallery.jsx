"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ExternalLink from "@/app/components/ExternalLink";

export default function Gallery() {
  const galleryImages = [
    {
      src: "/eewom/1.jpg",
      alt: "EEWOM Workshop Session",
      caption: "Interactive workshop session with community leaders",
    },
    {
      src: "/eewom/2.jpg",
      alt: "Community Engagement",
      caption: "Engaging with local women's groups",
    },
    {
      src: "/eewom/3.jpg",
      alt: "Training Program",
      caption: "Capacity building session for participants",
    },
    {
      src: "/eewom/4.jpg",
      alt: "Group Discussion",
      caption: "Collaborative planning and strategy session",
    },
    {
      src: "/eewom/5.jpg",
      alt: "Field Activity",
      caption: "Community outreach and engagement",
    },
    {
      src: "/eewom/6.jpg",
      alt: "Project Presentation",
      caption: "Sharing project outcomes with stakeholders",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--dean-red)]/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-4">
            Project Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our visual journey through the EEWOM project, showcasing key
            moments, activities, and the impact we've made in empowering women
            in local governance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center mt-12"
        >
          <ExternalLink
            href="https://drive.google.com/drive/folders/1cZ4KRlHhj1ZzhsoopxTmJPhFrthXDplw"
            className="inline-block px-8 py-3 bg-[var(--dean-red)] text-white rounded-full font-medium hover:bg-[var(--dean-red)]/90 transition duration-300"
          >
            View More Photos
          </ExternalLink>
        </motion.div>
      </div>
    </section>
  );
}
