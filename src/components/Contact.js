import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

export class Contact extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <button
          onClick={this.onOpenModal}
          className="navLinks navDesk resumeLink"
        >
          Let's Connect!
        </button>
        <Modal open={open} onClose={this.onCloseModal} className="contactModal">
          <p className="modalTitle">Let's Connect!</p>
          <p className="aboutText">
            Feel free to drop me a line! You have a few options below...
          </p>
          <h3 className="modalTextH">Email</h3>
          <p className="aboutText">
            <a href="mailto:LindseyACason@gmail.com" className="modalTextL">
              LindseyACason@gmail.com
            </a>
          </p>
          <h3 className="modalTextH">Call/Text</h3>
          <p className="aboutText">
            <a href="tel:+15045643792" className="modalTextL">
              504-564-3792
            </a>
          </p>
          <h3 className="modalTextH">LinkedIn</h3>
          <p className="aboutText">
            <a
              href="https://www.linkedin.com/in/lindseyacason/"
              className="modalTextL"
            >
              LindseyACason
            </a>
          </p>
        </Modal>
      </div>
    );
  }
}
