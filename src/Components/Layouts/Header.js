import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from "../SignOut";
import  NavItem from 'react-bootstrap/NavItem';

function Headerh() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-gradient-info fixed-top font-weight-bold" variant="dark">
    <Navbar.Brand href="/Home">We Advise</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/classes">Classes</Nav.Link>
                <Nav.Link href="/q">Schedule Appointment</Nav.Link>
                <Nav.Link href="/appinfo">Appointment Information</Nav.Link>
                <Nav.Link href="/aboutme">About Me</Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link href="/help">Help</Nav.Link>
                <NavItem >
                  <SignOutButton /> 
                  
                </NavItem>           
       </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Headerh;
