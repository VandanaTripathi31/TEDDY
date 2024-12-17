import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <header className="about-header">
        <div className="logo">
          <img src="path_to_logo.png" alt="Molly Bears Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="about-main">
        {/* About Section */}
        <section className="about-introduction">
          <h1>About Molly Bears</h1>
          <p>
            Molly Bears is dedicated to creating handmade teddy bears that bring joy and comfort to families.
            We specialize in custom teddy bears that reflect the memory of loved ones, providing a tangible connection to cherished moments.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring comfort, healing, and love through our handcrafted teddy bears. We believe that a teddy bear is not just a toy, but a piece of love that can be cherished forever.
          </p>
        </section>

        {/* Image Section */}
        <section className="about-images">
          <h2>Our Bears</h2>
          <div className="image-gallery">
            <img src="bear_image1.jpg" alt="Teddy Bear 1" />
            <img src="bear_image2.jpg" alt="Teddy Bear 2" />
            <img src="bear_image3.jpg" alt="Teddy Bear 3" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2024 Molly Bears | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default About;
