import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Add guest to an event
router.post("/:eventId/guests", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    event.guests.push(req.body); // Add guest
    await event.save();
    res.status(200).json({ message: "Guest added successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove guest from an event
router.delete("/:eventId/guests/:guestId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    event.guests = event.guests.filter((g) => g._id.toString() !== req.params.guestId);
    await event.save();
    res.status(200).json({ message: "Guest removed successfully", event });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch guests for an event
router.get("/:eventId/guests", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId).populate("guests");
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event.guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; // Use ES module export
