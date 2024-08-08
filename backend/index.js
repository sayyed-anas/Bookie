const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("THis is Home routsS");
});

app.listen(5000, () => {
  console.log("Server Running on Port no 5000");
});
