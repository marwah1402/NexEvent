const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.get('/', (req, res) => res.send('NexEvent API running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Database connection error:', err));
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);


