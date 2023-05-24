import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="area">Area: </label>
        <input type="text" id="area" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" />
      </div>
      <div className={classes.control}>
        <label htmlFor="pincode">Pincode: </label>
        <input type="text" id="pincode" />
      </div>
      <button type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
