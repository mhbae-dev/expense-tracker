const mongoose = require("mongoose");

//Categories
const categories = new mongoose.Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

//Transactions
const transaction = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

const Categories = mongoose.model("categories", categories);
const Transaction = mongoose.model("transaction", transaction);

exports.default = Transaction;

module.exports = {
  Categories,
  Transaction,
};
