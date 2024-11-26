import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    rsvpStatus: { type: String, default: "Pending" },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
});

const Guest = mongoose.model("Guest", guestSchema);
export default Guest;