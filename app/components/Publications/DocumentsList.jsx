"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const documents = [
  {
    id: "hygiene-education",
    title: "ACCESS TO HYGIENE EDUCATION",
    path: "https://drive.google.com/file/d/1h6pEkn08ZebUV8eYaMFnwmVuGF6yzP-R/view?usp=drive_link",
  },
  {
    id: "impact-2024",
    title: "2024 Annual Impact Report",
    path: "https://drive.google.com/file/d/1RsZWRoTj5neNWaykSbNZPtwcHj9y8sor/view?usp=drive_link",
  },
  {
    id: "activities",
    title: "Activities Report",
    path: "https://drive.google.com/file/d/1fRFKI_PbklTbd3H9UjM2ygOiCUK_hBC0/view?usp=drive_link",
  },
  {
    id: "eew-mag",
    title: "EEW Magazine-1",
    path: "https://drive.google.com/file/d/1PqepUF8Odnegts3dhtWc6LkB35_x0tVU/view?usp=drive_link",
  },
  {
    id: "election-doc",
    title: "ELECTION PROJECT DOCUMENTARY (1)",
    path: "https://drive.google.com/file/d/1btN1PnJmf_wOW9h5j8KbjjymKb_DmkNA/view?usp=drive_link",
  },
  {
    id: "dean-notes",
    title: "NOTES 4 DEAN I.",
    path: "https://drive.google.com/file/d/1DPBMdKCveideBjPKo1FTpO7XJ5lcoiJR/view?usp=drive_link",
  },
  {
    id: "research-brief",
    title: "Research Brief I",
    path: "https://drive.google.com/file/d/1npxtmSyWMgi6o0ZBrY3h3OIc1An1OhQ7/view?usp=drive_link",
  },
  {
    id: "sdg-report",
    title: "SDG REPORT",
    path: "https://drive.google.com/file/d/1EyrjwGeeiwUPEyhgFly-TQ0alFm49yUZ/view?usp=drive_link",
  },
  {
    id: "sdgs-brochure",
    title: "SDGS BROCHURE new",
    path: "https://drive.google.com/file/d/1Hvit5-RI3jOCyed5efFBb3sIKzTuaCEG/view?usp=drive_link",
  },
  {
    id: "annual-2021",
    title: "2021 Anual Report",
    path: "https://drive.google.com/file/d/1nanJ0Hdi_tdArLytwUygcLZV0NgXcWJU/view?usp=drive_link",
  },
  {
    id: "dean-project",
    title: "DEAN PROJECT",
    path: "https://drive.google.com/file/d/1EFWN9MdDvVOMjoc99LvZVTaop1Y3wbp-/view?usp=drive_link",
  },
  {
    id: "sdgs-summit",
    title: "SDGsStory Summit Report",
    path: "https://drive.google.com/file/d/1UEvSUxKzhvnDahm3XrAUnoluj5aFBbv2/view?usp=drive_link",
  },
  {
    id: "survey",
    title: "Survey Report",
    path: "https://drive.google.com/file/d/1n_OTijckXSbafwiIzYtsR-kRVmTlWDNe/view?usp=drive_link",
  },
  {
    id: "youth-health",
    title: "SURVEY REPORT_ Youth Health Financing (1) (1)",
    path: "https://drive.google.com/file/d/1OxMBhY3ZeJ5vSJdAKFmQ9rWy3aDiRZNi/view?usp=drive_link",
  },
];

const DocumentCard = ({ doc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
      onClick={() => window.open(doc.path, '_blank')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {doc.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">Click to open PDF</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function DocumentsList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="publications-list" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {documents.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
