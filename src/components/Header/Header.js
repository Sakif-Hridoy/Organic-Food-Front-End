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
    <Nav class="me-auto">
      <Link to="/home">Home</Link>
      <Link   to="/orders">Orders</Link>
      <Link  to="/admin">Admin</Link>
      <Link   to="/deals">Deals</Link>
      <Link   to="/login" class="btn btn-success btn-sm text-center">
      {loggedInUser.email ? loggedInUser.name || loggedInUser.displayName: "Log In"}
      </Link>
    </Nav>
    </Container>
  </Navbar>

        </>
    );
};

export default Header;