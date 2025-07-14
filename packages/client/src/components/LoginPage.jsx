import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <div className="logo">
            <div className="logo-icon">☁️</div>
            <span className="logo-text">CloudSpace</span>
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

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
                <small>Save my login details for next time.</small>
              </label>
            </div>

            <button className="sign-in-btn">
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

            <div className="social-buttons">
              <button className="social-btn google-btn">
                <span className="social-icon">G</span>
                Sign in with Google
              </button>
              <button className="social-btn facebook-btn">
                <span className="social-icon">f</span>
                Sign in with Facebook
              </button>
              <button className="social-btn apple-btn">
                <span className="social-icon">🍎</span>
                Sign in with Apple
              </button>
            </div>

            <div className="copyright">
              <span>Copyright 2024 CloudSpace Corporation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="hero-content">
          <h1>
            Securely Upload And Store
            <br />
            Your Important Documents
            <br />
            With <span className="brand-highlight">CloudSpace</span>!
          </h1>

          <div className="hero-illustration">
            <div className="cloud-character">
              <div className="cloud-body">
                <div className="cloud-face">
                  <div className="cloud-eye"></div>
                  <div className="cloud-smile"></div>
                </div>
                <div className="laptop">💻</div>
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
