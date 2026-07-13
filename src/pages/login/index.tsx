import "../../styles/login.css";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>VaultIQ</h1>
        <p>AI-Powered Business Document Intelligence Platform</p>

        <form>
          <input type="email" placeholder="Enter your email" />

          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign In</button>
        </form>

        <small>Secure • Fast • Intelligent</small>
      </div>
    </div>
  );
}