import React from "react";
import "../assets/styles/css/assignments.min.css";
import AssignmentCard from "../components/assignmentCard";
import details from "../assets/data/details.json";

export default function Assignments() {
  return (
    <div className="assignments-page">
      <div className="assignments-bg">
        <h1>Assignments</h1>
      </div>

      <div class="accordion" id="accordionExample">
        <AssignmentCard
          name={details["abir"][0].name}
          amNo="1"
          link="https://drive.google.com/file/d/1XAivjrcOoWEWC221fayGDGEyqLA9ixbR/view?usp=sharing"
          hId="acc1"
          conId="con1"
          conIdHash="#con1"
        ></AssignmentCard>

        <AssignmentCard
          name={details["elma"][0].name}
          amNo="1"
          link="#"
          hId="acc2"
          conId="con2"
          conIdHash="#con2"
        ></AssignmentCard>
      </div>
    </div>
  );
}
