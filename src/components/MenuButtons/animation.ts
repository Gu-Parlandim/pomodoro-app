export default {
  initial: {
    opacity: 0,
    bottom: "0",
    transform: "translateX(-50%)",
  },
  animate: {
    opacity: 1,
    bottom: "20px",
    transition: {
      ease: "easeOut",
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    bottom: "1px",
    transition: {
      ease: "easeIn",
      duration: 0.15,
    },
  },
};
