import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../../assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const information = () => {
    alert("Currently On Development")
  }

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <div className='Giftify'>
          <button>Giftify</button>
        </div>

        <div className="animated-text">
          <button><h2>Welcome to Giftify</h2></button>
        </div>

        <div className={`menu ${menuActive ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <a href="#" className="menu-link" onClick={() => { information(); closeMenu(); }}>Listing</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" onClick={() => { information(); closeMenu(); }}>Feature</a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" onClick={() => { information(); closeMenu(); }}>Popular</a>
            </li>
            <li className="menu-item started">
              <Link to="/signup" className="menu-link" onClick={closeMenu}>Get Started</Link>
            </li>
          </ul>
        </div>

        <div
          className={`burger ${menuActive ? 'is-active' : ''}`}
          id="burger"
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
