import React from 'react';
import '../styles/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Webb Motion Pilates. All rights reserved.</p>
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        {/* Add more social media links */}
      </div>
    </footer>
  );
}

export default Footer;
