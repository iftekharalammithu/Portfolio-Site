// Modify the slideUp object for animation from top 0 to 100px
export const slideDown = {
  initial: {
    y: -100, // Start at 0px from the top
  },
  enter: {
    y: 0, // Move to 100px down
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};
