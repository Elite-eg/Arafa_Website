import type { Variants } from "framer-motion";

// ─── Shared Easing ───
export const easeOutCubic: [number, number, number, number] = [0.33, 1, 0.68, 1];
export const easeInOutCubic: [number, number, number, number] = [0.65, 0, 0.35, 1];

// ─── Fade In Up ───
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
};

// ─── Fade In Down ───
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutCubic,
    },
  },
};

// ─── Fade In Left ───
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
};

// ─── Fade In Right ───
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutCubic,
    },
  },
};

// ─── Scale In ───
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOutCubic,
    },
  },
};

// ─── Stagger Container ───
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger Container Fast ───
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ─── Hero Text Reveal ───
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOutCubic,
    },
  },
};

// ─── Hero Stagger ───
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ─── Slide In From Bottom ───
export const slideInBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutCubic,
    },
  },
};

// ─── Card Hover ───
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// ─── Button Tap ───
export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

// ─── Viewport Settings ───
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

// ─── Floating Element ───
export const floatingElement: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ─── Rotate Slow ───
export const rotateSlow: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
