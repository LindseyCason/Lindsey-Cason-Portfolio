import React, { useState, useEffect } from "react";
import { FormStyles } from "./FormStyles";

const ContactForm = (props) => {
  const { showModal, toggleLoading } = props;

  const initialMessage = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [newMessage, setNewMessage] = useState(initialMessage);
  const { name, phone, email, message } = newMessage;

  // Handler Functions
  const handleInputChange = (e) => {
    setNewMessage({
      ...newMessage,
      [e.target.id]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (name && email && message) {
      e.preventDefault();
      toggleLoading(true);
      setNewMessage(initialMessage);
      showModal(e);
    }
  };

  return (
    <form autoComplete="off">
      <button onClick={showModal} className="close-btn">
        x
      </button>

      <div className="form-header">
        <h1>Contact Me</h1>
      </div>

      <div className="form-inputs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={name}
          placeholder="Name"
          required
        />
      </div>

      <div className="form-inputs">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={handleInputChange}
          value={phone}
          placeholder="Phone Number"
        />
      </div>

      <div className="form-inputs">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={email}
          placeholder="Email"
          required
        />
      </div>

      <div className="form-inputs">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleInputChange}
          value={message}
          placeholder="Message"
          required
        />
      </div>

      <button type="submit" onClick={handleFormSubmit}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
