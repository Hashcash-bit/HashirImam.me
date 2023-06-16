// Important react dep
import React from "react";

// Importing the Animation
import { motion } from "framer-motion";

// Importing the styling
import "./Animations.css";

// Initializing the animation
const pageVariants = {
  enter: {
    opacity: 0,
    x: "100%",
  },
  center: {
    opacity: 1,
    x: "0%",
  },
  exit: {
    opacity: 0,
    x: "-100%",
  },
};

const Animations = ({ children }) => {
  return (
    <motion.div
      className="slide"
      initial="enter"
      animate="center"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Animations;
