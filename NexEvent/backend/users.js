import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }, // Role-based access (e.g., user, admin)
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Middleware to hash passwords before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Only hash if password is new or modified
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords for login
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the User Model
const Users = mongoose.model("users", userSchema);
export default Users;
