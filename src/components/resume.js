import React from "react";
import R1 from "../utils/LindseyCasonResume1.jpg";
import R2 from "../utils/LindseyCasonResume2.jpg";
import R3 from "../utils/LindseyCasonResume3.jpg";
import { Contact } from "./Contact";

export const Resume = () => {
  return (
    <div>
      <div className="overlay">
        <div className="ContentDiv">
          <div className="topContent"> </div>
          <div className="title titleResume">Resume Information</div>
          <div className="resumeContainer">
            <Contact />
            <img src={R1} alt="resume page 1" className="resumePage" />
            <img src={R2} alt="resume page 2" className="resumePage" />
            <img src={R3} alt="resume page 3" className="resumePage" />
          </div>
        </div>
      </div>
    </div>
  );
};
