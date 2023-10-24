import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../utils/mock-data";
import { Button } from "react-bootstrap";

const Product = () => {
  const { prodId } = useParams();
  console.log(prodId);

  const product = productsArr.find((p) => p.id == prodId);
  console.log(product.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Render the product details
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <br/>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default Product;
