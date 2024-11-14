const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  time: String,
  location: String,
  description: String,
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Event', EventSchema);
