import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ClassDetail.css';

const classData = [
  {
    id: 1,
    title: 'Posture Perfect: Pilates for Desk Workers',
    description: 'Fix your posture and relieve desk-job aches with just 30 minutes a day!',
    details: 'This class focuses on improving posture with targeted stretches and strength exercises designed for desk workers. You’ll feel relief from back, neck, and shoulder pain, and improve flexibility and core strength.',
    image: '/assets/class-posture.jpg',
  },
  {
    id: 2,
    title: 'Core Rebuild: Postnatal Pilates Recovery',
    description: 'Feel strong and confident again with safe, guided Pilates routines for moms.',
    details: 'Designed for new moms, this class emphasizes safe recovery after childbirth. Strengthen your core, improve pelvic floor health, and regain overall fitness.',
    image: '/assets/class-postnatal.jpg',
  },
  // Add other classes as needed...
];

const ClassDetail = () => {
  const { classId } = useParams(); // Get the classId from the URL
  const selectedClass = classData.find((course) => course.id === parseInt(classId));

  if (!selectedClass) {
    return <p>Class not found!</p>;
  }

  return (
    <div className="class-detail">
      <img src={selectedClass.image} alt={selectedClass.title} className="detail-image" />
      <h1 className="detail-title">{selectedClass.title}</h1>
      <p className="detail-description">{selectedClass.details}</p>
      <button className="detail-button">Buy Now</button>
    </div>
  );
};

export default ClassDetail;
