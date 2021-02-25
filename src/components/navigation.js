import React from "react";
import L from "../utils/L.png";
// import Nav from "react-bootstrap/Nav";

export const Navigation = () => {
  const dropdownShow = () => {
    var el = document.getElementById("mobNavA");
    console.log(el);
    // el.classList.add("NavDropdownOff")
  };

  return (
    <div className="navContainer">
      <img src={L} alt="L logo" className="icon" />
      <div className="navItem">
        <a href="/" className="navLinks navDesk">
          HOME
        </a>
      </div>

      <div className="navItem">
        <a href="/about" className="navLinks navDesk">
          ABOUT
        </a>
      </div>

      <div className="navItem">
        <a href="/projects" className="navLinks navDesk">
          WORK
        </a>
      </div>

      <div className="navItem">
        <a href="/contact" className="navLinks navDesk">
          CONTACT
        </a>
      </div>

      <div className="navItem">
        <a href="/resume" className="navLinks navDesk resumeLink">
          RESUME
        </a>
      </div>

      <div className="menu-wrap">
        <input className="toggler" type="checkbox"></input>
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#myWork">MY WORK</a>
                </li>
                <li>
                  <a href="#contact">CONTACT</a>
                </li>
                <li>
                  <a href="#resume">RESUME</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="mobnavLinks"> <a href="#about" className="navLinks">ABOUT</a></div>
                    <div className="mobnavLinks"><a  href="#myWork" className="navLinks">WORK</a></div>
                    <div className="mobnavLinks"><a href="#contact" className="navLinks">CONTACT</a></div>
                    <div className="mobnavLinks"><a href="#resume" className="navLinks">RESUME</a></div> */}
      </div>
    </div>
  );
};
