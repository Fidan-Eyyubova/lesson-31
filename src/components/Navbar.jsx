import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-pet">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to="http://localhost:3000/"><MdOutlinePets  className="icon"/></Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end menu"
            tabIndex={-1}
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1">
                    <li className="nav-item">
                    <Link to="/home" className="link">
                    Home
                    </Link>
                    </li>
                <li className="nav-item">
                <Link to="/blogs" className="link">
                    Blog
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/about" className="link">
                    About
                    </Link>
                </li>
                <li className="nav-item log-reg">
                <Link to="/login" className="lr-link">
                    Login
                    </Link>
                </li>
                <li className="nav-item log-reg">
                <Link to="/register" className="lr-link">
                    Register
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
