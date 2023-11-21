const express = require("express");

const router = express.Router();

const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  deleteAllUsers,
} = require("../controllers/user.js");

router.post("/register", registerUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUserById);

router.delete("/all/:id", deleteAllUsers);

module.exports = router;
