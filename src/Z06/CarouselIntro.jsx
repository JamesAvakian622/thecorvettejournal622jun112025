import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";

const images = [
  "/car/z06_yela.png",
  "/car/z06_yelb.png",
  "/car/z06_yelc.png",
  "/car/z06_yeld.png",
  "/car/z06_yele.png",
  "/car/z06_yelf.png",
  "/car/z06_yelg.png",
  "/car/z06_yelh.png",
  "/car/z06_yeli.png",
  "/car/z06_yelj.png",
  "/car/z06_yelk.png",
  "/car/z06_yell.png",
  "/car/z06_yelm.png",
  "/car/z06_yelm.png",
];

export default function CarouselIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

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
