import React from 'react';
import { Link } from 'react-router-dom';

function ClassCard({ classItem }) {
  return (
    <div className="class-card">
      <h3>{classItem.title}</h3>
      <p>{classItem.description}</p>
      <p>Price: ${classItem.price}</p>
      <Link to={`/checkout/${classItem.title}`}>Book Now</Link>
    </div>
  );
}

export default ClassCard;
