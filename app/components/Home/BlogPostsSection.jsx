"use client";

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function BlogPostsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  const blogPosts = [
    {
      date: "March 26, 2025",
      title: "DEAN Initiative Selected as One of Four Global Recipients of the Climate Justice Resilience Fund (CJRF) 2024 Grant",
      author: "Doreen Mennom Oho",
      categories: ["Climate ACTION", "News", "Press Release"],
      postedBy: "Dorcas Mokikan",
      slug: "dean-initiative-cjrf-grant-2024",
      content: "Development of Educational Action Network (DEAN Initiative) is proud to announce its selection as one of the 4 recipients of the Climate Justice Resilience Fund (CJRF) 2024 Global Open Call grant..."
    },
    {
      date: "March 4, 2025",
      title: "DEAN INITIATIVE JOINS THE ELITE 2024-2025 CLIMATE DEMOCRACY ACCELERATOR PROGRAM",
      author: "Dorcas Mokikan", 
      categories: ["News", "Press Release"],
      postedBy: "Dorcas Mokikan",
      slug: "dean-initiative-climate-democracy-accelerator-2024",
      content: "DEAN Initiative is excited to announce that our Technical Programs Lead Doreen Mennom Oho has been selected for the 2024/2025 Climate Democracy Accelerator Program..."
    },
    {
      date: "January 24, 2025",
      title: "Reclaiming the Future: Education's Power in the Age of AI",
      author: "Dorcas Mokikan",
      categories: ["News"],
      postedBy: "Dorcas Mokikan", 
      slug: "reclaiming-future-education-ai",
      content: "As we commemorate the International Day of Education 2025 under the theme 'AI and Education: Preserving Human Agency in a World of Automation,'..."
    },
    {
      date: "December 30, 2024",
      title: "Official Report from the Open Government Partnership (OGP) Peer Learning Session",
      slug: "ogp-peer-learning-session-report-2024"
    },
    {
      date: "December 21, 2024", 
      title: "Advancing Local Governance Reforms: OGP-Local's Impact in Abuja FCT",
      slug: "advancing-local-governance-reforms-ogp-local"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const carouselVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--dean-blue)]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[var(--dean-red)]/5 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-4">
              Latest Updates
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] mx-auto"></div>
          </motion.div>

          {/* Blog Posts Carousel */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8"
              variants={carouselVariants}
              animate="animate"
              style={{ width: "fit-content" }}
            >
              {/* Double the posts for seamless loop */}
              {[...blogPosts, ...blogPosts].map((post, index) => (
                <div
                  key={`${post.slug}-${index}`}
                  className="w-[400px] flex-shrink-0 bg-white rounded-xl p-8 shadow-sm"
                >
                  <Link href={`/media/blog/${post.slug}`} className="block group">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories && post.categories.map(category => (
                        <span
                          key={category}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[var(--dean-blue)] transition-colors duration-300 mb-3 line-clamp-2">
                      {post.title || 'Untitled Post'}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.content || 'No content available'}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>By {post.author || 'Anonymous'}</span>
                      </div>
                      <time>{post.date || 'No date'}</time>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* View All Button */}
          <motion.div className="text-center mt-10">
            <Link
              href="/media/blog"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}