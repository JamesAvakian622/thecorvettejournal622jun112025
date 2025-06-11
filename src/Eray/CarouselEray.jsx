import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

export default function CarouselEray () {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/00.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/Eraylogo.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00a.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/e3.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/e4.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/444x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00e.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/e5.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/1010.png" alt="Slide 1" />
      </div>
    </Carousel>
  );
};

