import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./LoginForm.css"; // Reuse styles for consistency
import logo from "../assets/logo.png";

export default function RegistrationForm({ switchToLogin }) {
  return (
    <div className="login-form-card">
      <img
        src={logo}
        alt="Student Portal Logo"
        className="logo"
      />
      <h2>Create Account</h2>
      <p className="subtitle">Register to access your resources</p>
      <form>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button className="login-btn" type="submit">
          Register
        </button>
        <div className="divider">
          <span>OR</span>
        </div>
      
      </form>
      <div className="register-row">
       <p>
        Already have an account?{' '}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={switchToLogin}>
          Login here
        </span>
      </p>
      </div>
    </div>
  );
}