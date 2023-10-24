import React from "react";
import ReactDom from "react-dom/client";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import React from "react";
import NavItems from "./components/NavItems";
import CardListItems from "./components/CardListItems";
import Header from "./components/Header";
import CartProvider from "./context/CartContext";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Product from "./components/Product";

const App = () => {
  return (
    <CartProvider>
      <NavItems />
      <Header />
      <Outlet />
    </CartProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CardListItems /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:prodId", element: <Product /> },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
