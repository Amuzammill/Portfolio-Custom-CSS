import React from 'react';
import '@/app/styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="input-field"
          required
        />
        <textarea
          rows={6}
          placeholder="Message"
          className="text-area"
          required
        ></textarea>
        <div className="button-container">
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
