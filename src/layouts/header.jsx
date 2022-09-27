import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

// Stylesheets
import "../assets/styles/css/header.min.css";
// Components

export default function Header(props) {
  const [darkmode, setDarkMode] = useState(false);

  function handleMode() {
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
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/lit-review">Litarature Review</NavLink>
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
