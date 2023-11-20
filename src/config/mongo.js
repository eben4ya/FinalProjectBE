const mongoose = require("mongoose");

//  function agar bisa connect ke mongoDB
function mongoConnect() {
  mongoose.connect(process.env.MONGODB_URl, {
    // useNewUrlParser: true, // digunakan agar URL di config.env bisa terbaca. Soalnya dulu URLnya tidak sependek ini. jadi kode ini diperlukan
    // useUnifiedTopology: true,
    // useCreateIndex: true
  });

  const db = mongoose.connection;

 // 3 event yang bisa terjadi
  db.on("connected", () => {
    console.log("Connected to MongoDB Database! 🎉");
  });

  db.on("error", (err) => {
    console.log("MongoDB Connection Error 😥");
  });

  db.on("disconnected", () => {
    console.log("MongoDB Disconnected 😥");
  });
  return mongoose;
}

module.exports = mongoConnect;
