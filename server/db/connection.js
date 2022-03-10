const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then((db) => {
    console.log("MongoDB Connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection Error");
  });

module.exports = connectDB;
