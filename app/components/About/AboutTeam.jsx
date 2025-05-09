"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { teamMembers } from "../../../worker";

export default function AboutTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);
  
  // Animation hooks
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside
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
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedMember]);

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      id="team"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={headerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Meet Our Team
          </h2>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-[var(--dean-blue)] mx-auto mb-4 sm:mb-6"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-700 px-4">
            Our dedicated team brings diverse expertise and passion to drive our
            mission forward across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => openModal(member)}
            >
              <div className="aspect-w-1 aspect-h-1 relative h-48 sm:h-56 md:h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--dean-blue)] font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
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
                      src={selectedMember.image}
                      alt={selectedMember.name}
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
                      {selectedMember.name}
                    </h2>
                    <p className="text-[var(--dean-blue)] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                      {selectedMember.title}
                    </p>
                    <div className="h-0.5 w-10 sm:w-12 bg-[var(--dean-red)] mb-3 sm:mb-4"></div>
                    <div className="prose prose-sm md:prose text-gray-700 overflow-y-auto text-sm sm:text-base">
                      <p>{selectedMember.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
