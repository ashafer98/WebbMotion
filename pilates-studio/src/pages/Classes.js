import React from 'react';
import '../styles/Classes.css'; // Link to your classes styles
import ClassCard from '../components/ClassCard';

const classData = [
  {
    id: 1,
    title: 'Posture Perfect: Pilates for Desk Workers',
    description: 'Fix your posture and relieve desk-job aches with just 30 minutes a day!',
    image: '/assets/class-posture.jpg',
  },
  {
    id: 2,
    title: 'Core Rebuild: Postnatal Pilates Recovery',
    description: 'Feel strong and confident again with safe, guided Pilates routines for moms.',
    image: '/assets/class-postnatal.jpg',
  },
  {
    id: 3,
    title: 'Golden Years: Mobility & Balance for Active Seniors',
    description: 'Stay active, mobile, and confident with gentle Pilates tailored for seniors.',
    image: '/assets/class-seniors.jpg',
  },
  {
    id: 4,
    title: 'Flex & Flow: Mat Pilates for Yoga Lovers',
    description: 'Take your yoga practice to the next level with Pilates for strength and control.',
    image: '/assets/class-yoga.jpg',
  },
  {
    id: 5,
    title: 'Recover & Rebuild: Pilates for Injury Recovery',
    description: 'Recover safely, build strength, and get back to doing what you love.',
    image: '/assets/class-recovery.jpg',
  },
  {
    id: 6,
    title: 'Core & Tone: Mat Pilates for Weight Loss',
    description: 'Strengthen, tone, and feel your best with beginner-friendly Pilates routines.',
    image: '/assets/class-weightloss.jpg',
  },
];

const Classes = () => {
  return (
    <div className="classes-page">
      <h1 className="classes-title">Our Pilates Classes</h1>
      <p className="classes-intro">
        Explore our tailored Mat Pilates classes to meet your goals. Whether it's posture correction, core recovery, or building strength, we have a class for you.
      </p>
      <div className="classes-grid">
        {classData.map((course) => (
          <ClassCard
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Classes;
