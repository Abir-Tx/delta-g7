// Imports
import React from "react";
import { motion } from "framer-motion";

// StyleSheet
import "../assets/styles/css/home.min.css";

import Members from "../components/members";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="home-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      // whileInView={{ scale: 1 }}
      layout
    >
      <section className="landing">
        <h1>Delta G7</h1>
        <h4>Microprocessor Course Group 7</h4>
      </section>

      <section>
        <Members />
      </section>

      <section className="project-sec p-4">
        <div className="row bg-primary p-3 align-items-center">
          <div className="col">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slashgear.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fraspberry-pi-4-8gb-1.jpg&f=1&nofb=1&ipt=aedb821b389862b7d8d17c92b82fd295cce28e1814b9fd9518236bc54528ed00&ipo=images"
              alt="Project"
              className="img-fluid"
            />
          </div>
          <div className="col proj-det-con p-4">
            <div className="title-con">
              <h3>IoT Based Heart Attack Detector</h3>
            </div>
            <div className="desc-con">
              <p>
                We are working on making an{" "}
                <b>IoT based heart attack detector</b>. This is our proposed
                project for this course. With the help of our honorable Sir, we
                are currently working on this project. Click below to know full
                details about this project of ours
              </p>
            </div>

            <div className="btn-con text-center m-3">
              <button
                className="btn btn-outline-light btn-lg"
                onClick={(e) => navigate("/project")}
              >
                More On Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
