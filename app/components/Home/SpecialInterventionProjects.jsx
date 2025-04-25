import { useState } from "react";
import { motion } from "framer-motion";

export default function SpecialInterventionProjects() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Special Intervention Projects
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="flex-1 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Emergency Response
              </h3>
              <p className="text-gray-300 mb-4">
                Rapid deployment of resources to crisis zones, providing
                immediate relief to those affected by disasters and emergencies.
              </p>
            </motion.div>
          </div>

          <div className="flex-1 bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Sustainable Development
              </h3>
              <p className="text-gray-300 mb-4">
                Long-term programs designed to build community resilience,
                infrastructure, and create lasting positive change.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-700 to-red-600 rounded-xl p-8 text-white border border-gray-700 shadow-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Our Impact in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold">250+</p>
                <p className="text-sm text-gray-200">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">45</p>
                <p className="text-sm text-gray-200">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold">1.2M</p>
                <p className="text-sm text-gray-200">People Helped</p>
              </div>
              <div>
                <p className="text-3xl font-bold">$12M</p>
                <p className="text-sm text-gray-200">Funds Deployed</p>
              </div>
            </div>

                      <motion.a
                          href="/specialinterventionprojects"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg border border-blue-500"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
