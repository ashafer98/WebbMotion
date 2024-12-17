import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Webb Motion Pilates</h1>
        <p>Your journey to strength, flexibility, and wellness starts here.</p>
        <a href="/classes" className="hero-button">Explore Classes</a>
      </div>
    </section>
  );
}

export default HeroSection;
