import React, { useState } from 'react';
import '../styles/Home.css';
import ClassCard from '../components/ClassCard';
import HeroSection from '../components/HeroSection'; // Import HeroSection Component

// Import React Carousel Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const classes = [
    { title: 'Mat Pilates for Beginners', description: 'Build your foundation in Pilates.', price: '$49', image: '/assets/class1.jpg' },
    { title: 'Core Strength 30 Days', description: 'Strengthen and tone your core.', price: '$79', image: '/assets/class2.jpg' },
    { title: 'Full Body Sculpt', description: 'Sculpt your entire body with focused exercises.', price: '$89', image: '/assets/class3.jpg' },
    { title: 'Pilates for Flexibility', description: 'Enhance flexibility with targeted movements.', price: '$59', image: '/assets/class4.jpg' },
    { title: 'Power Pilates', description: 'A dynamic program for advanced Pilates lovers.', price: '$99', image: '/assets/class5.jpg' },
    { title: 'Pilates for Posture', description: 'Improve posture and alignment.', price: '$69', image: '/assets/class6.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
    }
  };

  return (
    <div className="home">
      {/* Only include HeroSection once here */}
      <HeroSection />

      {/* Class Card Carousel */}
      <div className="class-carousel">
        <h2>Explore Our Classes</h2>
        <Slider {...settings}>
          {classes.map((classItem, index) => (
            <ClassCard
              key={index}
              title={classItem.title}
              description={classItem.description}
              price={classItem.price}
              image={classItem.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
