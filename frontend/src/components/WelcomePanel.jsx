import "./WelcomePanel.css";
import logo from "../assets/logo.png";
export default function WelcomePanel() {
  return (
    <div className="welcome-panel">
      <h1>Welcome to Student Resources Portal</h1>
      <p>
        Manage your courses, resources, assignments, and stay updated with the latest announcements.
      </p>
      <img
        src={logo}
        alt="Welcome"
        className="welcome-image"
      />
    </div>
  );
}