import React from "react";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItem">
        <a href="mailto:lindseyacason@gmail.com" className="footerIcon">
          <i class="far fa-envelope"></i>
        </a>
      </div>

      <div className="footerItem">
        <a href="https://github.com/LindseyCason" className="footerIcon">
          <i class="fa fa-github"></i>
        </a>
      </div>

      <div className="footerItem">
        <a href="tel:+15045643792" className="footerIcon">
          <i class="fas fa-phone"></i>
        </a>
      </div>

      <div className="footerItem">
        <a
          href="https://www.linkedin.com/in/lindseyacason/"
          className="footerIcon"
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
