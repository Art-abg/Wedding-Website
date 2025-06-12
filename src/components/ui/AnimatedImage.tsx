"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
}) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: revealDelay }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-transform duration-700 ${className}`}
          priority={priority}
          style={style}
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
    </div>
  );
};

export default AnimatedImage;
