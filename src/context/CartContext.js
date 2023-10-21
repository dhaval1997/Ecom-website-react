import { createContext } from "react";

const cart = createContext();

const CartContext = ({ children }) => {
  return <cart.Provider>{children}</cart.Provider>;
};

export default CartContext;
