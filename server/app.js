const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Sever running on https://localhost:${PORT}`);
});
