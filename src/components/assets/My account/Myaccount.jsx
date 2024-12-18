import React from "react";
import "./Myaccount.css"; // Updated CSS file
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <h1 className="header">Molly Bears Account Login</h1>

      {/* Login Section */}
      <div className="login-container">
        <form className="login-form">
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {/* Right-Side Benefits */}
        <div className="benefits-section">
          <h2>Why Sign Up For an Account?</h2>
          <ul className="benefits-list">
            <li>🐾 Safe & Free</li>
            <li>🐾 View Your Donations</li>
            <li>🐾 Place an Order</li>
            <li>🐾 Manage Your Orders</li>
            <li>🐾 Track Your Shop Orders</li>
            <li>🐾 Get Support</li>
          </ul>

          <div className="buttons-section">
          <Link to = "/signup">
          < button className="create-account-btn">
              Create A Free Account
            </button>
            </Link>
            <button className="forgot-password-btn">
              Forgot Your Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
