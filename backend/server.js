const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Avto backend işləyir!",
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`AI Avto server ${PORT} portunda işləyir.`);
});