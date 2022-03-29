import { Nav, Navbar } from 'bootstrap-4-react/lib/components';
import { Container } from 'bootstrap-4-react/lib/components/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand>Organic Food<Nav.Link to="/home"></Nav.Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link to="/home" href="/home">Home</Nav.Link>
      <Nav.Link to="/orders" href="/orders">Orders</Nav.Link>
      <Nav.Link to="/admin" href="/admin">Admin</Nav.Link>
      <Nav.Link to="/deals" href="/deals">Deals</Nav.Link>
      <Nav.Link to="/login" href="/login" className="btn btn-success btn-sm">Login</Nav.Link>
      
      <Nav.Link to="/about">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </>
    );
};

export default Header;