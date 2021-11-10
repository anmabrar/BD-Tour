import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';


const Header = () => {

  const {user, logOut} = useAuth();
  

    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={NavLink} to="/home" className="fs-4 text-warning fw-bold">BD Tour</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/allPackages">Packages</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/about">Contact</Nav.Link>
    </Nav>
   
    <Nav className="d-flex align-items-center">
    {user.email ? (
       <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
       <NavDropdown.Item as={NavLink} to="/myOrder/3.1">My Order</NavDropdown.Item>
       <NavDropdown.Item as={NavLink} to="/manageOrder/3.2">Manage Order</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item as={NavLink} to="/addPackages/3.3">Add Package</NavDropdown.Item>
     </NavDropdown>
    ):(<h4>.</h4>)}
   
    {user.email ? (
                <button className="btn btn-primary my-1" onClick={logOut}>
                  Logout
                </button>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary " >
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