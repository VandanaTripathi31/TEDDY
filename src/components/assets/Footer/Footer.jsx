import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Logo and Welcome Message */}
      <div className="footer-logo">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqwnDlBICcYHp3Fx14w5YY-S14P5xlloWYA&s" 
          alt="Logo" 
          className="footer-logo-image" 
        />
        <p className="footer-text">
          Welcome to our Molly Bears Family. We are saddened over the loss of each precious child and strive to bring hope and healing.
        </p>
        <p className="footer-text">
          We create weighted teddy bears for families coping with any form of infant loss. We'll be here for you, we know you'll be here for us too.
        </p>
      </div>
      <hr className="footer-divider" />

      {/* Quick Links */}
      <div className="footer-links">
        <h3 className="footer-heading">Quick Links</h3>
        <ul>
          <li><a href="/fullstory">Our Story</a></li>
          <li><a href="#">Get a Molly Bear</a></li>
          <li><a href="#">Donations</a></li>
          <li><a href="/my-account">Account Login</a></li>
          <li><a href="#">Branding</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <hr className="footer-divider" />

      {/* Donations */}
      <div className="footer-donations">
        <h3 className="footer-heading">Donations</h3>
        <p className="footer-text">PO Box 61998</p>
        <p className="footer-text">Virginia Beach, VA 23466</p>
      </div>
      <hr className="footer-divider" />

      {/* Mailing Address */}
      <div className="footer-address">
        <h3 className="footer-heading">Mailing Address</h3>
        <p className="footer-text">868 Hopwood Lane</p>
        <p className="footer-text">Virginia Beach, VA 23455</p>
      </div>
      <hr className="footer-divider" />

      {/* Social Media */}
      <div className="footer-social">
        <h3 className="footer-heading">Follow Us</h3>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <button className="account-button">My Account</button>
      </div>
    </footer>
  );
};

export default Footer;
