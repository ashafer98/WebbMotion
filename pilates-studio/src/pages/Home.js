import React from 'react';
import HeroSection from '../components/HeroSection';
import OnlineClasses from '../components/OnlineClasses';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <OnlineClasses />
      <div className="cta-section">
        <h2>Ready to take your Pilates journey to the next level?</h2>
        <p>Join us for transformative Pilates classes designed for all levels. Book your class now and start your journey!</p>
        <a href="/contact" className="cta-button">Book a Class</a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
