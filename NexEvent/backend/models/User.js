import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userRole: { type: String, default: "user" }, 
});

const User = mongoose.model("User", userSchema);

export default User; // Use ES module export
