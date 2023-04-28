import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Layouts/Meals/Meals/Meals";
import Cart from "./components/Layouts/Cart/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
