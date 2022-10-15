import React from "react";
import "../../assets/styles/css/theory.min.css";
import { motion } from "framer-motion";
import meeting1Img from "../../assets/images/meeting/meeting1.png";

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

      <div className="classAct">
        <h3 className="p-4">Class Activities</h3>
        <div class="card m-4">
          <h5 class="card-header bg-primary">Class 1</h5>
          <div class="card-body bg-info">
            <h5 class="card-title">No Activity Available</h5>
            <p class="card-text">Currently there are no activities of class</p>
            <a href="#" class="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>

      <div className="meeting">
        <h3 className="p-4">Group Meeting</h3>
        <div className="imageGrids">
          <img className="meeting1" src={meeting1Img} alt="Meeting 1" />
          <h5 className="text-center">Meeting 1</h5>
        </div>
      </div>
    </motion.div>
  );
}
