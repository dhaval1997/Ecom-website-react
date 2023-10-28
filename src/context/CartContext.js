import { createContext, useContext, useState } from "react";
import AuthContext from "../components/login/auth-context";

export const CartContext = createContext({
  cartItems: [],
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const authCtx = useContext(AuthContext);

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
    const userEmail = authCtx.userEmail;
    const endpoint = `https://crudcrud.com/api/10f1c49d7ad94827b89ae775e1c01d5a/cartItems`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: item, quantity: 1 }),
    })
      .then((response) => {
        console.log("response:", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadCart = () => {
    const userEmail = authCtx.userEmail;
    console.log("useremailcart: ", userEmail);
    const endpoint = `https://crudcrud.com/api/10f1c49d7ad94827b89ae775e1c01d5a/cartItems`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log("Loaded data", data);
      })
      .catch((error) => {
        console.error(error);
      });
      console.log("loadcart: ",data);
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
    cartItems: loadCart,
    items: cartItems,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
