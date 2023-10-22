import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleCartRemove = (e, id) => {
    e.preventDefault();
    cartCtx.removeItem(id);
  };
  return (
    <>
      {cartCtx.items.map((item) => (
        <ul key={item.id}>
          <li className="cart-item">
            <img src={item.imageUrl} />
            <span>Rs.{item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <Button onClick={(e) => handleCartRemove(e, item.id)}>
              Remove
            </Button>
            <p>{item.title} </p>
          </li>
        </ul>
      ))}
      <div>
        <span>Total Amount: </span>
        <span>₹{totalAmount}</span>
      </div>
    </>
  );
};

export default Cart;
