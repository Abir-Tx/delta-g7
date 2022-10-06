import React, { useEffect, useState } from "react";
import backupDetails from "../assets/data/details.json";
import "../assets/styles/css/assignments.min.css";
import AssignmentCard from "../components/assignmentCard";
import { motion } from "framer-motion";

export default function Assignments() {
  const [details, setTest] = useState(backupDetails);
  useEffect(() => {
    fetch("https://jsonblob.com/api/jsonBlob/1026725589796798464")
      .then((response) => response.json())
      .then((data) => setTest(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <motion.div
      className="assignments-page"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <div className="assignments-bg">
        <h1>Assignments</h1>
      </div>

      <div class="accordion accor-con" id="accordionExample">
        <AssignmentCard
          name={details["abir"][0].name}
          amNo="1"
          link={details["abir"][0]["assignment"][0].ass1}
          hId="acc1"
          conId="con1"
          conIdHash="#con1"
          show={true}
        ></AssignmentCard>

        <AssignmentCard
          name={details["elma"][0].name}
          amNo="1"
          link={details["elma"][0]["assignment"][0].ass1}
          hId="acc2"
          conId="con2"
          conIdHash="#con2"
        ></AssignmentCard>

        <AssignmentCard
          name={details["sawon"][0].name}
          amNo="1"
          link={details["sawon"][0]["assignment"][0].ass1}
          hId="acc3"
          conId="con3"
          conIdHash="#con3"
        ></AssignmentCard>

        <AssignmentCard
          name={details["urmi"][0].name}
          amNo="1"
          link={details["urmi"][0]["assignment"][0].ass1}
          hId="acc4"
          conId="con4"
          conIdHash="#con4"
        ></AssignmentCard>

        <AssignmentCard
          name={details["emon"][0].name}
          amNo="1"
          elma={details["emon"][0]["assignment"][0].ass1}
          hId="acc5"
          conId="con5"
          conIdHash="#con5"
        ></AssignmentCard>
      </div>
    </motion.div>
  );
}
