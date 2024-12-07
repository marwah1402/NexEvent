import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = ({ isLoggedIn, setIsLoggedIn, isAdmin }) => { // Added isAdmin as a prop
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token"); // Clear token on logout
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>My Events</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/create-event" className={({ isActive }) => isActive ? "active" : ""}>Create/Edit Event</NavLink>
            </li>
            {/* Show Admin Dashboard link only for admin users */}
            {isAdmin && (
              <li>
                <NavLink to="/admin-dashboard" className={({ isActive }) => isActive ? "active" : ""}>Admin Dashboard</NavLink>
              </li>
            )}
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login/Signup</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
