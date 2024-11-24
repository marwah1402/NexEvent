import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./userRoutes.js"; // Correct path for userRoutes
import contactRoutes from "./contact.js"; // Correct path to contact.js
import { authenticateToken } from './authMiddleware.js'; // Import the auth middleware for authentication
import { registerUser, loginUser } from './userControllers.js'; // Import the functions to handle registration and login
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON data in requests

const PORT = process.env.PORT || 8080; // Use dynamic port if available

// MongoDB Connection
const uri = process.env.MONGO_URI; // Use environment variable for MongoDB URI

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Middleware to log all requests (for debugging)
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the NexEvent application." });
});

// Public Routes for User Registration and Login
app.post("/api/users/register", registerUser); // Register a new user
app.post("/api/users/login", loginUser);       // User Login

// Protected Routes (requires authentication)
app.use("/api/users", authenticateToken, userRoutes); // Protect all user routes with authenticateToken

// Contact Routes (assuming you have these defined in contact.js)
app.use("/api/contacts", contactRoutes); // Assign contact routes under '/api/contacts'

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
