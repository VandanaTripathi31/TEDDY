import React, { useState } from "react";
import "./FullStory.css"; // Import the CSS file for styling

const FullStory = () => {
  // State to track if the full story is visible
  const [showFullStory, setShowFullStory] = useState(false);

  // Function to toggle the full story visibility
  const toggleFullStory = () => {
    setShowFullStory(!showFullStory);
  };

  return (
    <div className="fullstory-page">
      <div className="fullstory-container">
        {/* Header Section */}
        <div className="story-header">
          <h1 className="story-title">Molly Bears Story</h1>
          <nav className="breadcrumb">
            <a href="#">HOME</a> &gt; <a href="#">OUR STORY</a> &gt; <span>MOLLY BEARS STORY</span>
          </nav>
        </div>

        {/* Main Content Section */}
        <div className="main-content">
          <div className="image-section">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRBPwRoDYbnw5O7TD1BtopzcnJ9DVKnAYeL_5QpoR3Oxvw8hcY9EfnSmgJh92f7ofwic&usqp=CAU" 
              alt="Molly Bear Story" 
              className="circular-image"
            />
          </div>
          <div className="text-section">
            <h2 className="story-author">Bridget Crews</h2>
            <h3 className="story-subtitle">Here is the story of Molly Christine:</h3>
            <p>
              We lost our angel, <strong>Molly Christine</strong> at 34 weeks, on May 30th 2010. I had not felt our active girl all day on the 29th. That night I went to the hospital to get checked and make sure Molly was alright. We were told that our precious daughter no longer had a heartbeat. She died from a tight true knot in her cord. Devastated would not even begin to describe how we felt.
            </p>

            {/* Conditional rendering of extended story */}
            {showFullStory && (
              <p className="story-extended">
                I was given a weighted teddy bear from a dear friend from high school. This bear weighed three pounds. In an effort to have a bear that weighed the same as Molly, I bought a shell and a package of rice. In the middle of the produce aisle, I carefully weighed rice, fluff, and the shell. I am sure people thought I was crazy, but I did not care. I went home and with my children and husband, we created the very first <strong>Molly Bear</strong>. For the first time in weeks, I was able to sleep holding her. It was then that I knew I had to find a way to help other angel families.
              </p>
            )}

            {/* Read More / Read Less Button */}
            <button className="read-more-button" onClick={toggleFullStory}>
              {showFullStory ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Highlighted Section */}
        <div className="highlight-section">
          <h3>"We have created</h3>
          <h1 className="highlight-number">29,199 Molly Bears</h1>
          <img 
            src="https://pluffyy.com/cdn/shop/products/product-image-1806636771.jpg?v=1636158170" 
            alt="Molly Bear" 
            className="highlight-image"
          />
        </div>

        {/* Below Statistics Section */}
        <div className="molly-highlight-section">
          <h2 className="highlight-title">Molly Bears: More than Just a Bear</h2>
          <div className="highlight-container">
            <div className="highlight-image">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUS1ui0qYD05XCOWL-yTwFX9odxnQBcYlEw&s" 
                alt="Molly Bear Handmade" 
              />
            </div>
            <div className="highlight-text">
              <p>
                Molly Bears provide comfort and healing to families who have lost their angels. Each bear is customized to weigh the same as the baby, creating a tangible memory to hold. Our volunteers and supporters make it possible for us to bring smiles and healing to countless homes across the world.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <h2>Molly Bears Statistics</h2>
          <ul>
            <li><strong>Molly Bears Created:</strong> 29,199</li>
            <li><strong>Pounds of Fluff Used:</strong> ~27,739</li>
            <li><strong>Pounds of Sand Used:</strong> ~4,520,261</li>
            <li><strong>Current Volunteers:</strong> 24</li>
            <li><strong>Hospital Partners:</strong> 35</li>
            <li><strong>Countries Shipped To:</strong> 50</li>
          </ul>
          <p className="stats-note">*All calculations are approximate with a last update as of December 17, 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default FullStory;