const express = require('express');
const mongoose = require('mongoose');

const eventRoutes = require('./controllers/routes/eventRoutes'); // Import your event routes
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB URI
const uri = 'mongodb+srv://marwah:AjdhYd8xvVFkRnIV@cluster0.sham5.mongodb.net/Skeleton?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api/events', eventRoutes); // Use your routes here

// Base route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the NexEvent application.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
