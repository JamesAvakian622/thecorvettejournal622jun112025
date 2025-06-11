import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

export default function CarouselIntLT () {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/ccc1.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/ccc2.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/ccc3.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/ccc4.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/ccc5.png" alt="Slide 1" />
      </div>
      
    </Carousel>
  );
};
