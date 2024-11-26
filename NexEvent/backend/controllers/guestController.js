import Guest from "../models/Guest.js";

// Create a new guest
export const addGuest = async (req, res) => {
    try {
        const newGuest = new Guest(req.body);
        await newGuest.save();
        res.status(201).json(newGuest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all guests for an event
export const getGuestsByEvent = async (req, res) => {
    try {
        const guests = await Guest.find({ eventId: req.params.eventId });
        res.status(200).json(guests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a guest's RSVP
export const updateGuestRSVP = async (req, res) => {
    try {
        const updatedGuest = await Guest.findByIdAndUpdate(
            req.params.id,
            { rsvpStatus: req.body.rsvpStatus },
            { new: true }
        );
        if (!updatedGuest)
            return res.status(404).json({ message: "Guest not found" });
        res.status(200).json(updatedGuest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a guest
export const deleteGuest = async (req, res) => {
    try {
        const deletedGuest = await Guest.findByIdAndDelete(req.params.id);
        if (!deletedGuest)
            return res.status(404).json({ message: "Guest not found" });
        res.status(200).json({ message: "Guest deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Simulate sending invitations
export const sendInvitations = async (req, res) => {
    try {
        // Mock implementation
        res.status(200).json({ message: "Invitations sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
