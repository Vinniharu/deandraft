"use client";

import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import React from 'react';

export function Providers({ children }) {
  return (
    <>
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child, i) => {
          // Add a key to each child if it doesn't have one
          return React.isValidElement(child)
            ? React.cloneElement(child, { key: child.key || `child-${i}` })
            : child;
        })}
      </AnimatePresence>
      <CustomCursor />
    </>
  );
} 