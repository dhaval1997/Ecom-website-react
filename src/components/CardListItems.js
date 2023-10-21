import React from "react";
import { Container } from "react-bootstrap";
import ItemCard from "./Card";
import { productsArr } from "../utils/mock-data";

const CardListItems = () => {
  return (
    <Container className="item-list">
      {productsArr.map((card) => (
        <ItemCard title={card.title} price={card.price} img={card.imageUrl} />
      ))}
    </Container>
  );
};

export default CardListItems;
