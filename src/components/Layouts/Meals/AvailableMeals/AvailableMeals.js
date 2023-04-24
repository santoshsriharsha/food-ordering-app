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
  const mealsList = MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
