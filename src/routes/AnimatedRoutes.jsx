import React from "react";

// Pages
import Home from "../pages/home";
import Error from "../pages/error";

// Layouts
import About from "../pages/about";

// Components
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Project from "../pages/project";
import Assignments from "../pages/assignments";
import LitReview from "../pages/litReview";
import Theory from "../pages/activities/theory";
import Lab from "../pages/activities/lab";
import Presentation from "../pages/activities/presentation";

export default function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/lit-review" element={<LitReview />} />
        <Route path="/activities/theory" element={<Theory />} />
        <Route path="/activities/lab" element={<Lab />} />
        <Route path="/activities/presentation" element={<Presentation />} />
      </Routes>
    </AnimatePresence>
  );
}
