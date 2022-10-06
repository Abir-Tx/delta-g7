import "../assets/styles/css/litReviewCard.min.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useState } from "react";
import { useEffect } from "react";
import backupDetails from "../assets/data/details.json";

export default function LitReviewCard(props) {
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
    <div className="litRevCard-con">
      <div className="title-con">
        <img
          src={props.image}
          alt={details[props.refName][0].name}
          className="title-img"
        />
        <h2>{details[props.refName][0].name}</h2>
      </div>

      <div className="pdf-con">
        <a href={details[props.refName][0].litRevLink}>
          <Document file={props.pdf}>
            <Page pageNumber={1} height={500} />
            <p className="fullView">Full View</p>
          </Document>
        </a>

        <div className="revText-con">
          <h4>Short Summary</h4>
          <p>{props.review}</p>

          <div className="ref-con">
            <h4>References</h4>

            {Object.keys(details[props.refName][0]["refs"][0]).map((key, i) => (
              <a href={details[props.refName][0]["refs"][0][key]}>
                <div className="btn btn-primary p-2 m-2">{key}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
