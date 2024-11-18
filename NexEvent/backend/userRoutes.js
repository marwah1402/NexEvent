import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./userControllers.js"; 

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/users", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
