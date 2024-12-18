import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingBag,
  faUser,
  faBook,
  faUsers,
  faCommentDots,
  faPaw,
  faInfoCircle,
  faQuestionCircle,
  faEnvelope,
  faHeadset,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"; // Replace with your logo path

const Navbar = () => {
  const [dropdownStory, setDropdownStory] = useState(false);
  const [dropdownBear, setDropdownBear] = useState(false);
  const [dropdownContact, setDropdownContact] = useState(false);

  const navigate = useNavigate(); // React Router hook for navigation

  const handleAccountRedirect = () => {
    navigate("/my-account"); // Redirect to your account page route
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li
            className="dropdown-parent"
            onMouseEnter={() => setDropdownStory(true)}
            onMouseLeave={() => setDropdownStory(false)}
          >
            <a href="/fullstory">Our Story</a>
            {dropdownStory && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faBook} className="dropdown-icon" />
                    Molly Bears Story
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUsers} className="dropdown-icon" />
                    Molly Bears Team
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="dropdown-icon"
                    />
                    Testimonials
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            className="dropdown-parent"
            onMouseEnter={() => setDropdownBear(true)}
            onMouseLeave={() => setDropdownBear(false)}
          >
            <a href="#get-a-bear">Get a Bear</a>
            {dropdownBear && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPaw} className="dropdown-icon" />
                    Request a Bear
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="dropdown-icon"
                    />
                    Bear Details
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="dropdown-icon"
                    />
                    Bear FAQs
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <a href="/shop">Shop</a>
          </li>

          <li
            className="dropdown-parent"
            onMouseEnter={() => setDropdownContact(true)}
            onMouseLeave={() => setDropdownContact(false)}
          >
            <a href="#contact">Contact</a>
            {dropdownContact && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="dropdown-icon"
                    />
                    Email Us
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className="dropdown-icon"
                    />
                    Support Team
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="dropdown-icon"
                    />
                    Locations
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Icons and Account */}
        <div className="navbar-right">
          {/* Redirect Button */}
          <button className="my-account-btn" onClick={handleAccountRedirect}>
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            My Account
          </button>
          <div className="icons">
            <FontAwesomeIcon icon={faShoppingBag} className="icons" />
            <FontAwesomeIcon icon={faFacebookF} className="icons" />
            <FontAwesomeIcon icon={faInstagram} className="icons" />
            <FontAwesomeIcon icon={faTiktok} className="icons" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
