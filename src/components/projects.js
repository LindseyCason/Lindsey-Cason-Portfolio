import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading bsClass="alertHeading">How's it going?!</Alert.Heading>
        <p>
          If you're seeing this, this portion of the page is still under
          construction! Please feel free to check out my resume which can be
          accessed by clicking the button below! <br></br>I look forward to
          connecting with you soon!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-light">
            <a href="/resume">Take me to the resume!</a>
          </Button>
          <hr></hr>
          <Button onClick={() => setShow(false)} variant="outline-info">
            Just close
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button onClick={() => setShow(true)} variant="outline-light">
          Under Construction
        </Button>
      )}
    </>
  );
}

export const Projects = () => {
  return (
    <div
      className="projectContainer"
      id="myWork"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="title">
        <div>My Work</div>
      </div>
      <AlertDismissible />
      <div className="projects">
        {/* <div className="projectItem">
          <div>
            <a href="#">My Project</a>
            <img src="#" alt="alt text" />
          </div>
          <span>
            This is a description of a project.
            <p>Tech Stack:</p>
          </span>
        </div>
        <div className="projectItem">
          <div>
            <a href="#">My Project</a>
            <img src="#" alt="alt text" />
          </div>
          <span>
            This is a description of a project.
            <p>Tech Stack:</p>
          </span>
        </div>
        <div className="projectItem">
          <div>
            <a href="#">My Project</a>
            <img src="#" alt="alt text" />
          </div>
          <span>
            This is a description of a project.
            <p>Tech Stack:</p>
          </span>
        </div> */}
      </div>
    </div>
  );
};
