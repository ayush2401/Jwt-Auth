import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  let access = props.isLoggedIn;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 mx-3">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink to="/"> Home </NavLink>
              </li>
              {!access ? (
                <>
                  <li className="nav-item me-3">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
