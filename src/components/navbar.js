import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar( ) {
  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Store</Nav.Link>
        <Nav.Link href="#link">Registry</Nav.Link>
        <NavDropdown title="Departments" id="basic-nav-dropdown">
        <NavDropdown title="Category" id="basic-nav-dropdown">
          <NavDropdown title="Subcategory" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>);
}

export default NavigationBar;