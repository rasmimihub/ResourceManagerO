import { FaUser, FaLock } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./LoginForm.css";

export default function AdminLoginForm({ switchToUserLogin }) {
  return (
    <div className="login-form-card">
      <img src={logo} alt="Admin Portal Logo" className="logo" />
      <h2>Admin Login</h2>
      <form>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Admin Username" required />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Admin Password" required />
        </div>
        <button className="login-btn" type="submit">
          Login as Admin
        </button>
      </form>
      <div className="register-row">
        <p>
          Want user login?{' '}
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={switchToUserLogin}>
            Go to User Login
          </span>
        </p>
      </div>
    </div>
  );
}