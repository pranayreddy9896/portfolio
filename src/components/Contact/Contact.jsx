import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const SocialLinks = () => (
  <div className="social-links flex gap-4 mt-4">
    <a href="https://www.linkedin.com/in/pranayreddy0904/" target="_blank" rel="noopener noreferrer" className="text-white-500">LinkedIn</a>
    <a href="https://github.com/pranayreddy9896" target="_blank" rel="noopener noreferrer" className="text-white-500">GitHub</a>
    <a href="pranayreddy9896@gmail.com" className="text-red-500">Email Me</a>
  </div>
);

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8b7f9694-86a2-4788-babb-17a9e5ebcb78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage("✅ Message sent successfully!");
        event.target.reset(); // Reset form after submission
      } else {
        setStatusMessage("❌ Error sending message. Try again.");
      }
    } catch (error) {
      setStatusMessage("❌ Network error. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p> Reach out for  job opportunities, collaborations, or just to connect!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>pranayreddy9896@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+91 8184930483</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Hyderabad, Telangana</p>
            </div>
          </div>
          <SocialLinks /> {/* Added Social Links Below Contact Details */}
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Your Email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
