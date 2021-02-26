import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Resume } from "./components/resume";
import { Navigation } from "./components/navigation";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <div className="overlay">
            <div className="ContentDiv">
              <Navigation />
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/resume" exact component={Resume} /> <Footer />
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
