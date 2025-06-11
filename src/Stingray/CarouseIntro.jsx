import React, {useState, useEffect} from 'react';
import '../styles/Carousel.css';

const images = [
  'i1a.png',
  'i1.png',
  'i1c.png',
  'i2a.png',
  'i2b.png',
  'i2c.png',
  'i2d.png',
  'i4a.png',
  'i4b.png',
  'i4c.png',
  'i4d.png',
  'i5a.png',
  'i5b.png',
  'i5c.png',
  'i5d.png',
  'i6a.png',
  'i6b.png',
  'i6c.png',
  'i7a.png',
  'i7b.png',
  'i7c.png',
  'i8a.png',
  'i8b.png',
  'i9a.png',
  'i9b.png',
  'i9c.png',
  'i9d.png',
  'i10a.png',
  'i10b.png',
  'i10c.png',
  'i10d.png',
  'i11a.png',
  'i11.png',
  'i11c.png',
  'i11d.png',
  'i12a.png',
  'i12b.png',
  'i12c.png',
  'i12d.png',
  'i13a.png',
  'i13b.png',
  'i13c.png',
  'i13d.png',
  'i14a.png',
  'i14b.png',
  'i14c.png',
  'i14d.png',
  'i15a.png',
  'i15b.png',
  'i15c.png',
  'i15d.png',
  'i16a.png',
  'i16b.png',
  'i16c.png',
  'i16d.png',
  'i17a.png',
  'i17b.png',
  'i17c.png',
  'i17d.png',
  'i18a.png',
  'i18b.png',
  'i18c.png',
  'i18d.png',
  'i19a.png',
  'i19b.png',
  'i19c.png',
  'i19d.png',
  'i20a.png',
  'i20b.png',
  'i20c.png',
  'i20d.png',
  'i21a.png',
  'i21.png',
  'i21c.png',
  'i21d.png',
  'i22a.png',
  'i22b.png',
  'i22c.png',
  'i22d.png',
];

export default function CarouselIntro () {
  const [currentIndex, setCurrentIndex] = useState (0);

  useEffect (
    () => {
      const interval = setInterval (() => {
        setCurrentIndex ((currentIndex + 1) % images.length);
      }, 2000); // Change image every 3 seconds

      return () => clearInterval (interval); // Clean up the interval on component unmount
    },
    [currentIndex]
  );

  return (
    <div className="carouselFlag1">
      <img
        src={images[currentIndex]}
        alt="carousel-item"
        className="carousel-image"
      />
    </div>
  );
}
