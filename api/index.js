const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "Alingo API Running" });
});

module.exports = app;
