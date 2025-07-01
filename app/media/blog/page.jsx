"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const blogPosts = [
  {
    date: "March 26, 2025",
    title:
      "DEAN Initiative Selected as One of Four Global Recipients of the Climate Justice Resilience Fund (CJRF) 2024 Grant",
    author: "Doreen Mennom Oho",
    categories: ["Climate ACTION", "News", "Press Release"],
    postedBy: "Dorcas Mokikan",
    slug: "dean-initiative-cjrf-grant-2024",
    content:
      "Development of Educational Action Network (DEAN Initiative) is proud to announce its selection as one of the 4 recipients of the Climate Justice Resilience Fund (CJRF) 2024 Global Open Call grant...",
  },
  {
    date: "March 4, 2025",
    title:
      "DEAN INITIATIVE JOINS THE ELITE 2024-2025 CLIMATE DEMOCRACY ACCELERATOR PROGRAM",
    author: "Dorcas Mokikan",
    categories: ["News", "Press Release"],
    postedBy: "Dorcas Mokikan",
    slug: "dean-initiative-climate-democracy-accelerator-2024",
    content:
      "DEAN Initiative is excited to announce that our Technical Programs Lead Doreen Mennom Oho has been selected for the 2024/2025 Climate Democracy Accelerator Program...",
  },
  {
    date: "January 24, 2025",
    title: "Reclaiming the Future: Education's Power in the Age of AI",
    author: "Dorcas Mokikan",
    categories: ["News"],
    postedBy: "Dorcas Mokikan",
    slug: "reclaiming-future-education-ai",
    content:
      "As we commemorate the International Day of Education 2025 under the theme 'AI and Education: Preserving Human Agency in a World of Automation,'...",
  },
  {
    date: "December 30, 2024",
    title:
      "Official Report from the Open Government Partnership (OGP) Peer Learning Session",
    author: "Dorcas Mokikan",
    categories: ["Governance", "News", "OGP local"],
    postedBy: "Dorcas Mokikan",
    slug: "ogp-peer-learning-session-report-2024",
    content:
      "CenterLSD, in collaboration with DEAN Initiative, organized a Peer Learning Session to promote collaboration...",
  },
  {
    date: "December 21, 2024",
    title:
      "Advancing Local Governance Reforms: OGP-Local's Impact in Abuja FCT",
    author: "Doreen Mennom Oho",
    categories: ["News", "OGP local", "Uncategorized"],
    postedBy: "Dorcas Mokikan",
    slug: "advancing-local-governance-reforms-ogp-local",
    content:
      "To deepen governance reforms at the grassroots, the Open Government Partnership-Local (OGP-Local) hosted a two-day Scorecard and Peer Learning Session in Keffi...",
  },
];

// Get all unique categories
const allCategories = [
  ...new Set(blogPosts.flatMap((post) => post.categories)),
];

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
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

export default function BlogPage() {
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <motion.main
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-[url('/hero/hero-4.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-r from-blue-600/60 via-blue-800/60 to-red-600/60 text-white h-[50vh] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 h-full">
            <div className="text-center h-full flex items-center justify-center flex-col">
              <h1 className="text-5xl font-bold mb-6">Latest News & Updates</h1>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                Stay informed about our initiatives, achievements, and impact in
                education and development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <Link href={`/media/blog/${post.slug}`} className="block p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content.substring(0, 200)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>Posted by {post.postedBy}</span>
                    </div>
                    <time>{post.date}</time>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
