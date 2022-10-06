import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/css/litReview.min.css";
import LitReviewCard from "../components/litReviewCard";
import pdfFile from "../assets/data/pdf/project-proposal.pdf";

// images
import abirImg from "../assets/images/profile/abir.jpg";
import emonImg from "../assets/images/profile/emon.jpg";
import elmaImg from "../assets/images/profile/elma.jpg";
import sawonImg from "../assets/images/profile/sawon.jpg";
import urmiImg from "../assets/images/profile/urmi.jpg";

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
          image={elmaImg}
          pdf={pdfFile}
          review="Hey this is a test"
          refName="elma"
        />

        <LitReviewCard
          image={sawonImg}
          pdf={pdfFile}
          review="Hey this is a test"
          refName="sawon"
        />

        <LitReviewCard
          image={urmiImg}
          pdf={pdfFile}
          review="Hey this is a test"
          refName="urmi"
        />

        <LitReviewCard
          image={emonImg}
          pdf={pdfFile}
          review="Hey this is a test"
          refName="emon"
        />
      </div>
    </motion.div>
  );
}
