import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
"/car/sting_oa.png",
"/car/sting_ob.png",
"/car/sting_oc.png",
"/car/sting_od.png",
"/car/sting_oe.png",
"/car/sting_of.png",
"/car/sting_og.png",
"/car/sting_oh.png",
"/car/sting_oi.png",
"/car/sting_oj.png",
"/car/sting_ok.png",
"/car/sting_ol.png",
"/car/sting_om.png",

];

export default function CarouselIntro () {
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





