import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Stylesheets
import "../assets/styles/css/header.min.css";
// Components

export default function Header(props) {
  const [darkmode, setDarkMode] = useState(false);

  function handleMode() {
    // Close the dropdown if the user clicks outside of it
    window.onclick = function (e) {
      if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
        }
      }
    };
    setDarkMode(!darkmode);

    darkmode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }

  useEffect(() => {
    var checkBox = document.getElementById("modeCheckBox");
    if (document.body.classList.contains("dark")) {
      checkBox.checked = true;
      checkBox.value = true;
      console.log(checkBox.checked);
      console.log(document.getElementById("modeCheckBox").value);
    } else {
      checkBox.checked = false;
    }
  }, []);

  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {/* <NavLink to="/project">Project</NavLink> */}
            {/* TODO: use react router hash link npm package here */}
            <li>
              <div class="dropdown">
                <button
                  class="dropbtn"
                  onClick={(e) =>
                    document
                      .getElementById("projectDropdown")
                      .classList.toggle("show")
                  }
                >
                  Project
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content" id="projectDropdown">
                  <HashLink to="/project">Overview</HashLink>
                  <HashLink to="/project#proposal">Proposal</HashLink>
                  <HashLink to="/project#survey">Survey Question</HashLink>
                  <HashLink to="/project#surveyRes">Survey Result</HashLink>
                  <HashLink to="/project#projGall">Components Gallery</HashLink>
                  <HashLink to="/project#compoCost">Cost Analysis</HashLink>
                </div>
              </div>
            </li>
          </li>

          <li>
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li>
            <NavLink to="/lit-review">Litarature Review</NavLink>
          </li>
          {/* <li> */}
          {/* <NavLink to="/performance">Performance</NavLink> */}
          {/* </li> */}
          <li>
            <div class="dropdown">
              <button
                class="dropbtn"
                onClick={(e) =>
                  document.getElementById("myDropdown").classList.toggle("show")
                }
              >
                Activities
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content" id="myDropdown">
                <NavLink to="/activities/theory">Theory</NavLink>
                <NavLink to="/activities/lab">Lab</NavLink>
                <NavLink to="/activities/presentation">Presentation</NavLink>
              </div>
            </div>
          </li>

          <li>
            <label className="switch">
              <input
                id="modeCheckBox"
                type="checkbox"
                onChange={(e) => handleMode()}
                alt="Dark Mode"
              />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
}
