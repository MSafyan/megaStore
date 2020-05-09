import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav className="teal">
          <div className="container">
            <div className="nav-wrapper">
              <Link className="brand-logo">MegaStore</Link>
              <Link data-target="mobile-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/product">Register</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavBar;
