import "./WelcomePanel.css";

export default function WelcomePanel() {
  return (
    <div className="welcome-panel">
      <h1>Welcome to Student Portal</h1>
      <p>
        Manage your courses, resources, assignments, and stay updated with the latest announcements.
      </p>
      <img
        src="https://undraw.co/api/illustrations/8b5b3c8a-bb44-4c79-9e60-70be6e6c4c5d"
        alt="Welcome"
        className="welcome-image"
      />
    </div>
  );
}