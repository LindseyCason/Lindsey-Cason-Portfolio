import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import { Footer } from "../components/footer";
import { TopMain } from "../components/topMain";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Navigation } from "../components/navigation";
import Contact from "../components/Contact";

function Home() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <div className="overlay">
            <div className="ContentDiv">
              <TopMain />
              <About />
              <Projects />
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
