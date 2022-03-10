const express = require("express");
const connectDB = require("./db/connection");
require("dotenv").config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const route = require("./routes/route");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use(route);

connectDB.then(db => {
if(!db) return process.exit(1);

app.listen(PORT, () => {
  console.log(`Sever running on https://localhost:${PORT}`);
});

app.on('error', err => console.error(err));

}).catch(error => console.log(`Connection Failed...! ${error}`))

