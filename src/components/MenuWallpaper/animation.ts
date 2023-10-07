export default {
  initial: {
    scale: 0.75,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.12,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: {
      ease: "easeIn",
      duration: 0.12,
    },
  },
};
