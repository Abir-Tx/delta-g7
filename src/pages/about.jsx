import { motion } from "framer-motion";

// Styles
import "../assets/styles/css/about.min.css";

// images
import abirImg from "../assets/images/profile/abir.jpg";
import emonImg from "../assets/images/profile/emon.jpg";
import elmaImg from "../assets/images/profile/elma.jpg";
import sawonImg from "../assets/images/profile/sawon.jpg";
import urmiImg from "../assets/images/profile/urmi.jpg";
import shidujamanImg from "../assets/images/profile/shidujaman-sir.jpg";

import React from "react";

import mpImg from "../assets/images/microProc.png";
import Singles from "../components/singles";

import details from "../assets/data/details.json";

export default function About() {
  return (
    <motion.div
      className="about-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <h1>About</h1>
      <div className="about-con">
        <div className="row align-items-center">
          <div className="col">
            <img src={mpImg} alt="Microprocessor" />
          </div>

          <div className="col">
            <p className="text-center ">
              A microprocessor is a computer processor where the data processing
              logic and control is included on a single integrated circuit, or a
              small number of integrated circuits. The microprocessor contains
              the arithmetic, logic, and control circuitry required to perform
              the functions of a computer's central processing unit. The
              integrated circuit is capable of interpreting and executing
              program instructions and performing arithmetic operations.[1] The
              microprocessor is a multipurpose, clock-driven, register-based,
              digital integrated circuit that accepts binary data as input,
              processes it according to instructions stored in its memory, and
              provides results (also in binary form) as output. Microprocessors
              contain both combinational logic and sequential digital logic, and
              operate on numbers and symbols represented in the binary number
              system. The integration of a whole CPU onto a single or a few
              integrated circuits using Very-Large-Scale Integration (VLSI)
              greatly reduced the cost of processing power. Integrated circuit
              processors are produced in large numbers by highly automated
              metal-oxide-semiconductor (MOS) fabrication processes, resulting
              in a relatively low unit price. Single-chip processors increase
              reliability because there are much fewer electrical connections
              that could fail. As microprocessor designs improve, the cost of
              manufacturing a chip (with smaller components built on a
              semiconductor chip the same size) generally stays the same
              according to Rock's law.
            </p>
          </div>
        </div>

        <h1>Instructor</h1>
        <div className="instructor-con">
          <Singles
            bio={details["shidujaman"][0].bio}
            img={shidujamanImg}
            name={details["shidujaman"][0].name}
            github={details["shidujaman"][0].github}
            rsg={details["shidujaman"][0].rsg}
            linkedin={details["shidujaman"][0].linkedin}
            start={true}
          />
        </div>

        <h1>Group Members</h1>
        <div className="single-members">
          <Singles
            bio={details["abir"][0].bio}
            img={abirImg}
            name={details["abir"][0].name}
            github={details["abir"][0].github}
            rsg={details["abir"][0].rsg}
            linkedin={details["abir"][0].linkedin}
            start={false}
          />

          <Singles
            bio={details["elma"][0].bio}
            img={elmaImg}
            name={details["elma"][0].name}
            github={details["elma"][0].github}
            rsg={details["elma"][0].rsg}
            linkedin={details["elma"][0].linkedin}
            start={true}
          />

          <Singles
            bio={details["sawon"][0].bio}
            img={sawonImg}
            name={details["sawon"][0].name}
            github={details["sawon"][0].github}
            rsg={details["sawon"][0].rsg}
            linkedin={details["sawon"][0].linkedin}
            start={false}
          />

          <Singles
            bio={details["urmi"][0].bio}
            img={urmiImg}
            name={details["urmi"][0].name}
            github={details["urmi"][0].github}
            rsg={details["urmi"][0].rsg}
            linkedin={details["urmi"][0].linkedin}
            start={true}
          />

          <Singles
            bio={details["emon"][0].bio}
            img={emonImg}
            name={details["emon"][0].name}
            github={details["emon"][0].github}
            rsg={details["emon"][0].rsg}
            linkedin={details["emon"][0].linkedin}
            start={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
