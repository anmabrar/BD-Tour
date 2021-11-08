import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';


const Header = () => {

  const {user, logOut} = useAuth();
  console.log(user.email)

    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">BD Tour</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/allPackages">Packages</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/about">Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/about/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/about/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/about/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/addPackages/3.4">Add Package</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="d-flex align-items-center">
    <span className="text-light px-3">{user.displayName} </span>
    {user.email ? (
                <button className="btn btn-primary my-1" onClick={logOut}>
                  Logout
                </button>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary " onClick={logOut}>
                    Login
                  </button>
                </Nav.Link>
              )}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;