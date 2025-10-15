import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css";
import logo from "../assets/logo.png";

export default function LoginForm() {
  return (
    <div className="login-form-card">
      <img
        src={logo}
        alt="Student Portal Logo"
        className="logo"
      />
      <h2>Welcome Back</h2>
      <p className="subtitle">Sign in to access your resources</p>
      <form>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Email or Username" required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" required />
        </div>
        <div className="forgot-row">
          <a href="#">Forgot password?</a>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="admin-btn" type="button">
          Login as Admin
        </button>
      </form>
      <div className="register-row">
        Don't have an account? <a href="#">Register</a>
      </div>
    </div>
  );
}