// Imports
import React from "react";
import { motion } from "framer-motion";

// StyleSheet
import "../assets/styles/css/home.min.css";

export default function Home() {
  return (
    <motion.div
      className="home-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      // whileInView={{ scale: 1 }}
      // viewport={{ once: true }}
      layout
    >
      <section className="landing">
        <h1>Delta G7</h1>
        <h4>Microprocessor Course Group 7</h4>
      </section>

      <section>
        <div className="members-con">
          <div className="member"></div>
          <div className="member"></div>
          <div className="member"></div>
          <div className="member"></div>
          <div className="member"></div>
        </div>
      </section>
    </motion.div>
  );
}
