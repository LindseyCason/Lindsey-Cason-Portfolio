import React from "react";
import { Contact } from "./Contact";
import ContactForm from "./ContactForm";

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
      <Contact />
      {/* <ContactForm /> */}
    </div>
  );
};
