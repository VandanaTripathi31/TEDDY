import React from "react";
import { useNavigate } from "react-router-dom"; // Import for page navigation
import './About.css'; // Import the CSS file for styling

const About = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleButtonClick = () => {
    navigate("/fullstory"); // Navigate to the 'fullstory' page
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="https://mollybears.org/templates/yootheme/cache/a7/Welcome-Home-a7bab10a.png"
            alt="Molly Bears"
          />
        </div>
        <div className="about-text">
          <h1 className="about-heading">About Us</h1>
          <h2 className="about-subheading">Welcome to Our Family</h2>
          <p>
            At Molly Bears, we create custom-made, high-quality stuffed animals
            designed to help people with emotional healing. Our mission is to
            provide comfort and love through the therapeutic powers of a cuddly
            companion. Each bear is uniquely handcrafted to meet the emotional
            needs of our customers, making it not just a toy, but a personal
            connection.
          </p>

          <button
            className="read-more-btn"
            onClick={handleButtonClick} // Navigate to Full Story page
          >
            <i className="fa-regular fa-bookmark" style={{ marginRight: "8px" }}></i>
            Read the Whole Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
