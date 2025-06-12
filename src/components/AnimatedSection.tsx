"use client";

import { motion, Variants } from 'framer-motion';
import { getAnimationVariant } from './animations/AnimationUtils';
import { AnimationType, AnimationDirection } from './animations/MotionVariants';
import React from 'react';

// Define valid HTML tags that motion can use
type MotionHTMLTag = keyof typeof motion;

// Define component props with index signature
export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML tag to use for the motion component */
  tag?: MotionHTMLTag;
  
  /** Animation delay in seconds */
  delay?: number;
  
  /** Type of animation to use */
  type?: AnimationType;
  
  /** Direction for directional animations */
  direction?: AnimationDirection;
  
  /** Custom Framer Motion animation variants */
  variants?: Variants;
  
  /** Optional viewport configuration for triggering animations */
  viewport?: { 
    once?: boolean; 
    margin?: string; 
    amount?: number | 'some' | 'all';
  };
  
  /** Optional custom transition */
  transition?: { 
    type?: string; 
    stiffness?: number; 
    damping?: number; 
    mass?: number; 
    delay?: number; 
    duration?: number; 
    ease?: string;
  };
  
  /** Optional hover animations */
  whileHover?: object;
  
  /** Optional tap animations */
  whileTap?: object;
  
  // Allow any other props
  [key: string]: unknown;
}

// Component definition
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  type = 'fadeIn',
  direction = 'up',
  variants,
  tag = 'div',
  viewport,
  transition,
  whileHover,
  whileTap,
  ...rest
}) => {
  const MotionComponent = motion[tag] as React.ElementType;

  // Determine which animation variant to use
  const getVariants = (): Variants => {
    if (variants) return variants;
    return getAnimationVariant(type, direction, delay);
  };

  // Custom transition based on animation type if not provided
  const getTransition = () => {
    if (transition) return transition;
    
    return {
      duration: type === 'fadeIn' ? 0.6 : 0.7,
      ease: 'easeOut',
      delay
    };
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || { once: true, margin: "-10%" }}
      variants={getVariants()}
      transition={getTransition()}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedSection;
