"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ExternalLink from "@/app/components/ExternalLink";

export default function CAAVS() {
  const achievements = [
    "Over 180 participants gained crucial insights into election day processes",
    "Fostered a sense of collective responsibility against electoral malpractices",
    "Created a united front against vote buying and selling practices",
    "Contributed to more informed voting practices within the community",
    "Laid groundwork for a more transparent and accountable electoral process",
  ];

  return (
    <section id="caavs" className="py-16 md:py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-[var(--dean-blue)]/5 blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--dean-red)]/5 blur-[80px]"></div>
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent">
              Community Action Against Vote Selling (CAAVS)
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-700"
          >
            <p>
              In preparation for the 2023 Presidential election, DEAN Initiative
              identified a prevalent challenge in the Kilankwa and Kwali Central
              areas of Kwali LGA, as well as Abaji Central in Abaji LGA. The
              issue at hand was the need for community-wide enlightenment on
              election day processes and the imperative to discourage vote
              buying and selling.
            </p>

            <h3 className="text-2xl font-bold text-[var(--dean-blue)] mt-10 mb-4">
              The Challenge
            </h3>
            <p>
              Recognizing the importance of inclusive representation, DEAN
              Initiative organized community town hall meetings, bringing
              together stakeholders such as religious leaders, security
              personnel, INEC officials, CSO representatives, women groups,
              PWDs, youth groups, and other community representatives.
            </p>

            <h3 className="text-2xl font-bold text-[var(--dean-blue)] mt-10 mb-4">
              Our Approach
            </h3>
            <p>
              To address this challenge, DEAN Initiative meticulously planned
              and executed community town hall meetings, strategically designed
              to enlighten citizens on the intricacies of election day processes
              and actively discourage the practice of vote buying and selling.
              The emphasis on inclusive representation ensured a comprehensive
              understanding of the issues at hand and fostered a collaborative
              approach to finding solutions. The town hall meetings were
              attended by a total of over 180 participants, creating a robust
              platform for engagement and dialogue among diverse community
              members.
            </p>

            {/* Image Grid */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <ExternalLink
                href="https://drive.google.com/drive/folders/19wRAWJWMoVT9YvSXRkv5SmUVaPdUGF1E"
              >
                <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="relative">
                    <Image
                      src="/moredemo/abaji.jpg"
                      alt="Abaji Town Hall Meeting"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium text-sm">View Gallery</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">
                      Abaji Town Hall Meeting
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </ExternalLink>

              <ExternalLink
                href="https://drive.google.com/drive/folders/1ALFZ4fjSWrTxEcuV9TK-0wcb6oXTCx07"
              >
                <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="relative">
                    <Image
                      src="/moredemo/kwali.jpg"
                      alt="Kwali outreach"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium text-sm">View Gallery</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">
                      Kwali outreach
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </ExternalLink>
              
              <ExternalLink
                href="https://drive.google.com/drive/folders/1hhVQAHVzQEQ8Fchk4T_GKEAnvtLc0GfH"
              >
                <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="relative">
                    <Image
                      src="/moredemo/caavs.jpg"
                      alt="CAAVS Dobi"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium text-sm">View Gallery</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">
                      CAAVS Dobi
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--dean-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </ExternalLink>
            </div>

            <h3 className="text-2xl font-bold text-[var(--dean-blue)] mt-10 mb-4">
              Impact & Achievements
            </h3>
            <p>
              The impact of DEAN Initiative's intervention was significant, with
              over 180 participants gaining crucial insights into election day
              processes and the detrimental effects of vote buying and selling.
              The inclusive representation of stakeholders fostered a sense of
              collective responsibility, creating a united front against
              malpractices.
            </p>

            <ul className="space-y-3 mt-6">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--dean-blue)] flex items-center justify-center text-white mt-1 mr-3">
                    ✓
                  </span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-6">
              As a result, the town hall meetings successfully contributed to
              fostering informed voting practices within the community, laying
              the groundwork for a more transparent and accountable electoral
              process in the upcoming 2023 Presidential election. The
              initiative's success is not just in the numbers but in the
              tangible impact achieved in empowering citizens with knowledge and
              actively discouraging detrimental voting practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
