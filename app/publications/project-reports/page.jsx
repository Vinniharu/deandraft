"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import JoinUs from "@/app/components/JoinUs";

export default function ProjectReports() {
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
          <div className="absolute inset-0 bg-[url('/project/bg.jpg')] bg-cover bg-center bg-no-repeat" />
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
              <motion.div
                variants={fadeIn}
                className="inline-block text-white text-xl font-medium bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
              >
                📂 Project Reports
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Driving Impact Through Purposeful Action
              </motion.h1>
              
              <motion.p
                variants={fadeIn}
                className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              >
                Our project reports provide transparent, detailed insight into how DEAN Initiative is addressing systemic challenges through grassroots-led and youth-powered solutions. Each project is designed with the community in mind and powered by the belief that sustainable change begins at the grassroots.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 relative bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Education Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">🎓 Education for Sustainable Development</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">SDG Class Activation Program</h3>
                  <p className="text-gray-600 mb-4">
                    In 2024, over 5,000 students across Nigeria participated in our SDG Class Activation program, learning about the Sustainable Development Goals through custom-designed toolkits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Reach: 60+ schools
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Educators trained: 250
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Partners: World's Largest Lesson
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Transforming Education Summit – Abuja</h3>
                  <p className="text-gray-600 mb-4">
                    We brought together policymakers, students, and educators to push for curriculum reforms that equip learners with 21st-century problem-solving skills.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Theme: "The Relevance of Equipping Students with Problem Solving Skills in Achieving the SDGs"
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Impact: Informed national curriculum reform advocacy
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Climate Action Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">🌱 Climate Action and Resilience</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Climate Education Campaign</h3>
                  <p className="text-gray-600">
                    We conducted climate education campaigns across 13+ states with a national media reach of over 50 million people, advocating for the inclusion of climate education in school curricula.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Climate Finance and Post-Harvest Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    In partnership with MicroSave Consulting, we trained 100+ youth activists and conducted focus group discussions with 200+ smallholder farmers to develop climate-resilient agricultural strategies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Focus Areas: Abuja, Nasarawa, and Kaduna
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Goal: Bridge the climate finance knowledge gap at the grassroots level
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Democracy Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">🗳️ Democracy and Electoral Integrity</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Election Eyewitness Observation Mission (EEWOM)</h3>
                  <p className="text-gray-600 mb-4">
                    Our Election Eyewitness Community Youth Network, with representation across all 774 LGAs, led civic education and real-time result collation tracking.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Tools: Situation room training, collation trackers, community dialogue sessions
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Youth Impact: Over 500 trained in democratic participation and digital tracking
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">FixElection Youth Assembly</h3>
                  <p className="text-gray-600">
                    A youth-driven national forum that provided platforms for advocacy around electoral reform and civic engagement. Participants co-developed action plans on improving transparency in the electoral process.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Open Governance Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">🏛️ Open Governance and Civic Participation</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Open Government Partnership (OGP) Engagement</h3>
                  <p className="text-gray-600 mb-4">
                    DEAN Initiative facilitated the induction of AMAC as the first local government in Nigeria to join OGP, marking a significant leap in grassroots governance reform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Activities: Peer learning sessions, OGP workshops, student outreach programs
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Citizens' Participatory Budgeting (PBP)</h3>
                  <p className="text-gray-600">
                    We trained young volunteers to track local government budgets and engage in participatory budgeting sessions across FCT area councils.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Health & Hygiene Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">🧼 Health & Hygiene Education</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Hygiene Quest – Lagos State</h3>
                  <p className="text-gray-600 mb-4">
                    We reached 85,888 students across 200 schools in Lagos with hygiene education, distributed health kits, and deployed over 200 trained volunteers in just 6 days.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="text-[var(--dean-blue)] mr-2">🔹</span>
                      Goal: Prevent hygiene-related diseases and promote safe school environments
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Girls Back to School Campaign</h3>
                  <p className="text-gray-600">
                    In partnership with UNESCO, we led a campaign to reintegrate girls post-COVID with strategic media campaigns, policy engagement, and targeted outreach in Abuja and Katsina.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Women and Youth Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">💼 Women and Youth Empowerment</div>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Women Upgrade Project</h3>
                  <p className="text-gray-600">
                    20 low-income women in Gwagwalada were trained in vocational and sustainable skills such as recycling, soap-making, and digital access.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Youth Opportunity Training (TOY)</h3>
                  <p className="text-gray-600">
                    We trained 20 young people in digital literacy, resume building, and scholarship applications. These trainings opened pathways to employment and further education.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={fadeIn} className="bg-white rounded-xl p-8 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Explore More?</h3>
              <p className="text-gray-600 mb-6">
                Our project reports are open to the public and designed to highlight what we did, why it mattered, and how it created change. You can request full project documentation or partnership insights via info@dean.org.ng.
              </p>
              <a
                href="mailto:info@dean.org.ng"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg"
              >
                Request Documentation
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <JoinUs />
    </main>
  );
}
