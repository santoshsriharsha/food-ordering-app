import classes from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";

const Cart = () => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Dosa", amount: 4, price: 40 }].map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>160</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
