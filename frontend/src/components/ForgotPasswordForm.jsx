import React, { useState } from 'react';
import logo from "../assets/logo.png";
import "./LoginForm.css";

export default function ForgotPasswordForm({ switchToLogin }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email to the backend
    alert(`Password reset link will be sent to ${email}`);
  };

  return (
    <div className="login-form-card">
      <img src={logo} alt="Student Portal Logo" className="logo" />
      <h2>Forgot Password</h2>
      <p className="subtitle">Enter your email address to reset your password</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="login-btn" type="submit">
          Send Reset Link
        </button>
      </form>
      <div className="register-row">
        <p>
          Remembered your password?{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={switchToLogin}>
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}