import express from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  authorizeRole, // Middleware for role-based authorization
} from "./userControllers.js";
import { authenticateToken } from './authMiddleware.js'; // Correct import for authentication middleware

const router = express.Router();

// Public Routes
router.post("/register", registerUser); // User Registration (No authentication required)
router.post("/login", loginUser); // User Login (No authentication required)

// Protected Routes (authentication required)
router.get("/", authenticateToken, getAllUsers); // Get all users (authentication required)
router.get("/:id", authenticateToken, getUserById); // Get user by ID (authentication required)
router.put("/:id", authenticateToken, updateUser); // Update user (authentication required)
router.delete(
  "/:id",
  authenticateToken, // Authentication required
  authorizeRole("admin"), // Only admin can delete users
  deleteUser // Delete user
);

export default router;
