import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
<<<<<<< HEAD
import userRoutes from "./userRoutes.js"; 
import contactRoutes from "./contactRoutes.js"; 
=======
import userRoutes from "./userRoutes.js"; // Assuming this is correct
import contactRoutes from "./contact.js"; // Corrected path to contact.js
>>>>>>> 6de9824e3782d0d1ae37749a6ef049ec7379ad34

const app = express();
const PORT = 8080;

<<<<<<< HEAD
=======
// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON data in requests
>>>>>>> 6de9824e3782d0d1ae37749a6ef049ec7379ad34

app.use(cors());no
app.use(bodyParser.json()); 


const uri ="mongodb+srv://marwah:bCx3EtePpxPG1HJI@cluster0.sham5.mongodb.net/Project?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the NexEvent application." });
});

app.use("/api/contacts", contactRoutes); 
app.use("/api/users", userRoutes); 


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
