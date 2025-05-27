"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import JoinUs from "@/app/components/JoinUs";

export default function FinancialReport() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/financial/bg.jpg')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dean-blue)]/50 to-[var(--dean-red)]/50" />
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--dean-red)]/30 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Financial Report – 2021
              </motion.h1>
              <motion.h2
                variants={fadeIn}
                className="text-xl md:text-2xl font-semibold text-white/90 mb-8"
              >
                Transparency. Accountability. Impact.
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                At DEAN Initiative, we believe that financial transparency is
                fundamental to trust, sustainability, and progress. Our 2021
                Financial Report highlights the resources entrusted to us and how
                they were efficiently utilized to implement impactful programs
                across Nigeria.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 relative"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <motion.div variants={fadeIn} className="mb-16">
              <p className="text-gray-600 text-lg leading-relaxed">
                Despite a challenging year marked by insecurity, climate
                disruptions, and logistical hurdles, DEAN Initiative remained
                resolute in delivering value through community-based
                interventions focused on education, hygiene, climate action,
                gender advocacy, and youth empowerment.
              </p>
            </motion.div>

            {/* Financial Highlights */}
            <motion.div variants={fadeIn} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                2021 Financial Highlights
              </h3>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Funding Sources
                </h4>
                <p className="text-gray-600 mb-8">
                  Our programs in 2021 were made possible through the generous
                  support of local and international partners, individual
                  donors, and collaborative grants.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Expenditure Overview
                </h4>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] flex-shrink-0 mt-1"></span>
                    <span className="ml-4">
                      Program Implementation: Majority of our funding (over 80%)
                      was directed toward grassroots project execution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] flex-shrink-0 mt-1"></span>
                    <span className="ml-4">
                      Administrative & Operational Costs: Maintained below 15%,
                      ensuring that donor support went directly into impact.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] flex-shrink-0 mt-1"></span>
                    <span className="ml-4">
                      Capacity Building: Invested in volunteer training, digital
                      tools, and local chapter empowerment.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Key Investment Areas */}
            <motion.div variants={fadeIn} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Key Investment Areas
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="block font-semibold text-gray-800">
                    Climate Education Campaigns
                  </span>
                </li>
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="block font-semibold text-gray-800">
                    Girls' Back-to-School Project
                  </span>
                  <span className="text-sm text-gray-600">
                    (in partnership with UNESCO)
                  </span>
                </li>
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="block font-semibold text-gray-800">
                    Hygiene and Sanitation Awareness
                  </span>
                  <span className="text-sm text-gray-600">
                    in 200 Lagos schools
                  </span>
                </li>
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="block font-semibold text-gray-800">
                    Economic Skill Training
                  </span>
                  <span className="text-sm text-gray-600">
                    for Low-Income Women
                  </span>
                </li>
                <li className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <span className="block font-semibold text-gray-800">
                    Digital Skill Development
                  </span>
                  <span className="text-sm text-gray-600">for Youth</span>
                </li>
              </ul>
            </motion.div>

            {/* Financial Stewardship */}
            <motion.div variants={fadeIn} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Financial Stewardship
              </h3>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm">
                <p className="text-gray-600 leading-relaxed">
                  All funds received were tracked and accounted for using
                  rigorous internal controls and third-party auditing processes
                  to ensure compliance and accountability. Our approach to
                  financial stewardship aligns with global nonprofit standards
                  and reflects our commitment to good governance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <JoinUs />
    </main>
  );
}
