"use client";

"use client";

import React from 'react';
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import styles from './EnhancedDecorativeElements.module.css';
import { floatingAnimation, shimmerEffect, pulseAnimation } from '../animations/MotionVariants';

interface DecorativeElementProps {
  position?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  rotate?: number;
  delay?: number;
  className?: string;
  animation?: 'float' | 'pulse' | 'shimmer' | 'none';
  zIndex?: number;
}

// Size mapping for decorative elements
const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

// Position mapping to CSS classes
const getPositionClasses = (position: string) => {
  const positions = position.split('-');
  let classes = '';
  
  positions.forEach(pos => {
    switch(pos) {
      case 'top': classes += ' top-0'; break;
      case 'bottom': classes += ' bottom-0'; break;
      case 'left': classes += ' left-0'; break;
      case 'right': classes += ' right-0'; break;
      case 'center': 
        if (!classes.includes('left') && !classes.includes('right')) classes += ' left-1/2 -translate-x-1/2';
        if (!classes.includes('top') && !classes.includes('bottom')) classes += ' top-1/2 -translate-y-1/2';
        break;
    }
  });
  
  return classes;
};

// Get animation variants based on type
const getAnimationVariant = (type: string, delay: number): Variants => {
  const getVariant = (animation: Variants) => {
    const animate = animation.animate as TargetAndTransition;
    if (!animate) return animation;

    return {
      ...animation,
      animate: {
        ...animate,
        transition: {
          ...(animate.transition || {}),
          delay,
        },
      },
    };
  };

  switch (type) {
    case 'float':
      return getVariant(floatingAnimation);
    case 'pulse':
      return getVariant(pulseAnimation);
    case 'shimmer':
      return getVariant(shimmerEffect);
    default:
      return {};
  }
};

// Enhanced Floral Element with more animation options
export const EnhancedFloralElement: React.FC<DecorativeElementProps> = ({
  position = 'top-right',
  size = 'md',
  opacity = 0.1,
  rotate = 0,
  delay = 0,
  className = '',
  animation = 'float',
  zIndex = 0
}) => {
  const positionClasses = getPositionClasses(position);
  const sizeClass = sizeMap[size];
  const animationVariant = getAnimationVariant(animation, delay);
  
  return (
    <motion.div
      className={`absolute ${positionClasses} ${sizeClass} ${className}`}
      style={{ 
        opacity, 
        rotate: `${rotate}deg`,
        zIndex
      }}
      initial="initial"
      animate={animation !== 'none' ? "animate" : undefined}
      variants={animationVariant}
    >
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
      </svg>
    </motion.div>
  );
};

// Enhanced Golden Accent with animation options
export const EnhancedGoldenAccent: React.FC<{
  width?: string;
  className?: string;
  animation?: 'shimmer' | 'pulse' | 'none';
  delay?: number;
}> = ({
  width = 'w-32',
  className = '',
  animation = 'shimmer',
  delay = 0
}) => {
  const animationVariant = getAnimationVariant(animation, delay);
  
  return (
    <motion.div 
      className={`flex justify-center my-4 ${className}`}
      initial="initial"
      animate={animation !== 'none' ? "animate" : undefined}
      variants={animationVariant}
    >
      <div className={`${width} h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent`}></div>
    </motion.div>
  );
};

// Enhanced Ornamental Divider with animation options
export const EnhancedOrnamentalDivider: React.FC<{
  className?: string;
  animation?: 'shimmer' | 'pulse' | 'none';
  delay?: number;
  variant?: 'simple' | 'diamond' | 'dots' | 'leaves';
}> = ({
  className = '',
  animation = 'pulse',
  delay = 0,
  variant = 'diamond'
}) => {
  const animationVariant = getAnimationVariant(animation, delay);
  
  const renderDivider = () => {
    switch(variant) {
      case 'simple':
        return (
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        );
      case 'dots':
        return (
          <div className="flex items-center justify-center w-full">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-gold-300"></div>
            <div className="mx-2 w-2 h-2 rounded-full bg-gold-400"></div>
            <div className="mx-1 w-3 h-3 rounded-full bg-gold-500"></div>
            <div className="mx-2 w-2 h-2 rounded-full bg-gold-400"></div>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-gold-300"></div>
          </div>
        );
      case 'leaves':
        return (
          <div className="flex items-center justify-center w-full">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-gold-300"></div>
            <svg className="mx-2 w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,3.1L6.1,8.6C5.3,9.4,4.9,10.5,4.9,11.7s0.4,2.3,1.2,3.1c0.8,0.8,1.9,1.2,3.1,1.2s2.3-0.4,3.1-1.2l5.9-5.5 c1.4-1.4,1.4-3.6,0-5s-3.6-1.4-5,0l-5.9,5.5c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0l5.9-5.5c1-1,2.6-1,3.6,0s1,2.6,0,3.6l-5.9,5.5 c-0.6,0.6-1.5,1-2.4,1s-1.8-0.3-2.4-1c-0.6-0.6-1-1.5-1-2.4s0.3-1.8,1-2.4l5.9-5.5c0.2-0.2,0.2-0.5,0-0.7S12.2,2.9,12,3.1z"/>
            </svg>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-gold-300"></div>
          </div>
        );
      case 'diamond':
      default:
        return (
          <div className="relative">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-gold-400 rounded-sm transform rotate-45"></div>
          </div>
        );
    }
  };
  
  return (
    <motion.div 
      className={`flex justify-center py-2 ${className}`}
      initial="initial"
      animate={animation !== 'none' ? "animate" : undefined}
      variants={animationVariant}
    >
      {renderDivider()}
    </motion.div>
  );
};

// Enhanced Corner Accents with animation
export const EnhancedCornerAccents: React.FC<{
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'pulse' | 'shimmer' | 'none';
  thickness?: 'thin' | 'medium' | 'thick';
  rounded?: boolean;
}> = ({
  className = '',
  color = 'border-gold-300/60',
  size = 'md',
  animation = 'pulse',
  thickness = 'medium',
  rounded = true
}) => {
  const animationVariant = getAnimationVariant(animation, 0);
  
  // Size mapping
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  // Thickness mapping
  const thicknessClasses = {
    thin: 'border',
    medium: 'border-2',
    thick: 'border-4'
  };
  
  // Rounded corners
  const roundedClass = rounded ? 'rounded-xl' : '';
  
  return (
    <>
      <motion.div 
        className={`absolute top-0 left-0 ${sizeClasses[size]} border-t-2 border-l-2 ${color} ${roundedClass} ${thicknessClasses[thickness]} ${className}`}
        initial="initial"
        animate={animation !== 'none' ? "animate" : undefined}
        variants={animationVariant}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute top-0 right-0 ${sizeClasses[size]} border-t-2 border-r-2 ${color} ${roundedClass} ${thicknessClasses[thickness]} ${className}`}
        initial="initial"
        animate={animation !== 'none' ? "animate" : undefined}
        variants={animationVariant}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute bottom-0 left-0 ${sizeClasses[size]} border-b-2 border-l-2 ${color} ${roundedClass} ${thicknessClasses[thickness]} ${className}`}
        initial="initial"
        animate={animation !== 'none' ? "animate" : undefined}
        variants={animationVariant}
        aria-hidden="true"
      />
      <motion.div 
        className={`absolute bottom-0 right-0 ${sizeClasses[size]} border-b-2 border-r-2 ${color} ${roundedClass} ${thicknessClasses[thickness]} ${className}`}
        initial="initial"
        animate={animation !== 'none' ? "animate" : undefined}
        variants={animationVariant}
        aria-hidden="true"
      />
    </>
  );
};

// Animated background pattern
export const AnimatedBackgroundPattern: React.FC<{
  pattern?: 'dots' | 'lines' | 'waves' | 'leaves';
  color?: string;
  opacity?: number;
  className?: string;
  density?: 'low' | 'medium' | 'high';
}> = ({
  pattern = 'dots',
  color = 'text-gold-500',
  opacity = 0.05,
  className = '',
  density = 'medium'
}) => {
  // Pattern SVG based on type
  const renderPattern = () => {
    switch(pattern) {
      case 'lines':
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="diagonalLines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        );
      case 'waves':
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="waves" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 C30,0 70,0 100,10 C130,20 170,20 200,10 C230,0 270,0 300,10" stroke="currentColor" fill="none" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        );
      case 'leaves':
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="leaves" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25,0 C40,15 40,35 25,50 C10,35 10,15 25,0 Z" stroke="currentColor" fill="none" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#leaves)" />
          </svg>
        );
      case 'dots':
      default:
        const dotSize = density === 'low' ? 1 : density === 'medium' ? 2 : 3;
        const spacing = density === 'low' ? 30 : density === 'medium' ? 20 : 10;
        
        return (
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
              <circle cx={spacing/2} cy={spacing/2} r={dotSize} fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        );
    }
  };
  
  // Convert opacity to class name
  const getOpacityClass = (opacity: number) => {
    const opacityValue = Math.round(opacity * 10) / 10;
    if (opacityValue === 0) return styles['opacity-0'];
    if (opacityValue === 1) return styles['opacity-1'];
    
    // Handle decimal values like 0.1, 0.2, etc.
    const className = `opacity-${String(opacityValue).replace('.', '')}`;
    return styles[className];
  };
  
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${color} ${className} ${getOpacityClass(opacity)}`}
    >
      {renderPattern()}
    </div>
  );
};

// Export all decorative elements
export {
  EnhancedFloralElement as FloralElement,
  EnhancedGoldenAccent as GoldenAccent,
  EnhancedOrnamentalDivider as OrnamentalDivider,
  EnhancedCornerAccents as CornerAccents
};
