import React, { useContext } from "react";
import { Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const NavItems = () => {
  const cartCtx = useContext(CartContext);

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
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
        </Container>
      </Navbar>
    </>
  );
};

export default NavItems;
