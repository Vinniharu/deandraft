"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import JoinUs from "@/app/components/JoinUs";

export default function AnnualReport() {
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

  const stats = [
    { number: "200,000+", description: "people reached across all thematic areas" },
    { number: "5,000+", description: "students engaged in SDG Class Activation programs" },
    { number: "250", description: "teachers empowered with SDG-aligned toolkits" },
    { number: "100+", description: "youth leaders trained in climate finance" },
    { number: "36+", description: "state hubs engaged" },
    { number: "774", description: "LGAs in Election Eyewitness Network" },
  ];

  const programs = [
    "Transforming Education Summits with key stakeholders",
    "Climate finance access workshops", 
    "Budget tracking and Open Government Partnership (OGP) advocacy",
    "Election transparency initiatives through youth-led observation and tracking",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/annual/bg.jpg')] bg-cover bg-center bg-no-repeat" />
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
                Annual Report 2024
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Leading Change Where It Matters Most
              </motion.h1>
              
              <motion.p
                variants={fadeIn}
                className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              >
                At DEAN Initiative, 2024 marked a year of resilient transformation led by young people and rooted in grassroots action. Amid national challenges—rising inflation, civic space suppression, and declining trust in institutions—we remained committed to equipping youth and communities to lead change.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 relative bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-4">💡 Our Vision in Action</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                From education reform and climate adaptation to youth-led democratic engagement and open governance advocacy, our impact reached across all 36 states and the FCT. Guided by our Theory of Change, we worked hand-in-hand with communities to create sustainable, citizen-driven solutions.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">📊 2024 at a Glance</div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Programs Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">✊ Youth-Powered Transformation</div>
              <p className="text-gray-600 text-lg mb-6">
                We believe in the power of youth to drive bold change. Our programs in 2024 included:
              </p>
              <div className="space-y-4">
                {programs.map((program, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)]"></div>
                    <div className="text-gray-700">{program}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Section */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="text-[var(--dean-blue)] text-xl mb-6">💬 Voices of Impact</div>
              <div className="bg-white rounded-xl p-8 shadow-sm relative">
                <div className="absolute top-4 left-4 text-6xl text-[var(--dean-blue)]/10">"</div>
                <blockquote className="relative z-10">
                  <p className="text-gray-600 text-lg italic mb-4">
                    "With DEAN's support, I've been able to channel my energy into real change—impacting governance, education, and climate action. Youth leadership is not just the future; it is now."
                  </p>
                  <footer className="text-gray-700 font-semibold">
                    — Mokikan Dorcas, Volunteer
                  </footer>
                </blockquote>
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
