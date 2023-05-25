const mongoose = require("mongoose");

const AvailableMeals = require("../Models/AvailableMeals");

const initAvailableMeals = [
  { id: 101, name: "Dosa", description: "", price: 40 },
  { id: 102, name: "Idli", description: "", price: 35 },
  { id: 103, name: "Vada", description: "", price: 40 },
];

const initializeAvailableMeals = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/reactmeals", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const availableMeals = await AvailableMeals.create(initAvailableMeals);
    console.log(availableMeals);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

initializeAvailableMeals();
