import React from "react";

export const TopMain = () => {
  return (
    <div
      className="topMain"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="smallText">Hi, my name is</div>
      <div className="nameText">Lindsey Cason.</div>
      <div className="topContent">
        <p>
          I am a software developer based in New Orleans, LA. I specialize in
          building high-quality websites and applications.
        </p>
      </div>
      <form action="#contact" method="get" target="_blank">
        <button className="resumeLink">Let's Connect</button>
      </form>
    </div>
  );
};
