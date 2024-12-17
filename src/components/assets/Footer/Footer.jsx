import React from "react";
import "./Footer.css"; // Link to a CSS file or Tailwind for styles

const Footer = () => {
  return (
    <footer className="footer">
      {/* Cloud design */}
      <div className="clouds"></div>
      
      <div className="footer-content">
        <h2 className="logo">
          <span>Molly</span> Bears
        </h2>
        <p>
          Welcome to our Molly Bears Family. We are saddened over the loss of
          each precious child and strive to bring hope and healing.
        </p>
        {/* Footer Sections */}
      </div>
      <div className="footer-sections">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Our Story</li>
            <li>Get a Molly Bear</li>
            <li>Donations</li>
            <li>Account Login</li>
            <li>Branding</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="donations">
          <h3>Donations</h3>
          <p>PO Box 61998</p>
          <p>Virginia Beach, VA 23466</p>
        </div>

        <div className="mailing-address">
          <h3>Mailing Address</h3>
          <p>868 Hopwood Lane</p>
          <p>Virginia Beach, VA 23455</p>
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
          </div>
          <button className="account-btn">My Account</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Molly Bears | All Rights Reserved</p>
        <div className="links">
          <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
