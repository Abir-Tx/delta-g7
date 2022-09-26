import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AnimatedRoutes from "./routes/AnimatedRoutes";

// Automatic theme switching
window.matchMedia("(prefers-color-scheme: dark)").matches
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

// Driver code
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
