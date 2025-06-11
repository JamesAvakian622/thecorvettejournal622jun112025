import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'

const CarouselZR1 = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="./c8.png" alt="Slide 1"/>
      </div>
      <div>
        <img src="/corvette.png" alt="Slide 2"/>
      </div>
      <div>
        <img src="/gastank.png" alt="Slide 3"/>
      </div>
    </Carousel>
  );
};

export default CarouselZR1;
