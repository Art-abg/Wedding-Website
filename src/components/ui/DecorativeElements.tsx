"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '../animations/MotionVariants';

interface FloralElementProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  opacity?: number;
  rotate?: number;
  delay?: number;
}

export const FloralElement: React.FC<FloralElementProps> = ({
  className = "",
  position = "top-right",
  size = "md",
  opacity = 0.5,
  rotate = 0,
  delay = 0,
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none mix-blend-soft-light ${className}`}
      style={{ 
        opacity, 
        rotate: `${rotate}deg`,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
      }}
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
      transition={{ 
        delay,
        duration: 5 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="floralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path 
          d="M50 10C50 10 60 30 80 30C95 30 95 10 95 10C95 10 95 50 95 65C95 80 80 90 65 90C50 90 35 80 35 65C35 50 50 50 50 50C50 50 65 50 65 35C65 20 50 10 50 10Z"
          fill="url(#floralGradient)" 
        />
      </svg>
    </motion.div>
  );
};

export const GoldenAccent: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex justify-center my-6 ${className}`}>
      <div className="relative">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-champagne-gold to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-champagne-gold rounded-full transform rotate-45"></div>
      </div>
    </div>
  );
};

export const OrnamentalDivider: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-champagne-gold/70"></div>
      <div className="flex items-center justify-center mx-3">
        <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold"></div>
        <div className="w-3 h-px mx-1 bg-champagne-gold"></div>
        <div className="w-8 h-px mx-1 bg-champagne-gold"></div>
        <div className="w-3 h-px mx-1 bg-champagne-gold"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold"></div>
      </div>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-champagne-gold/70"></div>
    </div>
  );
};

export const CornerAccents: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <>
      <div className={`absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-gold-600/70 rounded-tl-2xl ${className}`} aria-hidden="true"></div>
      <div className={`absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-gold-600/70 rounded-tr-2xl ${className}`} aria-hidden="true"></div>
      <div className={`absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-gold-600/70 rounded-bl-2xl ${className}`} aria-hidden="true"></div>
      <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-gold-600/70 rounded-br-2xl ${className}`} aria-hidden="true"></div>
    </>
  );
};
