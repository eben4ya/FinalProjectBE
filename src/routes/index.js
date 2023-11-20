const express = require("express");

const router = express.Router();

const { createNumber, getNumber, updateNumber, deleteNumber, registerUser} = require("../controllers/index.js");

// Untuk mengakses ini, kita harus menambahkan /api di depannya
// hasilnya /api/create, /api/get, /api/update, /api/delete
router.post("/create", createNumber);

router.get("/get", getNumber);

router.put("/update", updateNumber);

router.delete("/delete", deleteNumber);

router.post("/register", registerUser);

module.exports = router;
