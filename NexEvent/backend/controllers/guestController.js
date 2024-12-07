import express from "express";
import {
    addGuest,
    getGuestsByEvent,
    updateGuestRSVP,
    deleteGuest,
    sendInvitations,
} from "../controllers/guestController.js";

const router = express.Router();

// Route to add a new guest
router.post("/", addGuest);

// Route to get all guests for a specific event
router.get("/:eventId", getGuestsByEvent);

// Route to update a guest's RSVP status
router.put("/:id", updateGuestRSVP);

// Route to delete a guest
router.delete("/:id", deleteGuest);

// Route to simulate sending invitations
router.post("/send-invitations", sendInvitations);

export default router;
