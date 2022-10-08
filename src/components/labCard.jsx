import React from "react";
import "../assets/styles/css/labCard.min.css";

export default function LabCard(props) {
  return (
    <>
      <div class="col">
        <div class="card h-100 shadow hoverable ">
          <img
            src={props.image}
            class="card-img-top"
            alt={props.title}
            height="450rem"
          />
          <div class="card-body text-black">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text ">
              {props.desc}
              <p className="text-center p-2">
                <a target="_blank" href={props.link} rel="noreferrer">
                  <div className="btn btn-primary">Full Explore</div>
                </a>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
