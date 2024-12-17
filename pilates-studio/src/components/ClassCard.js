import React from 'react';
import '../styles/OnlineClasses.css';;

function ClassCard({ className, description, price, schedule }) {
  return (
    <div className="class-card">
      <h3>{className}</h3>
      <p>{description}</p>
      <p><strong>Price: {price}</strong></p>
      <p><strong>Schedule:</strong> {schedule}</p>
    </div>
  );
}

export default ClassCard;
