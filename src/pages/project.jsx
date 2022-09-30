import React, { useState } from "react";
import "../assets/styles/css/project.min.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../assets/data/pdf/sample.pdf";
export default function Project() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  return (
    <div className="project-con">
      <div className="bg">
        <div className="title">
          <h1>Project</h1>
          <div className="subtitle">
            <h5>IoT Based Heart Attack Detection</h5>
          </div>
        </div>
      </div>

      <div className="desc">
        <p>
          <span>W</span>e, Delta G7 have to do a project for this course
          instructed & under the survailance of our honorable sir Dr. Mohammad
          Shidujaman. The project must be applied in a real life application or
          scenario. We are allowed to use <b>Uno, Pico, Rasberry Pi</b> boards
          for the heart of our project.
        </p>
      </div>

      <div className="proposal">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
          <div className="navigation">
            {pageNumber > 1 && (
              <button onClick={changePageBack}>
                <p>&larr;</p>
              </button>
            )}
            <p>
              Page {pageNumber} of {numPages}
            </p>
            {pageNumber < numPages && (
              <button onClick={changePageNext}>
                <p>&rarr;</p>
              </button>
            )}
          </div>
        </Document>

        <div className="propDesc">
          <h2>Project Proposal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consectetur, fuga deserunt quos repellat, voluptatibus ducimus iste
            obcaecati illo commodi officiis aspernatur beatae nostrum ipsum
            aperiam. Aliquid alias expedita veniam?
          </p>
        </div>
      </div>
    </div>
  );
}
