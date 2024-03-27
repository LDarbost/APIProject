import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">WeatherAPI  <FontAwesomeIcon icon={faCloud} /></a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;