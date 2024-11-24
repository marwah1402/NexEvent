import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "./contactController.js";
import { authenticateToken } from './authMiddleware.js'; // Assuming you have an authMiddleware.js for the authenticateToken

const router = express.Router();

// Add authenticateToken middleware to secure routes
router.get("/contacts", authenticateToken, getAllContacts);
router.get("/contacts/:id", authenticateToken, getContactById);
router.post("/contacts", authenticateToken, createContact);
router.put("/contacts/:id", authenticateToken, updateContact);
router.delete("/contacts/:id", authenticateToken, deleteContact);

export default router;
