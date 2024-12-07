import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config(); // Load environment variables

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  });

const seedAdmin = async () => {
  try {
    const adminEmail = "marwah@gmail.com"; // Admin email
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0); // Exit if admin already exists
    }

    const hashedPassword = await bcrypt.hash("Marwah1234", 10); // Hash the admin password

    const admin = new User({
      name: "Admin User", // Admin name
      email: adminEmail, // Admin email
      password: hashedPassword, // Admin hashed password
      userRole: "admin", // Set role as admin
    });

    await admin.save();
    console.log(`Admin user created successfully with email: ${adminEmail}`);
    process.exit(0); // Exit the process
  } catch (error) {
    console.error("Error seeding admin user:", error.message);
    process.exit(1); // Exit with failure code
  }
};

// Close the MongoDB connection after seeding
mongoose.connection.on("connected", async () => {
  console.log("Database connected. Seeding admin...");
  await seedAdmin();
});

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected.");
  process.exit(0);
});
