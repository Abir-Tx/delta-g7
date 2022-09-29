import React from "react";

// Images
import abirImg from "../assets/images/profile/abir.jpg";
import emonImg from "../assets/images/profile/emon.jpg";
import elmaImg from "../assets/images/profile/elma.jpg";
import sawonImg from "../assets/images/profile/sawon.jpg";
import urmiImg from "../assets/images/profile/urmi.jpg";

// Data
import details from "../assets/data/details.json";

// Stylesheet
import "../assets/styles/css/members.min.css";

export default function Members() {
  return (
    <>
      <div className="members-con">
        <div className="row">
          <div className="col  mx-1">
            <div className="member">
              <img src={abirImg} alt="Abir" className="img-fluid" />
              <div className="btn-con">
                <a href={details["abir"][0].github}>
                  <button>GitHub</button>
                </a>
                <a href={details["abir"][0].rsg}>
                  <button>Researchgate</button>
                </a>
                <a href={details["abir"][0].linkedin}>
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col  mx-1">
            <div className="member">
              <img src={elmaImg} alt="Elma" className="img-fluid" />
              <div className="btn-con">
                <a href={details["elma"][0].github}>
                  <button>GitHub</button>
                </a>
                <a href={details["elma"][0].rsg}>
                  <button>Researchgate</button>
                </a>
                <a href={details["elma"][0].linkedin}>
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col  mx-1">
            <div className="member">
              <img src={sawonImg} alt="Sawon" className="img-fluid" />
              <div className="btn-con">
                <a href={details["sawon"][0].github}>
                  <button>GitHub</button>
                </a>
                <a href={details["sawon"][0].rsg}>
                  <button>Researchgate</button>
                </a>
                <a href={details["sawon"][0].github}>
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col  mx-1">
            <div className="member">
              <img src={urmiImg} alt="Urmi" className="img-fluid" />
              <div className="btn-con">
                <a href={details["urmi"][0].github}>
                  <button>GitHub</button>
                </a>
                <a href={details["urmi"][0].rsg}>
                  <button>Researchgate</button>
                </a>
                <a href={details["urmi"][0].linkedin}>
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col  mx-1">
            <div className="member">
              <img src={emonImg} alt="Emon" className="img-fluid" />
              <div className="btn-con">
                <a href={details["emon"][0].github}>
                  <button>GitHub</button>
                </a>
                <a href={details["emon"][0].rsg}>
                  <button>Researchgate</button>
                </a>
                <a href={details["emon"][0].linkedin}>
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
