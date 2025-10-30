import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import AdminLoginForm from './AdminLoginForm';
import ForgotPasswordForm from './ForgotPasswordForm'; // <-- Add this!

export default function AuthForm() {
  const [view, setView] = useState("userLogin"); // "userLogin", "register", "adminLogin", "forgot"

  return (
    <div>
      {view === "userLogin" && (
        <LoginForm
          switchToRegister={() => setView("register")}
          switchToAdminLogin={() => setView("adminLogin")}
          switchToForgot={() => setView("forgot")}
        />
      )}
      {view === "register" && (
        <RegistrationForm switchToLogin={() => setView("userLogin")} />
      )}
      {view === "adminLogin" && (
        <AdminLoginForm switchToUserLogin={() => setView("userLogin")} />
      )}
      {view === "forgot" && (
        <ForgotPasswordForm switchToLogin={() => setView("userLogin")} />
      )}
    </div>
  );
}