import React from "react";
import { Container } from "react-bootstrap";
import ItemCard from "./Card";
import { productsArr } from "../utils/mock-data";
import { Link } from "react-router-dom";

const CardListItems = () => {
  return (
    <Container className="item-list">
      {productsArr.map((card) => (
        <Link to={`/product/${card.id}`} key={card.id}>
          <ItemCard
            card={card}
            title={card.title}
            price={card.price}
            img={card.imageUrl}
          />
        </Link>
      ))}
    </Container>
  );
};

export default CardListItems;
