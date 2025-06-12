import { Variants } from 'framer-motion';
import { fadeIn, scaleUp, AnimationType, AnimationDirection } from './MotionVariants';

/**
 * Safe wrapper for animation variants that ensures all required parameters are provided
 * This resolves TypeScript errors by providing default values for all parameters
 */
export const getAnimationVariant = (
  type: AnimationType = 'fadeIn',
  direction: AnimationDirection = 'up',
  delay: number = 0
): Variants => {
  switch (type) {
    case 'fadeIn':
      return fadeIn(direction, delay);
    case 'scaleUp':
      return scaleUp;
    default:
      return fadeIn(direction, delay);
  }
};

// Re-export base animation variants for direct use
export { fadeIn, scaleUp };
