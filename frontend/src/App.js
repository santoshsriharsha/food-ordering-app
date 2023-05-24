import { useState } from "react";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Meals from "./components/Layouts/Meals/Meals/Meals";
import Cart from "./components/Layouts/Cart/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal((modalState) => {
      return !modalState;
    });
  };
  return (
    <CartProvider>
      {showModal && <Cart onClick={modalHandler} />}
      <Header onClick={modalHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
