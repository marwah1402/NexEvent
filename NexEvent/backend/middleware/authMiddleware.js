import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(404).json({ message: "User not found" });
      }
      next();
    } catch (error) {
      console.error("Token validation error:", error);
      res.status(401).json({ message: "Invalid or expired token" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.userRole === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admins only" });
  }
};