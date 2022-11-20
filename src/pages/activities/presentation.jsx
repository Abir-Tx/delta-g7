import React from "react";
import "../../assets/styles/css/presentation.min.css";

export default function Presentation() {
  return (
    <div>
      <div className="presCon">
        <h2>Presentation</h2>

        <div className="embed-con">
          <iframe
            className="pres"
            title="pre"
            src="https://onedrive.live.com/embed?cid=9E31E8D6AB27977A&resid=9E31E8D6AB27977A%211354&authkey=AANkzz9QL6W0nvI&em=2"
            width="1000px"
            height="500px"
            frameborder="0"
          >
            This is an embedded{" "}
            <a target="_blank" href="https://office.com">
              Microsoft Office
            </a>{" "}
            presentation, powered by{" "}
            <a target="_blank" href="https://office.com/webapps">
              Office
            </a>
            .
          </iframe>

          <div className="desc">
            <p>
              The presentation is primarily made on out project by all of our
              members. You can view the presentation slide on the left side or
              you can view our recorded presentation by clicking the button
              below
            </p>
            <a href="https://drive.google.com/file/d/1ix06JcXna5NHnZhyZxy7bN1Ii_0BWlhe/view?usp=sharing">
              <div className="btn btn-primary">Open The Presentation</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
