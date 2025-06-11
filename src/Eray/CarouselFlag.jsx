import React, { useState, useEffect } from "react";
import '../styles/Carousel.css'

const images = [
    "/car/eray_r.png",
"/car/eray_ra.png",
"/car/eray_rb.png",
"/car/eray_rc.png",
"/car/eray_rd.png",
"/car/eray_re.png",
"/car/eray_rf.png",
"/car/eray_rg.png",
"/car/eray_rh.png",
"/car/eray_ri.png",
"/car/eray_rj.png",
"/car/eray_rk.png",
"/car/eray_rl.png",
"/car/eray_rm.png",
"/car/eray_rn.png",
"/car/eray_ro.png",
"/car/eray_rp.png",
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





