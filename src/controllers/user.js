// ============== MONGO DB ===================

const User = require("../models/user.js");

// POST DATA TO MONGO DB
exports.registerUser = (req, res) => {
  // meminta nama, email, password dari body
  const { id, name, email, password } = req.body;

  // buat instance berupa dictionary dari data yang berasalah dari req.body dan kita simpan di MongoDB (.save())
  const newUser = new User({
    id,
    name,
    email,
    password,
  });
  newUser
    .save()
    .then((user) => {
      res.status(200).json({
        user, // jika berhasil akan mengembalikan data user
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message, // jika gagal akan mengembalikan error
      });
    });
};

// GET ALL DATA FROM MONDO DB
exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

// GET DATA BY ID FROM MONGO DB
exports.getUserById = (req, res) => {
  const { id } = req.params;

  // coba pake findById(id) gabisa hmm

  // User.findById(id)
  //   .then((user) => {
  //     res.status(200).json({ user });
  //   })
  //   .catch((err) => {
  //     res.status(400).json({ error: err.message });
  //   });

  User.find({ id: id }) // 2 parameter, 1. id yang mau dicari, 2. callback function --> User.find(({ id: id }), (req, res) => { ... })
    .then((user) => {
      if (user.length === 0) {
        // jika user tidak ditemukan
        return res.status(404).json({ error: "User not found!" });
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

// UPDATE DATA BY ID FROM MONGO DB

exports.updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  User.findOneAndUpdate({ id: id }, { name, email, password }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

// DELETE DATA BY ID FROM MONGO DB
exports.deleteUserById = (req, res) => {
  const { id } = req.params;

  User.findOneAndDelete({ id: id })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

// DELETE ALL DATA FROM MONGO DB
// DELETE ALL DATA WITH THE SAME ID
exports.deleteAllUsers = (req, res) => {
    const { id } = req.params;

    User.deleteMany({id: id})
    .then((user) => {
        if(user.deletedCount === 0) {
            res.status(404).json({ error: "User not found!"})
        }else {
            res.status(200).json({ user})
        }
    })
    .catch((err) => {
        res.status(400).json({ error: err.message})
    })
}
