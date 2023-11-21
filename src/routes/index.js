const express = require("express");

const router = express.Router();

const {
  createNumber,
  getNumber,
  updateNumber,
  deleteNumber,
  registerUser,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../controllers/index.js");

// Untuk mengakses ini, kita harus menambahkan /api di depannya
// hasilnya /api/create, /api/get, /api/update, /api/delete
router.post("/create", createNumber);

router.get("/get", getNumber);

router.put("/update", updateNumber);

router.delete("/delete", deleteNumber);

router.post("/register", registerUser);

router.get("/users", getAllUsers);

router.get("/user/:id", getUserById);

router.put("/user/:id", updateUserById);

module.exports = router;
