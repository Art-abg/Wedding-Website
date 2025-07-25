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
    "inline-flex items-center justify-center font-medium rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group";

  // Variant-specific classes with enhanced styling
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-forest to-forest-dark hover:from-forest-dark hover:to-forest text-cream-100 focus:ring-forest/50 border-forest/30 hover:border-forest/50 shadow-forest/20 hover:shadow-forest/30",
    secondary:
      "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-cream-100 focus:ring-gold-500/50 border-gold-500/30 hover:border-gold-600/50 shadow-gold-500/20 hover:shadow-gold-600/30",
    outline:
      "border-2 border-forest text-forest hover:bg-forest hover:text-cream-100 hover:border-forest-dark focus:ring-forest/50 bg-transparent hover:shadow-forest/20",
    subtle:
      "text-forest hover:text-forest-light hover:bg-gradient-to-r hover:from-sage-light/60 hover:to-cream-100/60 focus:ring-forest-light/50 border border-transparent hover:border-forest/30 backdrop-blur-sm"
  };

  // Size-specific classes with enhanced proportions
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm font-semibold tracking-wide",
    md: "px-8 py-3.5 text-base font-semibold tracking-wide",
    lg: "px-12 py-4.5 text-lg font-semibold tracking-wider"
  };

  // Disabled state classes
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";

  // Combine all classes
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  // Render as an anchor tag if href is provided
  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          className={allClasses}
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
