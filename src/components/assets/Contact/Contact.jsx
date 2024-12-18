import React from "react";
import "./Contact.css";
import TeddyBear from "../images/Molly-Bears-Large-Bear-in-Box-2-95692e5d.webp";


const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <div className="contact-box">
        <h2 className="section-title">Contact Form</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <select className="input-field">
            <option>Choose A Contact Department</option>
            <option>Orders & Status</option>
            <option>Shop & Donations</option>
            <option>General Info</option>
          </select>
          <textarea placeholder="Your Message" className="textarea-field"></textarea>
          <div className="checkbox-container">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">
              Please subscribe me to the email newsletter.
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Submit Contact Request →
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="contact-box">
        <h2 className="section-title">Contact Info</h2>
        <img
          src={TeddyBear} /* Replace with your image */
          alt="Teddy Bear"
          className="contact-image"
        />
        <div className="info-box">
          <div>
            <h3>📩 Letters/Donations</h3>
            <p>PO Box 6896, Virginia Beach, VA 23456</p>
          </div>
          <div>
            <h3>📍 Mailing Address</h3>
            <p>868 Hopwood Lane, Virginia Beach, VA 23456</p>
          </div>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <div>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
