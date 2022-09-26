import React from "react";

// Pages
import Home from "../pages/home";
import Error from "../pages/error";

// Layouts
import About from "../pages/about";

// Components
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
