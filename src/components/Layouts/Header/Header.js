import { Fragment } from "react";

import classes from "./Header.module.css";

import foodImage from "../../../assets/food image.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Food image" />
      </div>
    </Fragment>
  );
};

export default Header;
