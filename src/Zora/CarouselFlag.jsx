import React, {useState, useEffect} from 'react';
import '../styles/Carousel.css';

const images = [
  '/53.png',
  '/zr1lack.png',
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
    <div className="carousel1">
      <img
        src={images[currentIndex]}
        alt="carousel-item"
        className="carousel-image"
      />
    </div>
  );
};

export default CarouselFlag;
