import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AnimatedRoutes from "./routes/AnimatedRoutes";

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
