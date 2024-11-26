import Contact from "../models/Contact.js";

// Create a new contact message
export const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    // Create and save the contact message
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Contact message submitted successfully!", data: newContact });
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not submit contact message.", error: error.message });
  }
};

// Retrieve all contact messages (admin only)
export const getAllContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not fetch contact messages.", error: error.message });
  }
};

// Retrieve a single contact message by ID
export const getContactMessageById = async (req, res) => {
  try {
    const contactMessage = await Contact.findById(req.params.id);
    if (!contactMessage) {
      return res.status(404).json({ message: "Contact message not found." });
    }
    res.status(200).json(contactMessage);
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not fetch the contact message.", error: error.message });
  }
};

// Delete a contact message by ID (admin only)
export const deleteContactMessage = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact message not found." });
    }
    res.status(200).json({ message: "Contact message deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error. Could not delete the contact message.", error: error.message });
  }
};
