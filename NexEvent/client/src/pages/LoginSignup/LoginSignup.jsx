import React, { useState } from "react";
import "./LoginSignup.css";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import personIcon from "../../assets/person.png";

const LoginSignup = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
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
              <input type="text" placeholder="Name" required />
            </div>
          )}
          <div className="input-group">
            <img src={emailIcon} alt="Email Icon" className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <img src={passwordIcon} alt="Password Icon" className="icon" />
            <input type="password" placeholder="Password" required />
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
