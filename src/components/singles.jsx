import React from "react";

// styles
import "../assets/styles/css/singles.min.css";

export default function Singles(props) {
  if (props.start) {
    return (
      <div className="singles-con">
        <div className="first-con">
          <div className="bio-con">
            <p className="bio">{props.bio}</p>
          </div>

          <div className="img-con ">
            <img src={props.img} alt={props.name} className="singleImg " />
          </div>
        </div>

        <div className="second-con">
          <div className="btn-con">
            <a href={props.github}>
              <button>GitHub</button>
            </a>
            <a href={props.rsg}>
              <button>Researchgate</button>
            </a>
            <a href={props.linkedin}>
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="singles-con-reverse">
        <div className="first-con">
          <div className="bio-con">
            <p className="bio">{props.bio}</p>
          </div>

          <div className="img-con ">
            <img src={props.img} alt={props.name} className="singleImg " />
          </div>
        </div>

        <div className="second-con">
          <div className="btn-con">
            <a href={props.github}>
              <button>GitHub</button>
            </a>
            <a href={props.rsg}>
              <button>Researchgate</button>
            </a>
            <a href={props.linkedin}>
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
