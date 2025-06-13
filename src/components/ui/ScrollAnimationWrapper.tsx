"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { scrollReveal, scrollZoom, scrollRotate } from '../animations/MotionVariants';
import styles from './ScrollAnimationWrapper.module.css';

export type ScrollAnimationType = 'reveal' | 'parallax' | 'zoom' | 'rotate' | 'none';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  type?: ScrollAnimationType;
  className?: string;
  intensity?: number;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
  customVariants?: Variants;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  type = 'reveal',
  className = '',
  intensity = 1,
  delay = 0,
  threshold = 0.1,
  direction = 'up',
  once = true,
  customVariants
}) => {
  // Get animation variants based on type
  const getVariants = (): Variants => {
    if (customVariants) return customVariants;
    
    switch (type) {
      case 'reveal':
        return scrollReveal;
      case 'zoom':
        return scrollZoom(1 + (intensity * 0.1));
      case 'rotate':
        return scrollRotate(intensity * 5);
      case 'parallax':
        return {
          offscreen: {
            y: direction === 'up' ? 50 * intensity : 
               direction === 'down' ? -50 * intensity : 0,
            x: direction === 'left' ? 50 * intensity : 
               direction === 'right' ? -50 * intensity : 0,
            opacity: 0
          },
          onscreen: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay
            }
          }
        };
      case 'none':
      default:
        return {};
    }
  };

  // If no animation is needed, just return children
  if (type === 'none') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.97]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;

// Specialized component for text animations
export const AnimatedText: React.FC<{
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}> = ({
  text,
  tag = 'p',
  className = '',
  delay = 0,
  staggerChildren = 0.015,
  once = true
}) => {
  const words = text.split(' ');
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerChildren, 
        delayChildren: delay,
      }
    })
  };
  
  const child: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const Tag = motion[tag as keyof typeof motion];
  
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

// Specialized component for parallax backgrounds
export const ParallaxBackground: React.FC<{
  src: string;
  speed?: number;
  className?: string;
  overlayColor?: string;
}> = ({
  src, 
  speed = 0.5, 
  className = '', 
  overlayColor = 'rgba(0,0,0,0.4)'
}) => {
  const { scrollYProgress } = useScroll();
  const [translateY, setTranslateY] = useState(0);
  const [overlayClass, setOverlayClass] = useState('');
  
  // Create a class for the background image
  useEffect(() => {
    // Create a style element if it doesn't exist
    let styleEl = document.getElementById('dynamic-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'dynamic-styles';
      document.head.appendChild(styleEl);
    }
    
    // Create unique class names
    const bgClassName = `bg-image-${src.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'default'}`;
    const overlayClassName = `overlay-${overlayColor.replace(/[^a-zA-Z0-9]/g, '')}`;
    
    // Add the style rules if they don't exist
    if (!styleEl.textContent?.includes(`.${bgClassName}`)) {
      styleEl.textContent += `
        .${bgClassName} {
          background-image: url(${src});
        }
      `;
    }
    
    if (!styleEl.textContent?.includes(`.${overlayClassName}`)) {
      styleEl.textContent += `
        .${overlayClassName} {
          background-color: ${overlayColor};
        }
      `;
    }
    
    setOverlayClass(overlayClassName);
    
    // Set up scroll listener
    const handleScroll = () => {
      const progress = scrollYProgress.get();
      setTranslateY(Number(progress) * speed * 100);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [src, overlayColor, speed, scrollYProgress]);
  
  // Create transform class dynamically
  useEffect(() => {
    let styleEl = document.getElementById('dynamic-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'dynamic-styles';
      document.head.appendChild(styleEl);
    }
    
    const transformClassName = `transform-y-${Math.round(translateY)}`;
    
    if (!styleEl.textContent?.includes(`.${transformClassName}`)) {
      styleEl.textContent += `
        .${transformClassName} {
          transform: translateY(${translateY}px);
        }
      `;
    }
    
    const bgElement = document.querySelector(`.${styles.parallaxImage}`);
    if (bgElement) {
      bgElement.classList.forEach(cls => {
        if (cls.startsWith('transform-y-')) {
          bgElement.classList.remove(cls);
        }
      });
      bgElement.classList.add(transformClassName);
    }
  }, [translateY]);

  return (
    <div className={`${styles.parallaxBackground} ${className}`}>
      <div 
        className={`${styles.parallaxImage} bg-image-${src.split('/').pop()?.replace(/[^a-zA-Z0-9]/g, '') || 'default'}`}
      />
      <div 
        className={`${styles.overlay} ${overlayClass}`}
      />
    </div>
  );
};
