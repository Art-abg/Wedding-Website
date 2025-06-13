"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { textReveal, letterAnimation } from '../animations/MotionVariants';

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  type?: 'words' | 'letters' | 'lines' | 'block';
  staggerChildren?: number;
  once?: boolean;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'p',
  className = '',
  delay = 0,
  type = 'words',
  staggerChildren = 0.02,
  once = true,
  threshold = 0.1
}) => {
  // Container variants for staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren, 
        delayChildren: delay,
      }
    })
  };
  
  // Child variants for individual elements (words, letters, etc.)
  const childVariants: Variants = {
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

  // For elegant letter-by-letter animations
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200
      }
    }
  };

  // For line-by-line animations
  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 70
      }
    }
  };

  // For block animations
  const blockVariants = textReveal(delay);

  // Dynamically set the HTML tag using motion
  const Tag = motion[tag] as any;

  // Render different animation types
  const renderAnimatedText = () => {
    switch (type) {
      case 'letters':
        // Split text into individual letters
        return (
          <Tag
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
          >
            {Array.from(text).map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </Tag>
        );
      
      case 'lines':
        // Split text into lines (assumes lines are separated by \n)
        const lines = text.split('\n');
        return (
          <Tag
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
          >
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className="block"
                variants={lineVariants}
              >
                {line || '\u00A0'}
              </motion.div>
            ))}
          </Tag>
        );
      
      case 'block':
        // Animate the entire text as one block
        return (
          <Tag
            className={className}
            variants={blockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
          >
            {text}
          </Tag>
        );
      
      case 'words':
      default:
        // Split text into words
        const words = text.split(' ');
        return (
          <Tag
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={childVariants}
              >
                {word}
              </motion.span>
            ))}
          </Tag>
        );
    }
  };

  return renderAnimatedText();
};

export default AnimatedText;

// Elegant heading component with animation
export const AnimatedHeading: React.FC<{
  text: string;
  subtext?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  subtextClassName?: string;
  delay?: number;
  textType?: 'words' | 'letters' | 'lines' | 'block';
  decorative?: boolean;
}> = ({
  text,
  subtext,
  level = 2,
  className = '',
  subtextClassName = '',
  delay = 0,
  textType = 'letters',
  decorative = true,
}) => {
  const headingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  return (
    <div className="text-center relative">
      {decorative && (
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </motion.div>
      )}
      
      <AnimatedText 
        text={text} 
        tag={headingTag}
        className={`font-parisienne ${className}`}
        delay={delay}
        type={textType}
      />
      
      {subtext && (
        <AnimatedText 
          text={subtext} 
          tag="p"
          className={`mt-2 ${subtextClassName}`}
          delay={delay + 0.2}
          type="block"
        />
      )}
      
      {decorative && (
        <motion.div 
          className="flex justify-center mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-gold-400 rounded-full transform rotate-45"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
