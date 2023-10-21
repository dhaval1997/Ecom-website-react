import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div  >
          <Card.Text>{props.price}</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
