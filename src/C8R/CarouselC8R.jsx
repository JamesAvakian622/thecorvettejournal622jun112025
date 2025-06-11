import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Carousel.css";

const CarouselC8R = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/00.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00a.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/355.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00c.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/123.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00n.png" alt="Slide 1" />
      </div>
      <div>
        <img src="./00f.png" alt="Slide 1" />
      </div>
      <div>
        <img src="./1010.png" alt="Slide 1" />
      </div>
    </Carousel>
  );
};

export default CarouselC8R;
