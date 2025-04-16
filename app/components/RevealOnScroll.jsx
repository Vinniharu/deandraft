"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Animation variants for reveal effects
const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

// Default animation variants for different directions
const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  },
  fadeUp: {
    hidden: { opacity: 0, y: 75 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -75 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -75 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 75 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }
};

export default function RevealOnScroll({ 
  children, 
  width = "100%",
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,  // How much of the element needs to be in view
  ...props 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold });
  const controls = useAnimation();
  const selectedVariant = variants[animation] || variants.fadeUp;
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        ...selectedVariant.visible,
        transition: {
          ...selectedVariant.visible.transition,
          delay
        }
      });
    }
  }, [isInView, controls, selectedVariant, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      style={{ width }}
      {...props}
    >
      {children}
    </motion.div>
  );
} 