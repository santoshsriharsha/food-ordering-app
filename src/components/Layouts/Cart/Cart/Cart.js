import classes from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Dosa", amount: 4, price: 40 }].map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>160</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button} onClick={props.onClick}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
