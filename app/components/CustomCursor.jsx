"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant("link");
    const handleLinkLeave = () => setCursorVariant("default");
    const handleButtonHover = () => setCursorVariant("button");
    const handleButtonLeave = () => setCursorVariant("default");

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button, .cursor-link');
    const buttons = document.querySelectorAll('.cursor-button');

    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleButtonHover);
      button.addEventListener('mouseleave', handleButtonLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleButtonHover);
        button.removeEventListener('mouseleave', handleButtonLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "2px solid var(--dean-blue)",
      height: 32,
      width: 32
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(29, 78, 216, 0.2)",
      border: "2px solid var(--dean-blue)",
      height: 36,
      width: 36
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "rgba(220, 38, 38, 0.2)",
      border: "2px solid var(--dean-red)",
      height: 40,
      width: 40
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 rounded-full z-[100] pointer-events-none mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div
        className="custom-cursor-dot hidden md:block fixed top-0 left-0 rounded-full z-[101] pointer-events-none bg-[var(--dean-red)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.1 }}
        style={{ width: 8, height: 8 }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          html, body {
            cursor: none !important;
          }
          a, button, .cursor-link, .cursor-button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
} 