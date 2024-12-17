import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">Webb Motion</Link>
        </div>
        <nav className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    );
  }
  
  export default Header;