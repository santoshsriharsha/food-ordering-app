import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Layouts/Meals/Meals/Meals";
import Cart from "./components/Layouts/Cart/Cart/Cart";
function App() {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((modalState) => {
      return !modalState;
    });
  };
  return (
    <Fragment>
      {showModal && <Cart onClick={modalHandler} />}
      <Header onClick={modalHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
