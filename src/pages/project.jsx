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
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </div>
    </div>
  );
}
