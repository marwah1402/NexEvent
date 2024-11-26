import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
});

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    guests: [guestSchema],
});

export default mongoose.model('Event', eventSchema);
