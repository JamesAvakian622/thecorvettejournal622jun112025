// ResponsiveCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AFullCarousel8() {
  const carouselItems = [
    {
      src: "/carousel/zr1/1.png",
      url: "https://example.com/link1",
      alt: "Image 1"
    },
 {
      src: "/carousel/zr1/2.png",
      url: "https://example.com/link2",
      alt: "Image 2"
    },
    {
      src: "/carousel/zr1/3.png",
      url: "https://example.com/link3",
      alt: "Image 3"
    },
    {
      src: "/carousel/zr1/4.png",
      url: "https://example.com/link4",
      alt: "Image 4"
    },
    {
      src: "/carousel/zr1/5.png",
      url: "https://example.com/link5",
      alt: "Image 5"
    }
    ,
    {
      src: "/carousel/zr1/6.png",
      url: "https://example.com/link6",
      alt: "Image 6"
    },
    {
      src: "/carousel/zr1/7.png",
      url: "https://example.com/link7",
      alt: "Image 7"
    },
    {
      src: "/carousel/zr1/8.png",
      url: "https://example.com/link8",
      alt: "Image 8"
    }
    ,
    {
      src: "/carousel/zr1/9.png",
      url: "https://example.com/link9",
      alt: "Image 9"
    },
    {
      src: "/carousel/zr1/10.png",
      url: "https://example.com/link10",
      alt: "Image 10"
    }                 
    ,
    {
      src: "/carousel/zr1/11.png",
      url: "https://example.com/link11",
      alt: "Image 11"
    },
    {
      src: "/carousel/zr1/12.png",
      url: "https://example.com/link12",
      alt: "Image 12"
    }
    ,
    {
      src: "/carousel/zr1/13.png",
      url: "https://example.com/link13",
      alt: "Image 13"
    },
    {
      src: "/carousel/zr1/14.png",
      url: "https://example.com/link14",
      alt: "Image 14"
    }
    ,
    {
      src: "/carousel/zr1/15.png",
      url: "https://example.com/link15",
      alt: "Image 15"
    },
    {
      src: "/carousel/zr1/16.png",
      url: "https://example.com/link16",
      alt: "Image 16"
    }
    ,
    {
      src: "/carousel/zr1/17.png",
      url: "https://example.com/link17",
      alt: "Image 17"
    },
    {
      src: "/carousel/zr1/18.png",
      url: "https://example.com/link18",
      alt: "Image 18"
    }
    ,
    {
      src: "/carousel/zr1/19.png",
      url: "https://example.com/link19",
      alt: "Image 19"
    },
    {
      src: "/carousel/zr1/20.png",
      url: "https://example.com/link20",
      alt: "Image 20"
    }
    ,
    {
      src: "/carousel/zr1/21.png",
      url: "https://example.com/link21",
      alt: "Image 21"
    },
    {
      src: "/carousel/zr1/22.png",
      url: "https://example.com/link22",
      alt: "Image 22"
    }
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
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </Carousel>
  );
}


