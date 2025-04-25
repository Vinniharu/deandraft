"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";
import PartnerCarousel from "./PartnerCarousel";
import { teamMembers } from "../../../worker";

export default function TeamPartnersSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Create an array of expanded states for all team members
  const [expandedStates, setExpandedStates] = useState(Array(teamMembers.length).fill(false));

  // Function to toggle a specific team member's expanded state
  const toggleExpanded = (index) => {
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  };

  const partners_1 = [
    "/partners/p1.png",
    "/partners/p2.png",
    "/partners/p3.jpeg",
    "/partners/p4.jpg",
    "/partners/p5.png",
    "/partners/p6.jpeg",
    "/partners/p7.jpeg",
    "/partners/p8.png",
    "/partners/p9.png",
    "/partners/p10.png",
    "/partners/p11.jpeg",
  ];

  const partners_2 = [
    "/partners/p12.webp",
    "/partners/p13.png",
    "/partners/p14.jpeg",
    "/partners/p15.jpeg",
    "/partners/p16.png",
    "/partners/p17.jpg",
    "/partners/p18.jpg",
    "/partners/p19.jpg",
    "/partners/p20.jpg",
    "/partners/p21.png",
    "/partners/p22.png",
  ];

  const partners_3 = [
    "/partners/p23.jpeg",
    "/partners/p24.png",
    "/partners/p25.png",
    "/partners/p26.png",
    "/partners/p27.png",
    "/partners/p28.png",
    "/partners/p29.jpeg",
    "/partners/p30.jpeg",
    "/partners/p31.png",
    "/partners/p32.png",
  ];

  return (
    <section
      ref={sectionRef}
      id="team-partners"
      className="relative py-20 overflow-hidden bg-gray-50"
    >
      {/* Subtle background pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <RevealOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <div className="h-1 w-24 bg-[var(--dean-blue)] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Our dedicated team brings diverse expertise and passion to drive
              our mission forward.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.slice(0, 4).map((member, index) => {
            return (
              <RevealOnScroll key={index} animation="fadeUp" delay={0.1 * index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all">
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-72"
                    />
                    <div className="absolute bg-gradient-to-t from-[var(--dean-blue)]/70 to-transparent from-[1%] inset-0 flex items-end p-6">
                      <div className="w-full">
                        <h3 className="text-xl font-bold text-[var(--dean-blue)] bg-white px-4 py-2 rounded-lg rounded-b-none w-fit">
                          {member.name}
                        </h3>
                        <p className="text-[var(--dean-red)] font-medium bg-white px-4 py-2 rounded-lg rounded-tl-none w-full">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {expandedStates[index]
                        ? member.description
                        : member.description.length > 100
                        ? member.description.substring(0, 100) + "..."
                        : member.description}
                    </p>
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      {expandedStates[index] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Partners Section */}
        <RevealOnScroll animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <div className="h-1 w-24 bg-[var(--dean-red)] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              We collaborate with organizations that share our vision for
              sustainable development and social impact.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-8">
          <PartnerCarousel partners={partners_1} direction="ltr" />
          <PartnerCarousel partners={partners_2} direction="rtl" />
          <PartnerCarousel partners={partners_3} direction="ltr" />
        </div>
      </div>
    </section>
  );
}
