import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Home.css';
import ClassCard from '../components/ClassCard';
import HeroSection from '../components/HeroSection'; // Import HeroSection Component

// Import React Carousel Library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import class data from Classes.js
import { classData } from './Classes';  // Import class data from Classes.js

const Home = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
          {classData.map((classItem, index) => (
            <div key={index}>
              <Link to={`/class/${classItem.id}`}>
                <ClassCard
                  title={classItem.title}
                  description={classItem.description}
                  image={classItem.image}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
