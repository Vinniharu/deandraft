"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { YabmTeamMembers } from "../../../worker";

export default function AboutYabm() {
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);

  // Animation hooks
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
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

  return (
    <motion.section
      id="youth-advisory-board"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b bg-[var(--dean-blue)]/20 relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background decorations */}
      <div className="absolute -right-32 top-20 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[100px]"></div>
      <div className="absolute -left-32 bottom-20 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className=" mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 sm:mb-16"
            variants={headerVariants}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
              Meet the Youth Advisory Board
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mt-3 sm:mt-4"></div>
            <p className="text-[var(--dean-blue)] font-semibold mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base">
              Our Youth Advisory Board consists of exceptional young leaders who
              provide strategic guidance and innovative ideas to advance our
              mission
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
            {YabmTeamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                onClick={() => openModal(member)}
                custom={index}
              >
                <div className="aspect-w-1 aspect-h-1 relative h-48 sm:h-56 md:h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6" onClick={() => openModal(member)}>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--dean-blue)] font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.title}
                  </p>
                  {/* <p className="text-gray-600 line-clamp-3 text-sm sm:text-base">
                    {member.description}
                  </p>
                  <button
                    className="mt-3 sm:mt-4 text-[var(--dean-red)] hover:text-[var(--dean-red)]/80 font-medium flex items-center gap-1 text-sm sm:text-base"
                    onClick={() => openModal(member)}
                  >
                    Click on the image to read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-4 sm:w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={handleOutsideClick}
              onKeyDown={handleKeyDown}
              tabIndex={-1}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <div
                ref={modalRef}
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
