import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/events">My Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/guests">Guests</Link></li>
            <li><Link to="/create-event">Create/Edit Event</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login/Signup</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
