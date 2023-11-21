const express = require("express");

const router = express.Router();

const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../controllers/user.js");

router.post("/register", registerUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUserById);

module.exports = router;
