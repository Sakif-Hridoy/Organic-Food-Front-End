import { Button, Nav, Navbar } from 'bootstrap-4-react/lib/components';
import { Container } from 'bootstrap-4-react/lib/components/layout';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import { useHistory } from 'react-router';
const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  
 
    return (
        <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand>Organic Food<Nav.Link to="/home"></Nav.Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link  href="/orders">Orders</Nav.Link>
      <Nav.Link href="/admin">Admin</Nav.Link>
      <Nav.Link  href="/deals">Deals</Nav.Link>
      <Nav.Link  href="/login" className="btn btn-success btn-sm">
      {loggedInUser.email ? loggedInUser.name || loggedInUser.displayName: "Log In"}
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </>
    );
};

export default Header;