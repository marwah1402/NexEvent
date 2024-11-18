import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./userRoutes.js"; 
import contactRoutes from "./contactRoutes.js"; 

const app = express();
const PORT = 8080;


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
