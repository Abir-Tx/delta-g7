import { motion } from "framer-motion";
// Styles
import "../assets/styles/css/about.min.css";

import React from "react";

export default function About() {
  return (
    <motion.div
      className="about-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vitae
        sunt eius fugiat sit amet! Facilis exercitationem laboriosam veniam
        amet.
      </p>
    </motion.div>
  );
}
