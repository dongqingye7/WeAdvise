import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from "../SignOut";
import  NavItem from 'react-bootstrap/NavItem';

function Headerh() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-gradient-info fixed-top font-weight-bold" variant="dark">
    <Navbar.Brand href="/advisor-home">We Advise</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/advisor-home">Home</Nav.Link>
                <Nav.Link href="/advisor-class">Course</Nav.Link>
                <Nav.Link href="/qlist">Queue</Nav.Link>
                <Nav.Link href="/advisor-about">About Me</Nav.Link>
                
            </Nav>
            <Nav>
                <NavItem >
                  <SignOutButton /> 
                  
                </NavItem>           
       </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Headerh;
