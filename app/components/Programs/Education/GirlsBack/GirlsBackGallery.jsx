"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function GirlsBackGallery() {
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
      src: "/girlback/1.jpg",
      alt: "Girls Back to School Program - Image 1",
      caption: "Community Outreach",
      location: "Lagos",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
    },
    {
      src: "/girlback/2.jpg",
      alt: "Girls Back to School Program - Image 2",
      caption: "Mentorship Session",
      location: "Lagos",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
    },
    {
      src: "/girlback/3.jpg",
      alt: "Girls Back to School Program - Image 3",
      caption: "School Support",
      location: "Abuja",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
    },
    {
      src: "/girlback/4.jpg",
      alt: "Girls Back to School Program - Image 4",
      caption: "Parent Engagement",
      location: "Abuja",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
    },
    {
      src: "/girlback/5.jpg",
      alt: "Girls Back to School Program - Image 5",
      caption: "Educational Support",
      location: "Lagos",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
    },
    {
      src: "/girlback/6.jpg",
      alt: "Girls Back to School Program - Image 6",
      caption: "Community Workshop",
      location: "Abuja",
      galleryLink: "https://drive.google.com/drive/folders/1tbmJjnzXgpU9ItY82gdPXNc_arR_8Tzd",
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
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={headerVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Program Gallery
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Explore our transformative work in empowering girls through education
            </p>
          </motion.div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <a
                href={image.galleryLink}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 transition-opacity duration-300"></div>

                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
