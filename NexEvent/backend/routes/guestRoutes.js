import express from "express";
import {
    addGuest,
    getGuestsByEvent,
    updateGuestRSVP,
    deleteGuest,
    sendInvitations,
} from "../controllers/guestController.js";

const router = express.Router();

// Routes for guest management
router.post("/", addGuest); // Add a new guest
router.get("/:eventId", getGuestsByEvent); // Get all guests for an event
router.put("/:id", updateGuestRSVP); // Update RSVP for a guest
router.delete("/:id", deleteGuest); // Delete a guest
router.post("/send-invitations", sendInvitations); // Simulate sending invitations

export default router;
