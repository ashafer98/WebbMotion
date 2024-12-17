import React from 'react';
import OnlineClasses from '../components/OnlineClasses';
import '../styles/Classes.css';

function Classes() {
  return (
    <div className="classes">
      <h1>Our Pilates Classes</h1>
      <p>Find the perfect class for you.</p>
      
      <h2>In-Person Classes</h2>
      <p>Details of your in-person Pilates classes.</p>
      
      <h2>Online Classes</h2>
      <OnlineClasses />  {/* Display online classes component */}
    </div>
  );
}

export default Classes;
