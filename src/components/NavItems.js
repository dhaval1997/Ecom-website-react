import React from "react";
import { Button, Dropdown, Container, Nav, Navbar } from "react-bootstrap";
import Cart from "./Cart";

const NavItems = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">Ecom-Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#pricing">STORE</Nav.Link>
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
            </Nav>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Cart
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 200 }}>
                  <Dropdown.Item href="#/action-1">
                    <Cart />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavItems;
