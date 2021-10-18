import { React, useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [hide, setHide] = useState(false);
  return (
    <Navbar className="nav-Container">
      <Navbar.Brand href="#home">
        {" "}
        <img
          className="brand-image"
          alt="Social Brothers Logo"
          src="https://socialbrothers.nl/wp-content/themes/social_brothers/assets/SBlogo.svg"
        />
      </Navbar.Brand>

      {hide ? <h1 className="blogs-headers  ">Blog</h1> : ""}

      <Navbar.Collapse className="justify-content-end nav-links">
        <ul>
          <li>
            <NavLink
              className="navbar-bar-titel"
              exact
              activeClassName="active"
              to="/"
              onClick={() => setHide(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="navbar-bar-titel"
              to="/blog"
              onClick={() => setHide(true)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
