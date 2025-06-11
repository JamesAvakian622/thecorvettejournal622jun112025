import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
"/car/z2026_ga.png",
"/car/z2026_gb.png",
"/car/z2026_gc.png",
"/car/z2026_gd.png",
"/car/z2026_ge.png",
"/car/z2026_gf.png",
"/car/z2026_gg.png",
"/car/z2026_gh.png",
"/car/z2026_gi.png",
"/car/z2026_gj.png",
"/car/z2026_gk.png",
"/car/z2026_gl.png",
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





