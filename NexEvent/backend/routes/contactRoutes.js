import express from "express";
import {
  createContactMessage,
  getAllContactMessages,
  getContactMessageById,
  deleteContactMessage,
} from "../controllers/contactController.js";

const router = express.Router();

// Public route to submit a contact message
router.post("/", createContactMessage);

// Protected routes (require admin authentication)
router.get("/", getAllContactMessages); // Get all messages
router.get("/:id", getContactMessageById); // Get a message by ID
router.delete("/:id", deleteContactMessage); // Delete a message by ID

export default router;
