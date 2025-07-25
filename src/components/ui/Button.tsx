"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonHover } from "../animations/MotionVariants";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  isLoading = false,
  external = false
}) => {
  // Base styling for all buttons with enhanced visual appeal
  const baseClasses =
    "inline-flex items-center justify-center font-bold rounded-2xl border-0 transition-all duration-300 focus:outline-none relative overflow-hidden";

  // Get explicit styles for each variant
  const getVariantStyle = (variant: string) => {
    const styles = {
      primary: {
        background: 'linear-gradient(135deg, #2d5016 0%, #1a2e0a 100%)',
        color: '#faf7f0',
        boxShadow: '0 10px 25px rgba(45, 80, 22, 0.4)',
        border: 'none'
      },
      secondary: {
        background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        color: '#faf7f0',
        boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)',
        border: 'none'
      },
      outline: {
        background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.9) 0%, rgba(26, 46, 10, 0.9) 100%)',
        color: '#faf7f0',
        boxShadow: '0 10px 25px rgba(45, 80, 22, 0.4)',
        border: 'none'
      },
      subtle: {
        background: 'linear-gradient(135deg, #8fbc8f 0%, #556b2f 100%)',
        color: '#faf7f0',
        boxShadow: '0 10px 25px rgba(143, 188, 143, 0.4)',
        border: 'none'
      }
    };
    return styles[variant as keyof typeof styles] || styles.primary;
  };

  // Variant-specific classes (keeping for additional styling)
  const variantClasses = {
    primary: "hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100",
    secondary: "hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100",
    outline: "hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100",
    subtle: "hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-100"
  };

  // Size-specific classes with enhanced proportions
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm font-semibold tracking-wide",
    md: "px-8 py-3.5 text-base font-semibold tracking-wide",
    lg: "px-12 py-4.5 text-lg font-semibold tracking-wider"
  };

  // Disabled state classes
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";

  // Get inline styles for the variant
  const variantStyle = getVariantStyle(variant);
  
  // Combine all classes
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  // Render as an anchor tag if href is provided
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={allClasses}
          style={variantStyle}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={disabled ? {} : buttonHover}
          whileTap={disabled ? {} : { scale: 0.98 }}
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          {isLoading ? <span className="animate-spin mr-2 relative z-10">⟳</span> : null}
          <span className="relative z-10">{children}</span>
        </motion.a>
      );
    }

    return (
      <Link href={href} passHref>
        <motion.span
          className={allClasses}
          style={variantStyle}
          whileHover={disabled ? {} : buttonHover}
          whileTap={disabled ? {} : { scale: 0.98 }}
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          {isLoading ? <span className="animate-spin mr-2 relative z-10">⟳</span> : null}
          <span className="relative z-10">{children}</span>
        </motion.span>
      </Link>
    );
  }

  // Render as a button if no href is provided
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={allClasses}
      style={variantStyle}
      whileHover={disabled ? {} : buttonHover}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      {isLoading ? <span className="animate-spin mr-2 relative z-10">⟳</span> : null}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;
