
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,

} from "reactstrap";

class AuthNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          className="navbar-top navbar-horizontal navbar-dark"
          expand="md"
        >
          <Container className="px-4">
            <NavbarBrand to="/" tag={Link} className="pt-3 text-white text-lg">
              We Advise
            </NavbarBrand>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AuthNavbar;
