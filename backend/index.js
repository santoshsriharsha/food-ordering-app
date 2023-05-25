const express = require("express");

const mongoose = require("mongoose");
const AvailableMeals = require("./Models/AvailableMeals");

mongoose
  .connect("mongodb://localhost:27017/reactmeals", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

const app = express();
app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use((req, res, next) => {
  console.log("Received a request");
  next();
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  const availableMeals = await AvailableMeals.find({}).sort({ id: 1 });
  res.json(availableMeals);
});
