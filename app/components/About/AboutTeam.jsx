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
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all cursor-pointer group"
              onClick={() => openModal(member)}
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover object-top w-full h-48 sm:h-56 md:h-64 lg:h-72 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dean-blue)]/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 flex items-end p-3 sm:p-4 md:p-6">
                  <div className="w-full transform transition-transform duration-300 translate-y-0 group-hover:translate-y-[-4px] sm:group-hover:translate-y-[-6px] md:group-hover:translate-y-[-8px]">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 font-medium text-sm sm:text-base">
                      {member.title}
                    </p>
                  </div>
                </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
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
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-[95%] sm:w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                <div className="flex justify-end p-2 sm:p-4">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 sm:p-2 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
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
                </div>
                <div className="p-3 sm:p-4 md:p-6 pt-0 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 overflow-y-auto">
                  <div className="w-full md:w-1/3 max-w-[250px] mx-auto md:mx-0">
                    <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        width={400}
                        height={400}
                        className="object-cover object-top w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 overflow-y-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[var(--dean-blue)] font-semibold text-base sm:text-lg mb-3 sm:mb-4 md:mb-6 border-b border-gray-200 pb-2 sm:pb-4">
                      {selectedMember.title}
                    </p>
                    <div className="text-gray-700 mb-4 sm:mb-6 md:mb-8 max-w-none text-sm sm:text-base overflow-y-auto max-h-[30vh] sm:max-h-[35vh] md:max-h-[50vh] pr-2 custom-scrollbar">
                      <p>{selectedMember.description}</p>
                    </div>

                    {selectedMember.contacts && (
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {Object.entries(selectedMember.contacts).map(
                          ([key, value]) => (
                            <a
                              key={key}
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--dean-blue)] text-white rounded-md hover:bg-[var(--dean-blue)]/80 transition-colors flex items-center gap-1 sm:gap-2 shadow-sm text-xs sm:text-sm md:text-base"
                            >
                              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            </a>
                          )
                        )}
                      </div>
                    )}
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
