"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DocumentTextIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

export default function PublicationsMenu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const menuItems = [
    {
      title: "Annual Reports",
      description: "Access our comprehensive annual reports showcasing yearly achievements, impact metrics, financial transparency, and organizational growth.",
      href: "/annual-reports",
      icon: DocumentTextIcon,
      color: "blue",
      count: "2 Reports",
    },
    {
      title: "Project Reports",
      description: "Explore detailed reports from our various projects and initiatives, including research findings, survey results, and impact assessments.",
      href: "/project-reports", 
      icon: ClipboardDocumentListIcon,
      color: "red",
      count: "11 Reports",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Publication Type
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of publications organized by type. Each section contains
              relevant documents to help you find exactly what you're looking for.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link href={item.href}>
                  <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                    {/* Background gradient based on color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      item.color === 'blue' 
                        ? 'from-blue-50 to-blue-100' 
                        : 'from-red-50 to-red-100'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative p-8">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-xl ${
                          item.color === 'blue' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-red-100 text-red-600'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-8 h-8" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <span className={`text-sm font-medium ${
                            item.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                          }`}>
                            {item.count}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className={`inline-flex items-center text-sm font-medium ${
                        item.color === 'blue' ? 'text-blue-600' : 'text-red-600'
                      } group-hover:translate-x-2 transition-transform duration-300`}>
                        Browse {item.title.toLowerCase()}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 