import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/css/project.min.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../assets/data/pdf/Project-proposal-updated.pdf";
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
    <motion.div
      className="project-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
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

          <p className="text-center">
            <a
              href="https://drive.google.com/file/d/14Fh8_siluIxJKd_B-vvnZZya_AFECrlC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn btn-primary">Open the Proposal</div>
            </a>
          </p>
        </div>
      </div>

      <div className="survey-con">
        <h2>Survey Questions</h2>

        <div className="embed-con">
          <div className="desc">
            <p>
              We asked the audience about these questions and got the responses
              which are discussed below
            </p>

            <a
              href="https://forms.office.com/r/wEv9ayHj43"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="btn btn-primary m-4">Open The Survey</div>
            </a>
          </div>
          <iframe
            className="survey"
            title="survey"
            width="750vw"
            height="780px"
            src="https://forms.office.com/r/wEv9ayHj43?embed=true"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            allowfullscreen
            webkitallowfullscreen
            mozallowfullscreen
            msallowfullscreen
          />
        </div>
      </div>
    </motion.div>
  );
}
