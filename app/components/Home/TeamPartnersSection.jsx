"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { teamMembers } from "../../../worker";
import PartnerCarousel from "./PartnerCarousel";

export default function TeamPartnersSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);

  // First half of partner images (1-16)
  const partnerImagePaths1 = [
    "/partners/1.png",
    "/partners/2.png",
    "/partners/3.jpeg",
    "/partners/4.png",
    "/partners/5.png",
    "/partners/6.png",
    "/partners/7.png",
    "/partners/8.jpeg",
    "/partners/9.jpg",
    "/partners/10.png",
    "/partners/11.jpg",
    "/partners/12.jpg",
    "/partners/13.webp",
    "/partners/14.jpeg",
    "/partners/15.jpg",
    "/partners/16.png",
  ];

  // Second half of partner images (17-32)
  const partnerImagePaths2 = [
    "/partners/17.jpg",
    "/partners/18.jpg",
    "/partners/19.jpg",
    "/partners/20.jpg",
    "/partners/21.jpg",
    "/partners/22.png",
    "/partners/23.png",
    "/partners/24.png",
    "/partners/25.png",
    "/partners/26.png",
    "/partners/27.jpeg",
    "/partners/28.jpeg",
    "/partners/29.jpg",
    "/partners/30.jpg",
    "/partners/31.jpeg",
    "/partners/32.png",
  ];

  // Animation hooks for different sections
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  // Handle opening the modal
  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  // Handle clicks outside the modal to close it
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Handle escape key press to close modal
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  // Add event listener for escape key
  useEffect(() => {
    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedMember]);

  // Debug function
  useEffect(() => {
    console.log("Team members data:", teamMembers);
  }, []);

  return (
    <section className="bg-gray-50 relative overflow-hidden" id="team-partners">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[var(--dean-blue)]/5 blur-[100px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--dean-red)]/5 blur-[100px] translate-y-1/2"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4">
        {/* Team Section */}
        <div className="py-16 lg:py-20">
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Team Header */}
            <motion.div className="text-center mb-12" variants={headerVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block mb-2">
                Our Team
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our dedicated team brings diverse expertise and passion to drive
                positive change in education and climate action
              </p>
            </motion.div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Array.isArray(teamMembers) ? (
                teamMembers.slice(0, 4).map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                    variants={cardVariants}
                    custom={index}
                    whileHover={{ y: -5 }}
                    onClick={() => openModal(member)}
                  >
                    <div className="aspect-w-1 aspect-h-1 relative h-48 sm:h-56 md:h-64">
                      <Image
                        src={member.image || "/images/placeholder-person.jpg"}
                        alt={member.name || member.fullName || "Team Member"}
                        fill
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {member.name || member.fullName || "Team Member"}
                      </h3>
                      <p className="text-[var(--dean-blue)] font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                        {member.title || "Team Member"}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p>Loading team members...</p>
                </div>
              )}
            </div>

            {/* View All Team Button */}
            <div className="text-center mt-10">
              <Link
                href="/about#team"
                className="inline-flex items-center text-white bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] hover:opacity-90 py-3 px-6 rounded-full text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View All Team Members
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="py-16 lg:py-20 border-t border-gray-200">
          <motion.div
            ref={partnersRef}
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Partners Header */}
            <motion.div className="text-center mb-12" variants={headerVariants}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block mb-2">
                Our Partners
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-4 mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We collaborate with leading organizations that share our vision
                for sustainable development and social impact
              </p>
            </motion.div>

            {/* Pass the image paths directly to the PartnerCarousel component */}
            <div className="space-y-8">
              <PartnerCarousel partners={partnerImagePaths1} direction="ltr" />
              <PartnerCarousel partners={partnerImagePaths2} direction="rtl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={handleOutsideClick}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            >
              <motion.div
                ref={modalRef}
                variants={modalVariants}
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Column */}
                  <div className="md:w-2/5 relative h-48 sm:h-56 md:h-auto">
                    <Image
                      src={
                        selectedMember.image || "/images/placeholder-person.jpg"
                      }
                      alt={
                        selectedMember.name ||
                        selectedMember.fullName ||
                        "Team Member"
                      }
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>

                  {/* Content Column */}
                  <div className="md:w-3/5 p-4 sm:p-6 flex flex-col h-full relative overflow-y-auto max-h-[60vh] md:max-h-[70vh]">
                    {/* Close Button */}
                    <button
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
                      onClick={closeModal}
                      aria-label="Close modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
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

                    {/* Member Details */}
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 pr-8">
                      {selectedMember.name ||
                        selectedMember.fullName ||
                        "Team Member"}
                    </h2>
                    <p className="text-[var(--dean-blue)] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                      {selectedMember.title || "Team Member"}
                    </p>
                    <div className="h-0.5 w-10 sm:w-12 bg-[var(--dean-red)] mb-3 sm:mb-4"></div>
                    <div className="prose prose-sm md:prose text-gray-700 overflow-y-auto text-sm sm:text-base">
                      <p>
                        {selectedMember.description ||
                          selectedMember.bio ||
                          "No bio available."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
