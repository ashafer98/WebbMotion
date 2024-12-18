import React, { useState } from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email); // For now, just log the email
      setSubmitted(true);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Webb Motion Pilates</h1>
        <p>Your journey to strength, flexibility, and wellness starts here.</p>

        {/* Beginner's Guide CTA Section */}
        <div className="cta-section">
          <h2>Get Your Free Beginner's Guide</h2>
          <p>Sign up with your email to receive a free guide to get started with Mat Pilates.</p>
          {!submitted ? (
            <form className="signup-form" onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Get the Guide</button>
            </form>
          ) : (
            <p className="thank-you">Thank you for signing up! Check your email for the guide.</p>
        )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
