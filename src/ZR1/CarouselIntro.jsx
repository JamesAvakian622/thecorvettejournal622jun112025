import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
"/car/zr1_ga.png",
"/car/zr1_gb.png",
"/car/zr1_gc.png",
"/car/zr1_gd.png",
"/car/zr1_ge.png",
"/car/zr1_gf.png",
"/car/zr1_gg.png",
"/car/zr1_gh.png",
"/car/zr1_gi.png",
"/car/zr1_gj.png",
"/car/zr1_gk.png",
"/car/zr1_gl.png",

];

export default function CarouselIntro () {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 2000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex]);

    return (
        <div className="carouselFlag1">
            <img src={images[currentIndex]} alt="carousel-item" className="carousel-image" />
        </div>
    );
};





