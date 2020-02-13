import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Navbar.Brand href="/">We Advise</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/classes">Classes</Nav.Link>
                <Nav.Link href="/schedule">Schedule Appointment</Nav.Link>
                <Nav.Link href="/aboutme">About Me</Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link href="/help">Help</Nav.Link>
                <Nav.Link href="/signout">Sign Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
