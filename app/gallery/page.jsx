"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery categories with their respective images - ALL FOLDERS FROM PUBLIC
  const galleryCategories = [
    {
      id: "hero",
      title: "Everything DEAN",
      description: "Inspiring moments and key highlights from our initiatives",
      thumbnail: "/hero/hero-1.jpg",
      color: "red",
      images: [
        { src: "/hero/img1.jpg", alt: "Initiative Highlight 1" },
        { src: "/hero/img2.JPG", alt: "Initiative Highlight 2" },
        { src: "/hero/hero-1.jpg", alt: "Hero Image 1" },
        { src: "/hero/hero-2.jpg", alt: "Hero Image 2" },
        { src: "/hero/hero-3.jpg", alt: "Hero Image 3" },
        { src: "/hero/hero-4.jpeg", alt: "Hero Image 4" },
        { src: "/hero/hero-5.jpeg", alt: "Hero Image 5" },
        { src: "/hero/hero-2.jpeg", alt: "Hero Image Alternative" },
      ],
    },
    {
      id: "studentfellowship",
      title: "Student Fellowship",
      description: "Empowering young leaders through governance education",
      thumbnail: "/studentfellowship/hero.jpg",
      color: "red",
      images: [
        { src: "/studentfellowship/s1.jpg", alt: "Student Fellowship Hero" },
        { src: "/studentfellowship/s2.jpeg", alt: "About Student Fellowship" },
        { src: "/studentfellowship/s3.jpg", alt: "Student Fellowship Impact" },
        { src: "/studentfellowship/s4.jpg", alt: "Fellowship Process" },
        { src: "/studentfellowship/s5.jpg", alt: "Fellowship Activity 1" },
        { src: "/studentfellowship/s6.jpg", alt: "Fellowship Activity 2" },
        { src: "/studentfellowship/s7.jpeg", alt: "Fellowship Activity 3" },
        { src: "/studentfellowship/s8.jpg", alt: "Fellowship Activity 4" },
        { src: "/studentfellowship/s9.jpg", alt: "Fellowship Activity 5" },
        { src: "/studentfellowship/s10.jpg", alt: "Fellowship Activity 6" },
      ],
    },
    {
      id: "budgetwatch",
      title: "#BudgetWatch",
      description: "Promoting fiscal transparency and accountability",
      thumbnail: "/budgetwatch/hero.jpg",
      color: "blue",
      images: [
        { src: "/budgetwatch/hero.jpg", alt: "Budget Watch Hero" },
        { src: "/budgetwatch/about.jpg", alt: "About Budget Watch" },
        {
          src: "/budgetwatch/previous.jpg",
          alt: "Previous Budget Watch Activities",
        },
        { src: "/budgetwatch/1.jpg", alt: "Budget Watch Activity 1" },
        { src: "/budgetwatch/2.jpg", alt: "Budget Watch Activity 2" },
        { src: "/budgetwatch/3.jpg", alt: "Budget Watch Activity 3" },
        { src: "/budgetwatch/4.jpg", alt: "Budget Watch Activity 4" },
        { src: "/budgetwatch/5.jpg", alt: "Budget Watch Activity 5" },
        { src: "/budgetwatch/6.jpg", alt: "Budget Watch Activity 6" },
      ],
    },
    {
      id: "ipledge",
      title: "#iPledge2vote",
      description:
        "Strengthening democratic participation and electoral integrity",
      thumbnail: "/ipledge/mainbg.jpg",
      color: "red",
      images: [
        { src: "/ipledge/mainbg.jpg", alt: "iPledge Main Background" },
        { src: "/ipledge/objectives.jpg", alt: "iPledge Objectives" },
        { src: "/ipledge/vote1.jpg", alt: "Voting Awareness 1" },
        { src: "/ipledge/vote2.jpg", alt: "Voting Awareness 2" },
        { src: "/ipledge/1.jpg", alt: "iPledge Activity 1" },
        { src: "/ipledge/2.jpg", alt: "iPledge Activity 2" },
        { src: "/ipledge/3.jpg", alt: "iPledge Activity 3" },
        { src: "/ipledge/4.jpg", alt: "iPledge Activity 4" },
        { src: "/ipledge/5.jpg", alt: "iPledge Activity 5" },
        { src: "/ipledge/6.jpg", alt: "iPledge Activity 6" },
      ],
    },
    {
      id: "national",
      title: "National Action Day",
      description: "National SDG activation and youth engagement",
      thumbnail: "/national/mainbg.jpg",
      color: "blue",
      images: [
        { src: "/national/mainbg.jpg", alt: "National Action Main Background" },
        { src: "/national/1.jpeg", alt: "National Action Activity 1" },
        { src: "/national/2.jpeg", alt: "National Action Activity 2" },
        { src: "/national/3.jpeg", alt: "National Action Activity 3" },
        { src: "/national/4.jpeg", alt: "National Action Activity 4" },
        { src: "/national/5.jpeg", alt: "National Action Activity 5" },
        { src: "/national/6.jpeg", alt: "National Action Activity 6" },
      ],
    },
    {
      id: "openlgas",
      title: "#OpenLGAS",
      description: "Enhancing transparency in local government administration",
      thumbnail: "/openlgas/hero.jpg",
      color: "red",
      images: [
        { src: "/openlgas/hero.jpg", alt: "Open LGAs Hero" },
        { src: "/openlgas/about.jpeg", alt: "About Open LGAs" },
        { src: "/openlgas/1.jpg", alt: "Open LGAs Activity 1" },
        { src: "/openlgas/2.jpg", alt: "Open LGAs Activity 2" },
        { src: "/openlgas/3.jpeg", alt: "Open LGAs Activity 3" },
        { src: "/openlgas/4.jpeg", alt: "Open LGAs Activity 4" },
        { src: "/openlgas/5.jpeg", alt: "Open LGAs Activity 5" },
        { src: "/openlgas/6.jpeg", alt: "Open LGAs Activity 6" },
      ],
    },
    {
      id: "transforming",
      title: "Transforming Education",
      description: "Innovative approaches to educational transformation",
      thumbnail: "/transforming/mainbg.JPG",
      color: "blue",
      images: [
        { src: "/transforming/mainbg.JPG", alt: "Transforming Education Main" },
        { src: "/transforming/img1.JPG", alt: "Education Transformation 1" },
        { src: "/transforming/img2.JPG", alt: "Education Transformation 2" },
        { src: "/transforming/t1.JPG", alt: "Training Session 1" },
        { src: "/transforming/t2.JPG", alt: "Training Session 2" },
        { src: "/transforming/t3.JPG", alt: "Training Session 3" },
        { src: "/transforming/t4.JPG", alt: "Training Session 4" },
        { src: "/transforming/t5.JPG", alt: "Training Session 5" },
        { src: "/transforming/t6.JPG", alt: "Training Session 6" },
        { src: "/transforming/a1.jpg", alt: "Activity 1" },
        { src: "/transforming/a2.jpg", alt: "Activity 2" },
        { src: "/transforming/a3.jpg", alt: "Activity 3" },
        { src: "/transforming/a4.jpg", alt: "Activity 4" },
        { src: "/transforming/a5.jpg", alt: "Activity 5" },
        { src: "/transforming/a6.jpg", alt: "Activity 6" },
      ],
    },
    {
      id: "sdgs",
      title: "SDGs Activation",
      description: "Integrating Sustainable Development Goals in education",
      thumbnail: "/sdgs/hero-bg.JPG",
      color: "red",
      images: [
        { src: "/sdgs/hero-bg.jpg", alt: "SDGs Hero Background" },
        { src: "/sdgs/main-image.jpg", alt: "SDGs Main Image" },
        { src: "/sdgs/summit.jpg", alt: "SDGs Summit" },
        { src: "/sdgs/s1.jpg", alt: "SDGs Activity 1" },
        { src: "/sdgs/s2.jpg", alt: "SDGs Activity 2" },
        { src: "/sdgs/s3.jpg", alt: "SDGs Activity 3" },
        { src: "/sdgs/s4.jpg", alt: "SDGs Activity 4" },
        { src: "/sdgs/s5.jpg", alt: "SDGs Activity 5" },
        { src: "/sdgs/s6.jpg", alt: "SDGs Activity 6" },
        { src: "/sdgs/s7.jpg", alt: "SDGs Activity 7" },
        { src: "/sdgs/s8.jpg", alt: "SDGs Activity 8" },
        { src: "/sdgs/s9.jpg", alt: "SDGs Activity 9" },
        { src: "/sdgs/s10.jpg", alt: "SDGs Activity 10" },
      ],
    },
    {
      id: "nextgen",
      title: "NextGen Teachers",
      description: "Empowering teachers for future-ready education",
      thumbnail: "/nextgen/nextgen-bg.jpg",
      color: "blue",
      images: [
        { src: "/nextgen/nextgen-bg.jpg", alt: "NextGen Background" },
        { src: "/nextgen/a.jpg", alt: "NextGen Activity" },
        { src: "/nextgen/apd1.jpg", alt: "Professional Development 1" },
        { src: "/nextgen/apd2.jpg", alt: "Professional Development 2" },
        { src: "/nextgen/hrc.jpg", alt: "Human Resource Capacity" },
        { src: "/nextgen/ld1.jpg", alt: "Leadership Development 1" },
        { src: "/nextgen/ld2.jpg", alt: "Leadership Development 2" },
      ],
    },
    {
      id: "msc",
      title: "CYLCR",
      description: "Building collaborative partnerships for impact",
      thumbnail: "/msc/bg.jpg",
      color: "red",
      images: [
        { src: "/msc/bg.jpg", alt: "MSC Background" },
        { src: "/msc/img1.jpg", alt: "Coalition Meeting 1" },
        { src: "/msc/img2.jpg", alt: "Coalition Meeting 2" },
        { src: "/msc/img3.jpg", alt: "Coalition Meeting 3" },
        { src: "/msc/img4.jpg", alt: "Coalition Meeting 4" },
        { src: "/msc/img5.jpg", alt: "Coalition Meeting 5" },
        { src: "/msc/img6.jpg", alt: "Coalition Meeting 6" },
      ],
    },
    {
      id: "lakechad",
      title: "Lake Chad Fellowship",
      description:
        "Climate resilience and peace-building in the Lake Chad Basin",
      thumbnail: "/lakechad/mainbg.jpg",
      color: "blue",
      images: [
        { src: "/lakechad/mainbg.jpg", alt: "Lake Chad Main Background" },
        { src: "/lakechad/nextbg.jpg", alt: "Lake Chad Next Background" },
        { src: "/lakechad/1.jpg", alt: "Lake Chad Activity 1" },
        { src: "/lakechad/2.jpg", alt: "Lake Chad Activity 2" },
        { src: "/lakechad/3.jpg", alt: "Lake Chad Activity 3" },
        { src: "/lakechad/4.jpg", alt: "Lake Chad Activity 4" },
        { src: "/lakechad/5.jpg", alt: "Lake Chad Activity 5" },
        { src: "/lakechad/6.jpg", alt: "Lake Chad Activity 6" },
      ],
    },
    {
      id: "girlback",
      title: "Girls Back to School",
      description: "Supporting girls' education and empowerment",
      thumbnail: "/girlback/main-image.jpg",
      color: "red",
      images: [
        { src: "/girlback/main-image.jpg", alt: "Girls Back to School Main" },
        { src: "/girlback/1.jpg", alt: "Girls Education 1" },
        { src: "/girlback/2.jpg", alt: "Girls Education 2" },
        { src: "/girlback/3.jpg", alt: "Girls Education 3" },
        { src: "/girlback/4.jpg", alt: "Girls Education 4" },
        { src: "/girlback/5.jpg", alt: "Girls Education 5" },
        { src: "/girlback/6.jpg", alt: "Girls Education 6" },
        { src: "/girlback/7.jpg", alt: "Girls Education 7" },
        { src: "/girlback/8.jpg", alt: "Girls Education 8" },
        { src: "/girlback/9.jpg", alt: "Girls Education 9" },
      ],
    },
    {
      id: "fixelection",
      title: "FixElection Youth Assembly",
      description: "Electoral integrity and democratic governance",
      thumbnail: "/fixelection/hero.jpg",
      color: "blue",
      images: [
        { src: "/fixelection/hero.jpg", alt: "Fix Election Hero" },
        { src: "/fixelection/objectives.jpeg", alt: "Fix Election Objectives" },
        { src: "/fixelection/impact.jpg", alt: "Fix Election Impact" },
        { src: "/fixelection/about1.jpg", alt: "About Fix Election 1" },
        { src: "/fixelection/about2.jpg", alt: "About Fix Election 2" },
        { src: "/fixelection/gallery1.jpg", alt: "Fix Election Gallery 1" },
        { src: "/fixelection/gallery2.jpg", alt: "Fix Election Gallery 2" },
        { src: "/fixelection/gallery3.jpg", alt: "Fix Election Gallery 3" },
        { src: "/fixelection/gallery4.jpeg", alt: "Fix Election Gallery 4" },
        { src: "/fixelection/gallery5.jpeg", alt: "Fix Election Gallery 5" },
        { src: "/fixelection/gallery6.jpeg", alt: "Fix Election Gallery 6" },
      ],
    },
    {
      id: "eewom",
      title: "EEWOM",
      description: "Election monitoring and civic engagement",
      thumbnail: "/eewom/hero.jpg",
      color: "red",
      images: [
        { src: "/eewom/hero.jpg", alt: "EEWOM Hero" },
        { src: "/eewom/objectives.jpg", alt: "EEWOM Objectives" },
        { src: "/eewom/implementation.jpg", alt: "EEWOM Implementation" },
        { src: "/eewom/impact.jpg", alt: "EEWOM Impact" },
        { src: "/eewom/about1.jpg", alt: "About EEWOM 1" },
        { src: "/eewom/about2.jpg", alt: "About EEWOM 2" },
        { src: "/eewom/1.jpg", alt: "EEWOM Activity 1" },
        { src: "/eewom/2.jpg", alt: "EEWOM Activity 2" },
        { src: "/eewom/3.jpg", alt: "EEWOM Activity 3" },
        { src: "/eewom/4.jpg", alt: "EEWOM Activity 4" },
        { src: "/eewom/5.jpg", alt: "EEWOM Activity 5" },
        { src: "/eewom/6.jpg", alt: "EEWOM Activity 6" },
      ],
    },
    {
      id: "ceep",
      title: "CEEP",
      description: "Civic education and engagement programs",
      thumbnail: "/ceep/mainbg.jpg",
      color: "blue",
      images: [
        { src: "/ceep/mainbg.jpg", alt: "CEEP Main Background" },
        { src: "/ceep/objectives.jpg", alt: "CEEP Objectives" },
        { src: "/ceep/about1.jpg", alt: "About CEEP 1" },
        { src: "/ceep/about2.jpg", alt: "About CEEP 2" },
        { src: "/ceep/gallery1.jpg", alt: "CEEP Gallery 1" },
        { src: "/ceep/gallery2.jpg", alt: "CEEP Gallery 2" },
        { src: "/ceep/gallery3.jpg", alt: "CEEP Gallery 3" },
        { src: "/ceep/gallery4.jpg", alt: "CEEP Gallery 4" },
        { src: "/ceep/gallery5.jpg", alt: "CEEP Gallery 5" },
        { src: "/ceep/gallery6.jpeg", alt: "CEEP Gallery 6" },
      ],
    },

    {
      id: "cda",
      title: "CDA",
      description: "Community development and advocacy initiatives",
      thumbnail: "/cda/mainbg.jpg",
      color: "blue",
      images: [
        { src: "/cda/mainbg.jpg", alt: "CDA Main Background" },
        { src: "/cda/1.jpg", alt: "CDA Activity 1" },
        { src: "/cda/2.jpg", alt: "CDA Activity 2" },
        { src: "/cda/3.jpg", alt: "CDA Activity 3" },
      ],
    },
  ];

  const openModal = (category, imageIndex = 0) => {
    setSelectedCategory(category);
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex((prev) =>
        prev === selectedCategory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedCategory.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyPress = (e) => {
    if (isModalOpen) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[url('/hero/hero-1.jpg')] bg-cover bg-top bg-no-repeat">
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-[var(--dean-blue)]/70 to-[var(--dean-red)]/70">
          <div className="container mx-auto px-4 relative z-10 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
                  Gallery
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
              <p className="text-xl text-white leading-relaxed">
                Explore our comprehensive visual journey through all our
                programs, team members, partnerships, and impactful initiatives
                across Africa.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Gallery Categories */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openModal(category)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.thumbnail}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute inset-0 bg-[var(--dean-${category.color})]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{category.title}</h3>
                      <span
                        className={`bg-[var(--dean-${category.color})] text-white px-2 py-1 rounded-full text-xs font-medium`}
                      >
                        {category.images.length}
                      </span>
                    </div>
                    <div className="flex items-center text-xs font-medium">
                      <span>Click to explore</span>
                      <ChevronRightIcon className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`bg-[var(--dean-${selectedCategory.color})] text-white p-6`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedCategory.title}
                    </h2>
                    <p className="text-white/80 mt-1">
                      {selectedImageIndex + 1} of{" "}
                      {selectedCategory.images.length}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Image Display */}
              <div className="relative bg-gray-100">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={selectedCategory.images[selectedImageIndex].src}
                    alt={selectedCategory.images[selectedImageIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                {selectedCategory.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[var(--dean-${selectedCategory.color})] text-white rounded-full hover:bg-opacity-80 transition-all shadow-lg`}
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[var(--dean-${selectedCategory.color})] text-white rounded-full hover:bg-opacity-80 transition-all shadow-lg`}
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedCategory.images.length > 1 && (
                <div className="p-6 pt-0 bg-white">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedCategory.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                          index === selectedImageIndex
                            ? `ring-2 ring-[var(--dean-${selectedCategory.color})] scale-110`
                            : "hover:scale-105 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
