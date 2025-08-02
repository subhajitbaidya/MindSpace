import { useState } from "react";
import "./LoginPage.css";
import MindImage from "../assets/images/brain2.svg";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const response = await fetch(
      "http://localhost:5000/api/v0/auth/user/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("login success");
    } else {
      alert("User exists, please login!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <div className="logo">
            <div className="logo-icon">☁️</div>
            <span className="logo-text">MindMap</span>
          </div>

          <div className="form-content">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="user@example.com"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-icon">📧</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button className="sign-in-btn" onClick={handleSignup}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="auth-toggle">
              <span>Don't have an account? </span>
              <button
                className="link-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </div>

            <div className="copyright">
              <span>Copyright 2025 Mindmap.Inc</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="hero-content">
          <h1>
            Secure your Mental Health
            <br />
            And be yourself
            <br />
            With <span className="brand-highlight">MindMap</span>!
          </h1>

          <div className="hero-illustration">
            <div className="cloud-character">
              <div className="cloud-body">
                <div className="laptop">
                  <img src={MindImage} id="mind-image" />
                </div>
              </div>
              <div className="cloud-arms">
                <div className="arm-left"></div>
                <div className="arm-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
