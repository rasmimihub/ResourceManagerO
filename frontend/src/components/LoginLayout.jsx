import AuthForm from './AuthForm';          
import WelcomePanel from './WelcomePanel';
import './LoginLayout.css';

export default function LoginLayout() {
  return (
    <div className="layout-container">
      <div className="login-section">
        <AuthForm />                        {/* <-- Use AuthForm here */}
      </div>
      <div className="welcome-section">
        <WelcomePanel />
      </div>
    </div>
  );
}