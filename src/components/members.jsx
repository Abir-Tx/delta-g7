import React from "react";

// Images
import abirImg from "../assets/images/profile/abir.jpg";
import emonImg from "../assets/images/profile/emon.jpg";
import elmaImg from "../assets/images/profile/elma.jpg";
import sawonImg from "../assets/images/profile/sawon.jpg";
import urmiImg from "../assets/images/profile/urmi.jpg";

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
                <a href="https://github.com/Abir-Tx">
                  <button>GitHub</button>
                </a>
                <a href="https://www.researchgate.net/profile/Mushfiqur-Abir">
                  <button>Researchgate</button>
                </a>
                <a href="https://www.linkedin.com/in/mushfiqur-rahman-abir/">
                  <button>LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col  mx-1">
            <div className="member">
              <img src={elmaImg} alt="Elma" className="img-fluid" />
              <div className="btn-con">
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
            </div>
          </div>
          <div className="col  mx-1">
            <div className="member">
              <img src={sawonImg} alt="Sawon" className="img-fluid" />
              <div className="btn-con">
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
            </div>
          </div>

          <div className="col  mx-1">
            <div className="member">
              <img src={urmiImg} alt="Urmi" className="img-fluid" />
              <div className="btn-con">
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
            </div>
          </div>

          <div className="col  mx-1">
            <div className="member">
              <img src={emonImg} alt="Emon" className="img-fluid" />
              <div className="btn-con">
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
          </div>
        </div>
      </div>
    </>
  );
}
