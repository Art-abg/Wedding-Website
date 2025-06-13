import { Variants } from "framer-motion";

// Define animation types
export type AnimationType = "fadeIn" | "scaleUp" | "custom" | "slideIn" | "zoomIn" | "rotateIn" | "reveal" | "bounce";
export type AnimationDirection = "up" | "down" | "left" | "right" | "none";
export type AnimationTrigger = "scroll" | "hover" | "load" | "click";

// Enhanced fade-in animation variants with better spring physics
export const fadeIn = (direction: AnimationDirection = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      delay,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0], // Enhanced cubic bezier for smoother motion
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

// Enhanced scale animation variants
export const scaleUp: Variants = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 180,
      mass: 1.2,
      delay: 0.1,
    },
  },
};

// Slide in animation with configurable direction
export const slideIn = (direction: AnimationDirection = "up", delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 150,
      mass: 1,
      delay,
      duration: 1.0,
    },
  },
});

// Zoom in animation with configurable origin
export const zoomIn = (delay: number = 0, origin: string = "center"): Variants => ({
  hidden: { 
    opacity: 0, 
    scale: 1.2,
    transformOrigin: origin,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transformOrigin: origin,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay,
      duration: 0.9,
    },
  },
});

// Rotate in animation
export const rotateIn = (delay: number = 0, degrees: number = 10): Variants => ({
  hidden: { 
    opacity: 0, 
    rotate: degrees,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      delay,
      duration: 0.8,
    },
  },
});

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

// Enhanced button hover effects
export const buttonHover = {
  scale: 1.04,
  boxShadow: "0px 12px 24px rgba(156, 128, 74, 0.25)",
  transition: { type: "spring", stiffness: 400, damping: 8 }
};

// Button tap/click effect
export const buttonTap = {
  scale: 0.97,
  boxShadow: "0px 5px 10px rgba(156, 128, 74, 0.15)",
  transition: { type: "spring", stiffness: 500, damping: 15 }
};

// Interactive element hover effect
export const interactiveHover = {
  y: -5,
  boxShadow: "0px 10px 25px rgba(156, 128, 74, 0.2)",
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Enhanced decorative elements animation
export const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -12, 0],
    rotate: [0, 1, 0, -1, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 6,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1]
    }
  }
};

// Subtle pulse animation for attention
export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "easeInOut"
    }
  }
};

// Shimmer effect for decorative elements
export const shimmerEffect: Variants = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear"
    }
  }
};

// Scroll-triggered rotation for decorative elements
export const scrollRotate = (degrees: number = 10): Variants => ({
  offscreen: { rotate: 0 },
  onscreen: {
    rotate: degrees,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      duration: 1.2
    }
  }
});

// Enhanced image reveal animation
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1.0], // Enhanced cubic bezier for smoother motion
    }
  }
};

// Text reveal animation for headings
export const textReveal = (delay: number = 0): Variants => ({
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1], // Custom easing for text
    }
  }
});

// Staggered character animation for elegant text reveals
export const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
};

// Scroll-triggered parallax effect with configurable intensity
export const scrollParallax = (intensity: number = 0.2): Variants => ({
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * intensity,
    transition: { type: "spring", stiffness: 50, damping: 30 }
  })
});

// Scroll-triggered reveal animation
export const scrollReveal: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// Scroll-triggered zoom effect for images
export const scrollZoom = (scale: number = 1.1): Variants => ({
  initial: { scale: 1 },
  whileInView: {
    scale,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
});
