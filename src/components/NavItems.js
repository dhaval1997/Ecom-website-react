import React, { useContext } from "react";
import { Dropdown, Container, Nav, Navbar, Button } from "react-bootstrap";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import AuthContext from "./login/auth-context";

const NavItems = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      <Navbar>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">Ecom-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="m-auto">
            <Link to="/home" className="nav-link">
              HOME
            </Link>
            <Link to="/" className="nav-link">
              STORE
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
            <Link to="/contact" className="nav-link">
              CONTACT US
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <span style={{ marginRight: "8px" }}>
                  <FaShoppingCart />
                </span>
                ({quantity})
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 200 }}>
                <Dropdown.Item href="#/action-1">
                  <Cart />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          {authCtx.isLoggedIn && (
            <Button variant="danger" onClick={logoutHandler} >Logout</Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavItems;
