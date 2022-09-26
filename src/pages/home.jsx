// Imports
import React from "react";
import { motion } from "framer-motion";

// StyleSheet
import "../assets/styles/css/home.min.css";

// Images
import abirImg from "../assets/images/profile/abir.jpg";
import emonImg from "../assets/images/profile/emon.jpg";
import elmaImg from "../assets/images/profile/elma.jpg";
import sawonImg from "../assets/images/profile/sawon.jpg";
import urmiImg from "../assets/images/profile/urmi.jpg";

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
          <div className="member">
            <img src={abirImg} alt="Abir" className="img-fluid" />
            <a href="https://github.com/Abir-Tx">
              <button>GitHub</button>
            </a>
            <a href="">
              <button>Researchgate</button>
            </a>
            <a href="">
              <button>LinkedIn</button>
            </a>
          </div>
          <div className="member">
            <img src={elmaImg} alt="Elma" className="img-fluid" />
            <a href="#">
              <button>GitHub</button>
            </a>
            <a href="">
              <button>Researchgate</button>
            </a>
            <a href="https://www.linkedin.com/in/tarannum-elma-aaab67251/">
              <button>LinkedIn</button>
            </a>
          </div>
          <div className="member">
            <img src={sawonImg} alt="Sawon" className="img-fluid" />
            <a href="https://github.com/sawonmursalin">
              <button>GitHub</button>
            </a>
            <a href="">
              <button>Researchgate</button>
            </a>
            <a href="https://www.linkedin.com/in/sawon-mursalin-15426624a/">
              <button>LinkedIn</button>
            </a>
          </div>
          <div className="member">
            <img src={urmiImg} alt="Urmi" className="img-fluid" />
            <a href="https://github.com/suraiya-akter">
              <button>GitHub</button>
            </a>
            <a href="">
              <button>Researchgate</button>
            </a>
            <a href="https://www.linkedin.com/in/suraiya-akter-40355a251/">
              <button>LinkedIn</button>
            </a>
          </div>
          <div className="member">
            <img src={emonImg} alt="Emon" className="img-fluid" />
            <a href="https://github.com/AlJobair079">
              <button>GitHub</button>
            </a>
            <a href="https://www.researchgate.net/profile/Al-Jobair-Ataur">
              <button>Researchgate</button>
            </a>
            <a href="https://www.linkedin.com/in/al-jobair-emon-0a2557226/">
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
