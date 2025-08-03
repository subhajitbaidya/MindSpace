import { useState } from "react";
import "./LoginPage.css";
import MindImage from "../assets/images/brain2.svg";
import { IoPersonCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUnlockAlt } from "react-icons/fa";
import SplashCursor from "../components/SplashCursor";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const response = await fetch("/api/v0/auth/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert(`Signup success for ${username.split(" ")[0]}`);
    } else {
      alert("User exists, please login!");
    }
  };

  const handleLogin = async () => {
    const response = await fetch("/api/v0/auth/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert(`login success`);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form">
          <div className="logo">
            <div className="logo-icon">🌿</div>
            <span className="logo-text">MindSpace</span>
          </div>

          <div className="form-content">
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="email"
                    placeholder="eg - john doe"
                    className="form-input"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span className="input-icon">
                    <IoPersonCircle />
                  </span>
                </div>
              </div>
            )}
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
                <span className="input-icon">
                  <MdEmail />
                </span>
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
                  {showPassword ? <FaUnlockAlt /> : <RiLockPasswordFill />}
                </button>
              </div>
            </div>

            <button className="sign-in-btn" onClick={handleSubmit}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="auth-toggle">
              <span>
                {isSignUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
              </span>
              <button
                className="link-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </div>

            <div className="copyright">
              <span>Copyright 2025 MindSpace.Inc</span>
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
            With <span className="brand-highlight">MindSpace</span>!
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
