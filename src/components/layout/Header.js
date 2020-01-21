import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <Link id="logo-container" to="/" className="brand-logo">
          Logo
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Blogs</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
        </ul>
        <Link to="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
