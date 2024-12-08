import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import guestRoutes from './routes/guestRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // Import admin routes

dotenv.config();

const app = express(); // Initialize Express

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Fallback for bad JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON:', err);
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

// Root Route with details
app.get('/', (req, res) => {
  res.send(`
    <h1>NexEvent Backend</h1>
    <p>Welcome to the NexEvent backend. Here are the available API endpoints:</p>
    <ul>
      <li><a href="/api/auth">/api/auth</a> - Authentication routes</li>
      <li><a href="/api/events">/api/events</a> - Event-related routes</li>
      <li><a href="/api/contacts">/api/contacts</a> - Contact-related routes</li>
      <li><a href="/api/guests">/api/guests</a> - Guest-related routes</li>
      <li><a href="/api/admin">/api/admin</a> - Admin-specific routes</li>
    </ul>
    <p>Refer to the documentation for usage details.</p>
  `);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/admin', adminRoutes); // Add admin routes

// Log all registered routes
app._router.stack.forEach((middleware) => {
  if (middleware.route) { // If it's a route middleware
    console.log(`Route: ${Object.keys(middleware.route.methods).join(', ').toUpperCase()} ${middleware.route.path}`);
  }
});

// Debugging Middleware to Check Route Matching
app.use((req, res, next) => {
  console.warn(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ error: `Route not found: ${req.method} ${req.url}` });
});

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Server Port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
