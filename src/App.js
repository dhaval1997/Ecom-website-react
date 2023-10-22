import React from "react";
import ReactDom from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import React from "react";
import NavItems from "./components/NavItems";
import CardListItems from "./components/CardListItems";
import Header from "./components/Header";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <NavItems />
      <Header />
      <CardListItems />
    </CartProvider>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
