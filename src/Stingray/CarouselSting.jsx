import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

const CarouselSting = () => {
  return (    
     <><br /><br />  
     <Carousel autoPlay infiniteLoop showThumbs={false}>

    <div>
      <img src="/00.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/sting.png" alt="Slide 1" />
    </div>

    <div>
      <img src="/011x.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/orgint.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/99x.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/100x.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/111.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/01x.png" alt="Slide 1" />
    </div>
    <div>
      <img src="/1010.png" alt="Slide 1" />
    </div>
    <br />
  </Carousel></>
  );
};

export default CarouselSting;
