"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { imageReveal } from '../animations/MotionVariants';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  revealDelay?: number;
  style?: React.CSSProperties;
  zoomOnScroll?: boolean;
  zoomFactor?: number;
  parallaxFactor?: number;
  focusPoint?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  revealEffect?: 'fade' | 'slide' | 'curtain';
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  revealDelay = 0,
  style = {},
  zoomOnScroll = false,
  zoomFactor = 1.1,
  parallaxFactor = 0.2,
  focusPoint = 'center',
  revealEffect = 'curtain',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smoother scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values based on scroll position
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    zoomOnScroll ? [1, zoomFactor] : [1, 1]
  );

  const y = useTransform(
    smoothProgress,
    [0, 1],
    [0, height * parallaxFactor * -1]
  );

  // Calculate object position based on focus point
  const getObjectPosition = () => {
    switch (focusPoint) {
      case 'top': return 'center top';
      case 'bottom': return 'center bottom';
      case 'left': return 'left center';
      case 'right': return 'right center';
      case 'top-left': return 'left top';
      case 'top-right': return 'right top';
      case 'bottom-left': return 'left bottom';
      case 'bottom-right': return 'right bottom';
      default: return 'center';
    }
  };

  // Combine user styles with dynamic styles
  const combinedStyle = {
    ...style,
    objectPosition: getObjectPosition(),
  };

  // Choose the appropriate reveal animation
  const getRevealAnimation = () => {
    switch (revealEffect) {
      case 'fade':
        return (
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: revealDelay }}
            className="w-full h-full"
          >
            <motion.div style={{ y, scale }} className="w-full h-full">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`w-full h-full object-cover transition-transform ${className}`}
                priority={priority}
                style={combinedStyle}
              />
            </motion.div>
          </motion.div>
        );
      case 'slide':
        return (
          <>
            <motion.div
              style={{ y, scale }}
              className="w-full h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: revealDelay,
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`w-full h-full object-cover transition-transform ${className}`}
                priority={priority}
                style={combinedStyle}
              />
            </motion.div>
          </>
        );
      case 'curtain':
      default:
        return (
          <>
            <motion.div style={{ y, scale }} className="w-full h-full">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`w-full h-full object-cover transition-transform ${className}`}
                priority={priority}
                style={combinedStyle}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: 0 }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{
                delay: revealDelay,
                duration: 0.8,
                ease: [0.77, 0, 0.18, 1]
              }}
            />
          </>
        );
    }
  };

  return (
    <div 
      className="overflow-hidden relative"
      ref={containerRef}
    >
      {getRevealAnimation()}
    </div>
  );
};

export default AnimatedImage;

// Enhanced version with text overlay option
export const AnimatedImageWithOverlay: React.FC<AnimatedImageProps & {
  overlayText?: string;
  overlayPosition?: 'top' | 'bottom' | 'center';
  overlayStyle?: string;
  overlayTextStyle?: string;
}> = (props) => {
  const {
    overlayText,
    overlayPosition = 'bottom',
    overlayStyle = 'bg-gradient-to-t from-black/60 to-transparent',
    overlayTextStyle = 'text-white text-center font-parisienne text-3xl md:text-4xl',
    ...imageProps
  } = props;

  if (!overlayText) {
    return <AnimatedImage {...imageProps} />;
  }

  const positionClasses = {
    top: 'items-start pt-6',
    center: 'items-center',
    bottom: 'items-end pb-6'
  };

  return (
    <div className="relative overflow-hidden group">
      <AnimatedImage {...imageProps} />
      <motion.div 
        className={`absolute inset-0 flex ${positionClasses[overlayPosition]} p-6 ${overlayStyle}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: (imageProps.revealDelay || 0) + 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={overlayTextStyle}>
          {overlayText}
        </div>
      </motion.div>
    </div>
  );
};

