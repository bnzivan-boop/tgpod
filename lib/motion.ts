import type { Variants, Transition } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const baseTransition: Transition = { duration: 0.7, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const staggerChildren = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const wordReveal: Variants = {
  hidden: { y: 24, opacity: 0, clipPath: "inset(0 0 100% 0)" },
  show: {
    y: 0,
    opacity: 1,
    clipPath: "inset(-20% -5% -20% -5%)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
