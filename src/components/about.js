import React from "react";

export const About = () => {
  return (
    <div className="aboutContainer">
      <div
        className="topAboutContainer"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
        id="about"
      >
        <div className="titleAndAbout">
          <div className="title">
            <a href id="about">
              <div>About Me</div>
            </a>
          </div>
          <div className="aboutText">
            <p>
              Hi! I'm Lindsey! I'm a software developer based in New Orleans, LA
              who loves to build and problem solve websites and web
              applications.
            </p>
            <p>
              My journey to software development began as a youngster building
              Angelfire websites (HTML/CSS) about whatever was cool in the 90's.
              I went on to study graphic design and like many others, I quickly
              realized that was not where my passion lied. I wanted to build
              websites and applications, things that can be both creative and
              solve problems, not logos and brochures.
            </p>
            <p>
              I did some research and took my first software development course
              at Operation Spark where we focused on HTML, CSS and Javascript.
              After completion, I decided to continue my education with Lambda
              School. I enrolled in the immersive Full-Stack Web Development
              program. My time at Lambda School has taught me, not only software
              development (see skills below), but leadership skills, teamwork
              and the importance of understanding the problem/goal and planning
              ahead.
            </p>
          </div>
        </div>
        <div className="imageAndWorkingContainer">
          <div className="lindseyImageContainer">
            <img
              src="https://avatars2.githubusercontent.com/u/29295649?s=460&u=6149da2d563258cac24f923c71ec5d14f353464b&v=4"
              className="lindseyImage"
              alt="Headshot of Lindsey"
            />
          </div>

          <div className="workingWithText">
            My Recent Technologies
            <div className="table">
              <div className="tright">
                <div>
                  <i class="fab fa-js-square"></i>
                </div>
                <div>
                  <i class="fab fa-html5"></i>
                </div>
                <div>
                  <i class="fab fa-css3-alt"></i>
                </div>
                <div>
                  <i class="fab fa-react"></i>
                </div>
                <div>
                  <i class="fab fa-python"></i>
                </div>
                <div>
                  <i class="fab fa-java"></i>
                </div>
                <div>
                  <i class="fab fa-node-js"></i>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
