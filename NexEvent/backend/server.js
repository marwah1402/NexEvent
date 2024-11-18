import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./userRoutes.js"; // Assuming this is correct
import contactRoutes from "./contact.js"; // Corrected path to contact.js

// Initialize express app
const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON data in requests

// MongoDB Connection
const uri =
  "mongodb+srv://marwah:bCx3EtePpxPG1HJI@cluster0.sham5.mongodb.net/Project?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the NexEvent application." });
});

app.use("/api/contacts", contactRoutes); // Assign contact routes under '/api/contacts'
app.use("/api/users", userRoutes); // Assign user routes under '/api/users'

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
