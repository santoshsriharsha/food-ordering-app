import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Layouts/Meals/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
