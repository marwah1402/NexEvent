import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },
});

export default mongoose.model('Message', messageSchema);
