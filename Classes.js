import React from 'react';
import ClassCard from '../components/ClassCard';

function Classes() {
  const classData = [
    {
      title: 'Pilates for Beginners',
      description: 'A beginner-friendly class to help you get started.',
      price: 20
    },
    {
      title: 'Advanced Pilates Flow',
      description: 'For advanced practitioners looking to challenge their limits.',
      price: 30
    }
  ];

  return (
    <div className="classes">
      <h2>Our Online Pilates Classes</h2>
      <div className="class-list">
        {classData.map((classItem, index) => (
          <ClassCard key={index} classItem={classItem} />
        ))}
      </div>
    </div>
  );
}

export default Classes;
