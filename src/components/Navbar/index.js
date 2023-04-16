import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <a className="navbar-brand" href="/">
            <img src="./dw-logo.png" alt="DW Logo" width="80" height="94" />
          </a>
          <NavLink to="/about" activeStyle>
            about us
          </NavLink>
          <NavLink to="/projects" activeStyle>
            projects portfolio
          </NavLink>
          <NavLink to="/operations" activeStyle>
            our operations
          </NavLink>
          <NavLink to="/careers" activeStyle>
            join us
          </NavLink>
          <NavLink to="/contact" activeStyle>
            contact us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
