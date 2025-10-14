export default function LoginForm() {
  return (
    <div className="login-form">
      <div className="logo">Logo</div>
      <h2>Login</h2>
      <label>
        Enter your account details
        <input type="text" placeholder="Email or Username" />
      </label>
      <label>
        <input type="password" placeholder="Password" />
      </label>
      <a href="#">Forgot password?</a>
      <button>Login</button>
      <div>OR</div>
      <button>Login as admin</button>
      <div>
        Don't have an account? <a href="#">Register</a>
      </div>
    </div>
  );
}