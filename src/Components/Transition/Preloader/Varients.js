/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0.85,
    transition: { duration: 2, delay: 0.1 },
  },
};
