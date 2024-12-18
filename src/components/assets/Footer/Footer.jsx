import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/Teddy.logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Company Description */}
        <div className="footer-section left-section">
          <div className="footer-logo">
            <img src={logo} alt="Teddy Dreams Logo" />
          </div>
          <h3 className="footer-title">TeddyDreams</h3>
          <p className="footer-description">
            Bringing joy and comfort through our carefully curated collection of teddy bears and soft toys.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="footer-section center-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shoppage">Shop</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/order-tracking">Order Tracking</Link></li>
          </ul>
        </div>

        {/* Right Section: Follow Us */}
        <div className="footer-section right-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook" className="icon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#twitter" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#instagram" className="icon"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 TeddyDreams. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
