// ResponsiveCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AFullCarousel8() {
  const carouselItems = [
    {
      src: "/carousel/z2026/1.png",
      url: "https://example.com/link1",
      alt: "Image 1"
    },
 {
      src: "/carousel/z2026/2.png",
      url: "https://example.com/link2",
      alt: "Image 2"
    },
    {
      src: "/carousel/z2026/3.png",
      url: "https://example.com/link3",
      alt: "Image 3"
    },
    {
      src: "/carousel/z2026/4.png",
      url: "https://example.com/link4",
      alt: "Image 4"
    },
    {
      src: "/carousel/z2026/5.png",
      url: "https://example.com/link5",
      alt: "Image 5"
    }
    ,
    {
      src: "/carousel/z2026/6.png",
      url: "https://example.com/link6",
      alt: "Image 6"
    },
    {
      src: "/carousel/z2026/7.png",
      url: "https://example.com/link7",
      alt: "Image 7"
    },
    {
      src: "/carousel/z2026/8.png",
      url: "https://example.com/link8",
      alt: "Image 8"
    }
    ,
    {
      src: "/carousel/z2026/9.png",
      url: "https://example.com/link9",
      alt: "Image 9"
    },
    {
      src: "/carousel/z2026/10.png",
      url: "https://example.com/link10",
      alt: "Image 10"
    }                 
    ,
    {
      src: "/carousel/z2026/11.png",
      url: "https://example.com/link11",
      alt: "Image 11"
    },
    {
      src: "/carousel/z2026/12.png",
      url: "https://example.com/link12",
      alt: "Image 12"
    }
    ,
    {
      src: "/carousel/z2026/13.png",
      url: "https://example.com/link13",
      alt: "Image 13"
    },
    {
      src: "/carousel/z2026/14.png",
      url: "https://example.com/link14",
      alt: "Image 14"
    }
    ,
    {
      src: "/carousel/z2026/15.png",
      url: "https://example.com/link15",
      alt: "Image 15"
    },
    {
      src: "/carousel/z2026/16.png",
      url: "https://example.com/link16",
      alt: "Image 16"
    }
    ,
    {
      src: "/carousel/z2026/17.png",
      url: "https://example.com/link17",
      alt: "Image 17"
    },
    {
      src: "/carousel/z2026/18.png",
      url: "https://example.com/link18",
      alt: "Image 18"
    }
    ,
    {
      src: "/carousel/z2026/19.png",
      url: "https://example.com/link19",
      alt: "Image 19"
    },
    {
      src: "/carousel/z2026/20.png",
      url: "https://example.com/link20",
      alt: "Image 20"
    }
    ,
    {
      src: "/carousel/z2026/21.png",
      url: "https://example.com/link21",
      alt: "Image 21"
    },
    {
      src: "/carousel/z2026/22.png",
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


