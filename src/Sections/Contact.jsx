import React from "react";
import "../Css/Contact.css"; // Make sure you create this CSS file

const Contact = () => {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container">
        <div className="contact-image">
          <img src="/Images/ctc.jpg" alt="Contact" />
        </div>
        <form className="contact-form">
          <h2 className="form-title">📬 Send Us a Message</h2>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" rows="5" required />
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
