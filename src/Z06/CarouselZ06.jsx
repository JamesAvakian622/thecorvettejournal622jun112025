import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'

const CarouselZ06 = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/00.png" alt="Slide 1"/>
      </div>
      <div>
   <img src="/z06logo.png" alt="Slide 1"/>
    </div>
         <div>
   <img src="/333x.png" alt="Slide 1"/>
    </div>
      <div>
      <img src="/00a.png" alt="Slide 1"/>
      </div>
      <div>
      <img src="/20x.png" alt="Slide 1"/>
      </div>
      <div>
      <img src="/z06exhaust.png" alt="Slide 1"/>
      </div>
      <div>
      <img src="/21x.png" alt="Slide 1"/>
    </div>
    {/* <div>
      <img src="/01x.png" alt="Slide 1"/>
    </div> */}
  <div>
    <img src="/99x.png" alt="Slide 1"/>
    </div>
     <div>
    <img src="/100x.png" alt="Slide 1"/>
    </div>
     {/*   <div>
    <img src="/25x.png" alt="Slide 1"/>
    </div>  */}
    <div>
      <img src="/26x.png" alt="Slide 1"/>
      </div>
      <div>
      <img src="/27x.png" alt="Slide 1"/>
    </div>
    <div>
    <img src="/28x.png" alt="Slide 1"/>
    </div>
     {/*   <div>
    <img src="/29x.png" alt="Slide 1"/>
    </div>
  <div>
    <img src="/30x.png" alt="Slide 1"/>
    </div> */}
    <div>
    <img src="/1010.png" alt="Slide 1"/>
    </div> 
    </Carousel>
  );
};

export default CarouselZ06;
