import mongoose from "mongoose";

// Define the schema
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model
const Contact = mongoose.model("Contact", contactSchema);

// Export the model
export default Contact;
