import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../images/brand.svg";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-light border-bottom py-0 mb-2 mt-2">
      <a className="navbar-brand pt-0" href="/">
        <img src={brandLogo} width="35" height="35" alt="Brand"></img>
      </a>
      <button
        className="navbar-toggler ml-auto mb-2 collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/work" className="nav-link">
              Work
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
