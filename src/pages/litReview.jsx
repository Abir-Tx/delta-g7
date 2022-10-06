import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/css/litReview.min.css";
import LitReviewCard from "../components/litReviewCard";
import abirImg from "../assets/images/profile/abir.jpg";
import pdfFile from "../assets/data/pdf/project-proposal.pdf";

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

      <div className="cards">
        <LitReviewCard
          image={abirImg}
          pdf={pdfFile}
          review="This is a test review"
          refName="abir"
        />

        <LitReviewCard
          image={abirImg}
          pdf={pdfFile}
          review="Hey this is a test"
          refName="elma"
        />
      </div>
    </motion.div>
  );
}
