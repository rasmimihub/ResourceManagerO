import LoginForm from './LoginForm';
import WelcomePanel from './WelcomePanel';
import './LoginLayout.css';

export default function LoginLayout() {
  return (
    <div className="layout-container">
      <div className="login-section">
        <LoginForm />
      </div>
      <div className="welcome-section">
        <WelcomePanel />
      </div>
    </div>
  );
}