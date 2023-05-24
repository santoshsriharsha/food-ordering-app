import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../../store/cart-context";
const HeaderCartButton = (props) => {
  const [buttonIsAnimated, setButtonIsAnimated] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonIsAnimated ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsAnimated(true);
    const timer = setTimeout(() => {
      setButtonIsAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
