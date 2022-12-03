import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;
  const hasItem = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cardCtx.addItem(item);
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHide}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
