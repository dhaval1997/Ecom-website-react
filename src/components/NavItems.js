import React, { useContext } from "react";
import { Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import a cart icon from a library like react-icons

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
          <Nav className="me-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
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
