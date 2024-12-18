import React from "react";
import "./ProcessSteps.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faPaw,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const ProcessSteps = () => {
  return (
    <div className="process-container">
      {/* Title */}
      <h2 className="process-title">Our Process</h2>
      <h3 className="process-subtitle">How To Get a Molly Bear</h3>

      {/* Steps */}
      <div className="steps-wrapper">
        <div className="step">
          <div className="circle">
            <span className="step-number">1</span>
            <FontAwesomeIcon icon={faUser} className="step-icon" />
          </div>
          <h4>Create an Account</h4>
          <p>Visit our login page to create a free Molly Bears account.</p>
        </div>

        <div className="step">
          <div className="circle">
            <span className="step-number">2</span>
            <FontAwesomeIcon icon={faClipboardList} className="step-icon" />
          </div>
          <h4>Place Your Order</h4>
          <p>Fill out your order and pay the necessary fees.</p>
        </div>

        <div className="step">
          <div className="circle">
            <span className="step-number">3</span>
            <FontAwesomeIcon icon={faPaw} className="step-icon" />
          </div>
          <h4>Production</h4>
          <p>Your order is assigned to a Bear Artist after the waitlist time.</p>
        </div>

        <div className="step">
          <div className="circle">
            <span className="step-number">4</span>
            <FontAwesomeIcon icon={faTruck} className="step-icon" />
          </div>
          <h4>Ships</h4>
          <p>When completed, your Molly Bear will be shipped to you to cuddle!</p>
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
<p className="delivery-text">
  <span role="img" aria-label="ship">🚚</span> 
  We Deliver Happiness Everywhere! 
  <span role="img" aria-label="world">🌐</span>
</p>

    </div>
  );
};

export default ProcessSteps;
