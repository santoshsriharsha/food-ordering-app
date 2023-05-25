const express = require("express");

const app = express();
app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use((req, res, next) => {
  console.log("Received a request");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to React Meals backend");
});
