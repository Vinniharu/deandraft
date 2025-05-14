"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "../RevealOnScroll";
import Image from "next/image";

export default function OurStorySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative min-h-screen w-full overflow-hidden py-24 md:py-32"
    >
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/10 to-[var(--dean-red)]/5" />
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-10" />

        {/* Floating geometric shapes */}
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-[var(--dean-blue)]/10 blur-xl" />
        <div className="absolute right-[15%] top-[30%] h-40 w-40 rounded-full bg-[var(--dean-red)]/10 blur-xl" />
        <div className="absolute left-[20%] bottom-[20%] h-48 w-48 rounded-full bg-[var(--dean-blue)]/5 blur-xl" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Content */}
          <div className="space-y-8">
            <RevealOnScroll animation="fadeUp">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--dean-blue)] to-[var(--dean-red)] bg-clip-text text-transparent inline-block">
                Development of Educational Action Network (DEAN) Initiative
              </h2>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 leading-relaxed">
                  The Development of Educational Action Network (DEAN) envisions
                  a world where empowered youth lead transformative action to
                  address critical local and global challenges through
                  innovative technologies and impactful reforms.
                </p>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  Founded in 2010 and officially registered with the Corporate
                  Affairs Commission in 2015, DEAN is a non-governmental,
                  non-profit, and non-partisan organisation committed to
                  creating sustainable impact through youth-driven solutions. We
                  collaborate with both state and non-state actors to build a
                  future where young and vulnerable people are at the forefront
                  of development and change.Founded in 2010 and officially
                  registered with the Corporate Affairs Commission in 2015, DEAN
                  is a non-governmental, non-profit, and non-partisan
                  organisation committed to creating sustainable impact through
                  youth-driven solutions. We collaborate with both state and
                  non-state actors to build a future where young and vulnerable
                  people are at the forefront of development and change.
                </p>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold mb-2">
                    Why We Are Driven By YOUTH Power
                  </h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Youths are the heartbeat of innovation and transformation. At
                    DEAN Initiative, we invest in young people by equipping them
                    with training, resources, and opportunities to lead change.
                    Their leadership drives the impact we envision in governance,
                    education, climate action, and democracy.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeUp" delay={0.4}>
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)] backdrop-blur-sm">
                  <span>Registered 2015</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)] backdrop-blur-sm">
                  <span>Empowered Youth</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-blue)]/10 rounded-full text-sm font-medium text-[var(--dean-blue)] backdrop-blur-sm">
                  <span>Youth-Driven Solutions</span>
                </div>
                <div className="px-4 py-2 bg-[var(--dean-red)]/10 rounded-full text-sm font-medium text-[var(--dean-red)] backdrop-blur-sm">
                  <span>Transformative Change</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right column: Visual elements */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <RevealOnScroll animation="fadeLeft" delay={0.3}>
              <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/20 to-[var(--dean-red)]/20 z-10" />
                <Image
                  src="/hero/hero-2.jpeg"
                  alt="DEAN Initiative in action"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fadeRight" delay={0.5}>
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--dean-blue)]/20 to-[var(--dean-red)]/20 z-10" />
                <Image
                  src="/hero/hero-4.jpeg"
                  alt="DEAN Initiative community"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full border-2 border-[var(--dean-blue)] opacity-20" />
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full border-2 border-[var(--dean-red)] opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
