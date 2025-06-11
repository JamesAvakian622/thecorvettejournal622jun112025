// ResponsiveCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AFullCarousel6() {
  const carouselItems = [
    {
      src: "path/to/your/image1.png",
      url: "https://example.com/link1",
      alt: "Image 1",
    },
    {
      src: "path/to/your/image2.png",
      url: "https://example.com/link2",
      alt: "Image 2",
    },
    {
      src: "path/to/your/image3.png",
      url: "https://example.com/link3",
      alt: "Image 3",
    },
  ];

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      emulateTouch
      interval={3000}
    >
      {carouselItems.map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </Carousel>
  );
}
