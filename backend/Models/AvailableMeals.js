const mongoose = require("mongoose");
const availableMealsSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const AvailableMeals = mongoose.model("AvailableMeals", availableMealsSchema);

module.exports = AvailableMeals;
