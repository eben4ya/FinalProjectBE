// const a = 5;
// const b = "5"
// const c = a + b;
// const d = b + a;

// console.log(typeof c);
// console.log(typeof d);

const express = require("express");
const morgan = require("morgan"); // lock htpp request
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// DOTENV CONFIG
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// MONGO CONFIG
const mongoConnect = require("./src/config/mongo.js");
mongoConnect();

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", require("./src/routes/index.js"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
