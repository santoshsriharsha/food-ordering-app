import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="area">Area: </label>
          <input type="text" id="area" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="city">City: </label>
          <input type="text" id="city" />
        </div>
        <div className={classes.control}>
          <label htmlFor="pincode">Pincode: </label>
          <input type="text" id="pincode" />
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
