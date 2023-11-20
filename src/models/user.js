const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please input your name"],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// buat model dengan mongoose.model("namaModel", isinya apa --> UserSchema)")
const User = mongoose.model("User", UserSchema);

module.exports = User;
