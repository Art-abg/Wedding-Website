import { Variants } from "framer-motion";

// Define animation types
export type AnimationType = "fadeIn" | "scaleUp" | "custom";
export type AnimationDirection = "up" | "down" | "left" | "right" | "none";

// Fade-in animation variants
export const fadeIn = (direction: AnimationDirection = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 17,
      stiffness: 100,
      delay,
      duration: 0.6,
    },
  },
});

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Parallax scroll variants
export const parallax = (speed: number = 0.1): Variants => ({
  initial: { y: 0 },
  scroll: {
    y: speed * 100,
    transition: {
      ease: "linear",
      type: "tween",
    }
  }
});

// Scale animation variants
export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 200,
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Button hover effects
export const buttonHover = {
  scale: 1.03,
  boxShadow: "0px 10px 20px rgba(156, 128, 74, 0.2)",
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Decorative elements animation
export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3,
      ease: "easeInOut"
    }
  }
};

// Image reveal animation
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
