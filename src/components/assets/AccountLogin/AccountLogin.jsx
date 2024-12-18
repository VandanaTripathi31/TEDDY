import React from "react";
import "./AccountLogin.css";

const LoginPage = () => {
  return (
    <div className="container">
      {/* Page Header */}
      <h1 className="page-header">Molly Bears Account Login</h1>

      {/* Personal Information */}
      <div className="form-container">
        <div className="box">
          <h2 className="box-title">Personal Information</h2>
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="email" placeholder="Re-Enter Email Address" className="input-field" />
          <button className="box-btn">
            <i className="fas fa-user"></i> Submit Info
          </button>
        </div>

        {/* Account Password */}
        <div className="box">
          <h2 className="box-title">Account Password</h2>
          <input type="password" placeholder="Password" className="input-field" />
          <input type="password" placeholder="Re-Enter Password" className="input-field" />
          <p className="note">
            Password must include: 1 uppercase, 1 lowercase, 1 number, and 1 symbol.
          </p>
          <button className="box-btn">
            <i className="fas fa-lock"></i> Set Password
          </button>
        </div>

        {/* Terms & Conditions */}
        <div className="box">
          <h2 className="box-title">Terms & Conditions</h2>
          <div className="terms-section">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to Molly Bears Privacy Policy and Terms & Conditions.
            </label>
          </div>
          <button className="box-btn">
            <i className="fas fa-check-circle"></i> Agree & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
