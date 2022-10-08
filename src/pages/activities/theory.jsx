import React from "react";
import "../../assets/styles/css/theory.min.css";
import { motion } from "framer-motion";

export default function Theory() {
  return (
    <motion.div
      className="theory-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className="title-con">
        <h2>Theory Activities</h2>
      </div>
    </motion.div>
  );
}
