import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { TopMain } from "./components/topMain";
import { About } from "./components/about";
import { Projects } from "./components/projects";

function App() {
  return (
    <div>
      <Navigation />
      <div className="overlay">
        <div className="ContentDiv">
          <TopMain />
          <About />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
