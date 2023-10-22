import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCard = (props) => {
  const { card, img, title, price } = props;
  console.log(card);
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (e) => {
    e.preventDefault();
    const itemWithQuantity = { ...card, quantity: 1 };
    cartCtx.addItem(itemWithQuantity);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>
          <Card.Text>{price}</Card.Text>
          <Button variant="dark" onClick={addItemToCartHandler}>
            ADD TO CART
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
