import React from "react";
import { cartElements } from "../utils/mock-data";
import { Button } from "react-bootstrap";

const Cart = () => {
  return (
    <>
      {cartElements.map((elm) => (
        <ul>
          <li className="cart-item">
            <img src={elm.imageUrl} />
            <span>{elm.price}Rs.</span>
            <Button>Remove</Button>
            <p>{elm.title} </p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Cart;
