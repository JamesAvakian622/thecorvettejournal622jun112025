import React, {useState, useEffect} from 'react';
import '../styles/Carousel.css';

const images = [
  '/53.png',
  '/zr1lack.png',
  '/zr111.png',
  '/zr13.png',
  '/CheckFlag2.png',
  '/CheckFlag3.png',
];

const CarouselFlag = () => {
  const [currentIndex, setCurrentIndex] = useState (0);

  useEffect (
    () => {
      const interval = setInterval (() => {
        setCurrentIndex ((currentIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval (interval); // Clean up the interval on component unmount
    },
    [currentIndex]
  );

  return (
    <div className="carouselFlag1">
      <a href="./AImage" target="_blank" rel="noopener noreferrer">
        <img
          src={images[currentIndex]}
          alt="carousel-item"
          className="carousel-image"
        />
      </a>
    </div>
  );
};

export default CarouselFlag;
