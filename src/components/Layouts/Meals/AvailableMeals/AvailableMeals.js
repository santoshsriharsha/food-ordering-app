import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "Dosa",
    price: 40,
  },
  {
    id: "m2",
    name: "Idli",
    description: "Idli",
    price: 35,
  },
  {
    id: "m3",
    name: "Vada",
    description: "Vada",
    price: 40,
  },
];

const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
