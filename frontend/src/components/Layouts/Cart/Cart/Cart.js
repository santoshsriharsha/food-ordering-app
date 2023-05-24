import { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";
import CartContext from "../../../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          amount={cartItem.amount}
          onAdd={cartItemAddHandler.bind(null, cartItem)}
          onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClick}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && <Checkout onClose={props.onClick} />}
      {!showCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
