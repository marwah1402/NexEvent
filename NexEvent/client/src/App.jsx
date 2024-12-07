import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Events from "./pages/Events/Events";
import EventDetails from "./pages/EventDetails/EventDetails";
import Guests from "./pages/Guests/Guests";
import Gallery from "./pages/Gallery/Gallery";
import CreateEditEvent from "./pages/CreateEditEvent/CreateEditEvent";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks user login status
  const [isAdmin, setIsAdmin] = useState(false); // Tracks if the user is an admin

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        console.log("Decoded Token:", decoded); // Debugging
        const userRole = decoded.role; // Extract role
        setIsLoggedIn(true);
        setIsAdmin(userRole === "admin"); // Check if user is admin
      } catch (error) {
        console.error("Error decoding token:", error); // Handle decoding issues
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    }
  }, []);

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/events"
          element={
            isLoggedIn ? (
              <Events />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/events/:id"
          element={
            isLoggedIn ? (
              <EventDetails />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/guests"
          element={
            isLoggedIn ? (
              <Guests />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/gallery"
          element={
            isLoggedIn ? (
              <Gallery />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/create-event"
          element={
            isLoggedIn ? (
              <CreateEditEvent />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && isAdmin ? (
              <AdminDashboard />
            ) : (
              <LoginSignup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
