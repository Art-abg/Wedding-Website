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
  // Base styling for all buttons
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 shadow-sm hover:shadow-md active:shadow-sm";

  // Variant-specific classes
  const variantClasses = {
    primary:
      "bg-forest hover:bg-forest/95 text-cream-100 focus:ring-forest border-forest/20 hover:border-forest/30",
    secondary:
      "bg-gold-500 hover:bg-gold-500/95 text-cream-100 focus:ring-gold-500 border-gold-500/20 hover:border-gold-500/30",
    outline:
      "border-2 border-forest text-forest hover:bg-forest/10 hover:border-forest/40 focus:ring-forest/50",
    subtle:
      "text-forest hover:text-forest-light hover:bg-sage-light/40 focus:ring-forest-light/50 border border-transparent hover:border-forest/20"
  };

  // Size-specific classes
  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
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
          {isLoading ? <span className="animate-spin mr-2">⟳</span> : null}
          {children}
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
          {isLoading ? <span className="animate-spin mr-2">⟳</span> : null}
          {children}
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
      {isLoading ? <span className="animate-spin mr-2">⟳</span> : null}
      {children}
    </motion.button>
  );
};

export default Button;
