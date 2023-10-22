import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex === -1) {
      // If the item is not in the cart, add it with quantity 1.
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // If the item is already in the cart, update its quantity.
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCartHandler = (id) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      let updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity === 1) {
        // If the item's quantity is 1, remove it from the cart
        updatedCartItems = updatedCartItems.filter((item) => item.id !== id);
      } else {
        // If the item's quantity is greater than 1, decrease the quantity by 1
        updatedCartItems[existingItemIndex].quantity -= 1;
      }
      setCartItems(updatedCartItems);
    }
  };

  const cartContext = {
    items: cartItems,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
