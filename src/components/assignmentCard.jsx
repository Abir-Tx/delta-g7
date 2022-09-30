import React from "react";
import "../assets/styles/css/assignmentCard.min.css";

export default function AssignmentCard(props) {
  return (
    <div>
      <div class="accordion-item">
        <h2 class="accordion-header" id={props.hId}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={props.conIdHash}
            aria-expanded="true"
            aria-controls={props.conId}
          >
            {props.name}
          </button>
        </h2>
        <div
          id={props.conId}
          class={`accordion-collapse collapse ${props.show ? "show" : ""}`}
          aria-labelledby={props.hId}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="am-boxes">
              <div className="am1" onClick={(e) => window.open(props.link)}>
                <h2>Asignment {props.amNo}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
