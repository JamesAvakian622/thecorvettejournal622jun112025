import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

import './styles/Page.css';

import Footer from './Footer';
import CarouselZR1 from './ZR1/CarouselZR1';
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from './ZR1/OnPageZR1';
import CarouselFlag from './ZR1/CarouselFlag';
import SidebarZR1 from './ZR1/SidebarZR1';
import SidebarZR1B from './ZR1/SidebarZR1B';
import Navbar4 from './Navbar4';
import ReactPlayer from 'react-player';



// 
const CarouselWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Slide = styled.div`
  text-align: center;
  padding: 20px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function AutoShows() {
  const [selectedImage, setSelectedImage] = useState(null);


//   Philadelphia International Auto Show
//   Los Angeles Auto Show
//   Chicago Auto Show

//   Corvettes At Carlisle, PA

//   NCM, Bash,   April Date
  
//   Major Global Auto Shows

//   Geneva International Motor Show (Switzerland) – One of the most prestigious auto shows, known for luxury and concept cars.
  
//   Tokyo Motor Show (Japan) – Focuses on futuristic automotive technology and Japanese manufacturers.
  
//   Frankfurt Motor Show (IAA Mobility) (Germany) – A leading European auto show featuring cutting-edge mobility solutions.
  
//   Paris Motor Show (France) – Highlights European automotive trends and innovations.
  
//   North American International Auto Show (Detroit Auto Show) (USA) – A major event for American automakers and global brands.
  
  
//   Popular U.S. Auto Shows
  
//   Chicago Auto Show – The largest auto show in North America.
  
//   Los Angeles Auto Show – A key event for electric and luxury vehicles.
  
//   New York International Auto Show – Showcases new models and concept cars.
  
//   SEMA Show (Las Vegas) – Focuses on aftermarket automotive products and customization.
  
//   Barrett-Jackson Scottsdale – A premier collector car auction and exhibition.
  
  
//   Other Notable Shows
  
//   Beijing International Automotive Exhibition (Auto China) – A major event for the Chinese automotive market.
  
//   Dubai International Motor Show – Features high-end luxury and exotic cars.
  
//   São Paulo International Motor Show – The largest auto show in South America.



//   There are several national Corvette auto shows that bring together enthusiasts, collectors, and industry experts. Here are some of the biggest events:
//   Major National Corvette Shows
  
//   Bloomington Gold Corvette Show (Illinois) – One of the longest-running Corvette events, known for its rigorous judging system and factory-original restorations.
  
//   Corvettes at Carlisle (Pennsylvania) – One of the largest Corvette gatherings in the world, featuring thousands of Corvettes, auctions, and seminars.
  
//   Annual National Corvette Museum Bash (Bowling Green, Kentucky) – Hosted at the National Corvette Museum, this event offers sneak peeks at upcoming Corvette models and exclusive exhibits.
  
//   Lone Star Corvette Classic (Texas) – A multi-day event featuring road rallies, autocross, and Corvette showcases.
  
//   Big Cypress Corvette Classic (Texas) – A three-day event featuring classic and modern Corvettes, community activities, and charity fundraising.
  
//   Other Notable Corvette Shows

//   All American Corvette Club Anniversary Show (New Jersey) – A judged Corvette show with multiple awards.
//   Greater Dayton Corvette Club All-Corvette Show (Ohio) – A fun-filled event featuring Corvette displays and competitions.
//   Corvette Thunder in the Glen (New York) – Includes a Corvette festival, downtown block party, and Grand Prix course laps.



  const sections = [
    { title: "  Tadge Juechter        ", text: "  the legendary Corvette chief engineer, retired after an incredible 18-year tenure leading the Corvette program and over three decades shaping the C5 through C8 generations. His work was instrumental in making Corvette the quintessential American sports car, balancing performance, engineering, and affordability.     " },
    { title: "    ", text: " One of his biggest achievements was convincing GM to adopt a mid-engine layout for the C8 Corvette, a move that faced skepticism but ultimately elevated the car to supercar status. He described his career as a Golden Era for Corvette, where he and his team pushed the brand to new heights.     " },

    {
      title: "  ",
      text: "  Juechter also spoke out about GM's recent decision to part ways with long-time Corvette Product Manager Harlan Charles, praising Charles for his ability to translate customer input into successful product plans.   ",
    }
    
  ];

  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1>
            <Link to="/Stingray">The Corvette, Tadge Juechter, Chief Engineer, 2006-2024, Retired</Link>
          </h1>
          
          {/* <Navbar4 /> */}

          <br />
        

          <dir className="image-row">
         

            <div className="responsive">
              <div className="gallery">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Tadge.png"
                >
                  <img
                    src="/Tadge.png"
                    alt="Cinque Terre"
                    width={600}
                    height={600}
                  />
                </a>
                <div className="desc1">Tadge Juecther, Chief Engineer )</div>
              </div>
            </div>
          </dir>


  <h1> Still Photo, Movies, and discussion </h1>

      


          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>

    
        
<div className="center">
  <p>  Click on The YouTube Logo For Full Screen</p>
</div>

      <p>
          <b>   2024 Corvette Hall of Fame, GM/Chevrolet Category: Tadge Juechter   </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3jW2eOU0ZNo"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


<br /> <br />

      <p>
          <b>     2024 Corvette Hall of Fame, Corvette Racing Category: Oliver Gavin & Jan Magnussen   </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=g1oLNKi0B2Q"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


     <div className="references">
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.newsweek.com/2025/05/02/stuff-childhood-dreams-his-work-disrupted-american-sports-car-icon-2056515.html"      >
            NEWSWEEK MAGAZINE, "The Stuff of Childhood Dreams, His Work Disrupted an American Sports Car Icon"
            </Link>    
         


  <Link to=" https://www.corvettemuseum.org/car-shows/">
    {' '}National Corvette Museum, "Corvette Car Show Calendar"
  </Link>
  <Link to="https://www.corvettemuseum.org/museum-events/">
    {' '}National Corvette Museum, "Events"
  </Link>

</div>

 <Footer />

          </div>   
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />
          <SidebarZR1B />
        </div>
 
    </>
  );
}  

     
