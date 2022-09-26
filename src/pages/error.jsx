import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Styles
import "../assets/styles/css/error.min.css";

export default function Error() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="error-con"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className="img-con">
        <img
          src="https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png"
          alt="Error"
        />
      </div>

      <div className="error-text-con">
        <h1>Ooops ! Page not found</h1>
        <p>
          Looks like the page you are looking for has not been created by Abir
          yet
        </p>
      </div>

      <div className="thingstodo">
        <h2>Things You Can Do Now</h2>
        <ul>
          <li
            onClick={() => {
              navigate("/home");
            }}
          >
            {" "}
            Go To The Homepage
          </li>
          <li
            onClick={() => {
              navigate(-1);
            }}
          >
            Go To The Previous Page
          </li>
          <li>
            <a href="mailto:mushfiqurrohomanabir@gmail.com">
              Contact The Admin About This Page
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
