import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
  "/z06.png",
  "/z06a.png",
"/flat.png",
 "/ferrari.png",
   "/20x.png",
   "/21x.png" ,
   "/22x.png",
   "/23x.png",
   "/24x.png",
   "/25x.png",
   "/26x.png",
   "/27x3.png",
    "/28x.png",
   "/29x.png",
   "/30x.png",
   "/1010x.png"
];


const CarouselFlag = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex]);

    return (
        <div className="carouselFlag1">
            <img src={images[currentIndex]} alt="carousel-item" className="carousel-image" />
        </div>
    );
};

export default CarouselFlag;



