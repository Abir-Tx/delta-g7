import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/css/litReview.min.css";

export default function LitReview() {
  return (
    <motion.div
      className="litRev-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <div className="bg">
        <div className="title">
          <h1>Literature Review</h1>
          <div className="subtitle">
            <h5>IoT Based Heart Attack Detection</h5>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
