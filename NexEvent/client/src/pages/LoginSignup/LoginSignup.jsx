import React, { useState } from "react";
import "./LoginSignup.css";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import personIcon from "../../assets/person.png";

const LoginSignup = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin
        ? "http://localhost:8080/api/auth/login"
        : "http://localhost:8080/api/auth/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isLogin ? { email, password } : { name, email, password }
        ),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          // Save the token in localStorage
          localStorage.setItem("token", data.token);
          console.log("Token saved to localStorage:", data.token);

          alert("Login successful!");
          setIsLoggedIn(true); // Update login status
        } else {
          alert(data.message || "User registered successfully!");
          setIsLogin(true); // Switch to login view after successful signup
        }
      } else {
        alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          {/* Conditionally show Name field for Sign Up */}
          {!isLogin && (
            <div className="input-group">
              <img src={personIcon} alt="Person Icon" className="icon" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-primary">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={handleToggle} className="toggle-text">
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
