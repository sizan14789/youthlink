import { Variants } from "motion";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  },
} satisfies Variants;

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  },
} satisfies Variants;


export const fadeLeftToRight = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  },
} satisfies Variants;

export const fadeRightToLeft = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  },
} satisfies Variants;

export const templateStaggerContainer = (duration: number) => {
  return { hidden: {}, show: { transition: { staggerChildren: duration }}} 
};


