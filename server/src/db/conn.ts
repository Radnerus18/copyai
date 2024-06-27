const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
