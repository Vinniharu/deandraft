"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    id: "img-1",
    src: "/hero/hero-1.jpg",
    alt: "Vibrant Youth Action for Democracy"
  },
  {
    id: "img-2",
    src: "/hero/hero-2.jpg",
    alt: "Leading Community Action for Climate"
  },
  {
    id: "img-3",
    src: "/hero/hero-3.jpeg",
    alt: "Leading Transformative Youth Action"
  },
  {
    id: "img-4",
    src: "/hero/hero-4.jpg",
    alt: "Education that leads problem solving"
  },
  {
    id: "img-5",
    src: "/hero/hero-5.jpeg",
    alt: "Building Citizens Centered Local Governments"
  }
];


const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
      type: "spring",
      stiffness: 200
    }
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3
    }
  },
  tap: { 
    scale: 0.95
  }
};


// Image animation variants
const imageVariants = {
  enter: { opacity: 0, scale: 0.8 },
  center: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handle next slide
  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(prevIndex => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  // Handle previous slide
  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(prevIndex => 
        prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  // Go to specific slide
  const goToSlide = useCallback((index) => {
    if (!isTransitioning && index !== activeIndex) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, activeIndex]);

  // Autoplay functionality
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [handleNext]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Minimum swipe distance threshold
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    if (swipeDistance > minSwipeDistance) {
      // Swiped right - go to previous slide
      handlePrev();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped left - go to next slide
      handleNext();
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`image-${activeIndex}`}
            className="absolute inset-0"
            initial="enter"
            animate="center"
            exit="exit"
            variants={imageVariants}
          >
            <Image
              src={carouselImages[activeIndex].src}
              alt={carouselImages[activeIndex].alt}
              fill
              priority={true}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dean-blue)]/80 to-[var(--dean-red)]/60 mix-blend-multiply" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('/hero/pattern.svg')] bg-repeat opacity-30" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Heading */}
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Welcome to <span className="text-white">DEAN</span> <span className="text-white">INITIATIVE</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-3xl font-medium leading-relaxed text-white/90"
          >
            Empowering Youth. Transforming Communities.
          </motion.h2>
          
          {/* CTA */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Link href="/get-involved">
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 rounded-full bg-white text-[var(--dean-blue)] font-medium transition-all"
              >
                Get Involved
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Carousel navigation arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10">
          <button
            onClick={handlePrev}
            className="bg-black/30 hover:bg-black/50 rounded-full p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="bg-black/30 hover:bg-black/50 rounded-full p-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-10 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={`indicator-${index}`}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeIndex === index 
                  ? "bg-white w-8" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
