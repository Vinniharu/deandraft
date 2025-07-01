"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projectReports = [
  {
    id: "hygiene-education",
    title: "Youth Health Access Survey Report",
    path: "https://drive.google.com/file/d/1h6pEkn08ZebUV8eYaMFnwmVuGF6yzP-R/view?usp=drive_link",
  },
  {
    id: "impact-2024",
    title: "Youth Health Insurance Awareness Survey Report",
    path: "https://drive.google.com/file/d/1RsZWRoTj5neNWaykSbNZPtwcHj9y8sor/view?usp=drive_link",
  },
  {
    id: "activities",
    title: "National SDGs Summit in the sustainable Development Goals",
    path: "https://drive.google.com/file/d/1fRFKI_PbklTbd3H9UjM2ygOiCUK_hBC0/view?usp=drive_link",
  },
  {
    id: "eew-mag",
    title: "SDGsStories Project",
    path: "https://drive.google.com/file/d/1PqepUF8Odnegts3dhtWc6LkB35_x0tVU/view?usp=drive_link",
  },
  {
    id: "election-doc",
    title: "2nd Annual SDGsStories Summit",
    path: "https://drive.google.com/file/d/1btN1PnJmf_wOW9h5j8KbjjymKb_DmkNA/view?usp=drive_link",
  },
  {
    id: "dean-notes",
    title: "The Missing Link: How Nigeria's Health Policies is Failing Unemployed and Vulnerable Youth",
    path: "https://drive.google.com/file/d/1DPBMdKCveideBjPKo1FTpO7XJ5lcoiJR/view?usp=drive_link",
  },
  {
    id: "research-brief",
    title: "The impact of Covid 19 on education in Nigeria",
    path: "https://drive.google.com/file/d/1npxtmSyWMgi6o0ZBrY3h3OIc1An1OhQ7/view?usp=drive_link",
  },
  {
    id: "sdg-report",
    title: "SDG REPORT",
    path: "https://drive.google.com/file/d/1EyrjwGeeiwUPEyhgFly-TQ0alFm49yUZ/view?usp=drive_link",
  },
  {
    id: "sdgs-brochure",
    title: "EEW magazine 1",
    path: "https://drive.google.com/file/d/1Hvit5-RI3jOCyed5efFBb3sIKzTuaCEG/view?usp=drive_link",
  },
  {
    id: "dean-project",
    title: "ACTIVITIES REPORT ON GBV, HYGIENE EDUCATION AND CLIMATE CHANGE",
    path: "https://drive.google.com/file/d/1EFWN9MdDvVOMjoc99LvZVTaop1Y3wbp-/view?usp=drive_link",
  },
  {
    id: "survey",
    title: "Leading Change in a Difficult Time",
    path: "https://drive.google.com/file/d/1n_OTijckXSbafwiIzYtsR-kRVmTlWDNe/view?usp=drive_link",
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

export default function ProjectReportsList() {
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
    <section id="project-reports-list" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projectReports.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 