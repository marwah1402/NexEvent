import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    status: { type: String, enum: ['Invited', 'Confirmed', 'Declined'], default: 'Invited' } // Added status for RSVP
});

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    guests: [guestSchema],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Tracks who created the event
    isApproved: { type: Boolean, default: false }, // For admin approval of events
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

export default mongoose.model('Event', eventSchema);
