"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const annualReports = [
  {
    id: "annual-2021",
    title: "2021 Annual Report",
    path: "https://drive.google.com/file/d/1nanJ0Hdi_tdArLytwUygcLZV0NgXcWJU/view?usp=drive_link",
  },
  {
    id: "youth-health",
    title: "DEAN INITIATIVE ANNUAL REPORT FOR THE YEAR 2021",
    path: "https://drive.google.com/file/d/1OxMBhY3ZeJ5vSJdAKFmQ9rWy3aDiRZNi/view?usp=drive_link",
  },
];

const DocumentCard = ({ doc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Convert Google Drive view URL to embed URL
  const getEmbedUrl = (url) => {
    const fileId = url.match(/\/d\/(.*?)\/view/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

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
      <div className="w-full aspect-[16/9] relative">
        <iframe 
          src={getEmbedUrl(doc.path)}
          className="w-full h-full absolute top-0 left-0"
          allow="autoplay"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default function AnnualReportsList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="annual-reports-list" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {annualReports.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 