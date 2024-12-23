import mongoose from 'mongoose';
import express from 'express';
import Event from '../models/Event.js'; // Ensure the Event model is correctly imported
import { createEvent, updateEvent } from '../controllers/eventController.js';

const router = express.Router();

// Middleware to validate ObjectId
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid Event ID format' });
  }
  next();
};

// Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events', error: err });
  }
});

// Fetch event by ID
router.get('/:id', validateObjectId, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event details', error: err });
  }
});

// Create a new event
router.post('/', createEvent);

// Update an existing event
router.put('/:id', validateObjectId, updateEvent);

// Delete an event
router.delete('/:id', validateObjectId, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event', error: err });
  }
});

export default router;
