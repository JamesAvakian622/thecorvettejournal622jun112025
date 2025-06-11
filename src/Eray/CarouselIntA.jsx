import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
"/car/i_1.png",
"/car/i_2.png",
"/car/i_3.png",
"/car/i_4.png",
];


export default function CarouselIntA () {
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





