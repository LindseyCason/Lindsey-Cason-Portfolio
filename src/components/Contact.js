import React from "react";

function Contact() {
  return (
    <div className="contactContainer">
      <div
        className="contactContainer"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
        id="contact"
      >
        <div>
          {/* <div className="c"> */}
          <div className="ContentDiv">
            <div className="titleContact">LET'S CHAT!</div>

            <div className="contactContent">
              <ul className="contactList">
                <li>
                  Email:
                  <a href="mailto:lindseyacason@gmail.com">
                    LindseyACason@gmail.com
                  </a>
                </li>

                <li>
                  Text/Call: <a href="tel:+15045643792">(504) 564-3792</a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/lindseyacason/">
                    lindseyacason
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Contact;
