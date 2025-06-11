import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

const CarouselZR1 = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/00.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/00a.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/10x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/11x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/12x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/13x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/14x.png" alt="Slide 1" />
      </div>
      {/* <div>
    <img src="/15x.png" alt="Slide 1"/>
    </div>  */}
      <div>
        <img src="/16x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/11x.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/1010.png" alt="Slide 1" />
      </div>




    </Carousel>
  );
};

export default CarouselZR1;
