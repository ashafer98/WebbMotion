import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Webb Motion</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

