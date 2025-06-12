"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/MotionVariants';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
