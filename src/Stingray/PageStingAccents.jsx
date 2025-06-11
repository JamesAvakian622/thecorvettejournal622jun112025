import React, { useState, useEffect } from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting1 from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import CarouselIntro from "./CarouseIntro";
//import Spacer from "../components/Spacer";

import styled from "styled-components";
import "../styles/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageItem = styled.img`
  width: 130%;
  height: 125%;
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
  slidesToScroll: 1,
};

const slides = [
  { id: 1, image: 'https://via.placeholder.com/400', title: 'Slide 1' },
  { id: 2, image: 'https://via.placeholder.com/400', title: 'Slide 2' },
  { id: 3, image: 'https://via.placeholder.com/400', title: 'Slide 3' },
];


export default function PageStingAccents() {
  const [selectedImage, setSelectedImage] = useState(null);

  const jsonDataArray = [
    {
      "id": 1,
      "src": "/group1.png",
      "alt": "Image 1",
      "title": " Corvette, Adrenaline Red Accent Package ",
    },
    {
      "id": 2,
      "src": "/group2.png",
      "alt": "Image 2",
      "title": "Corvette, Blue Acccent Package ",
    },
    {
      "id": 3,
      "src": "/group3.png",
      "alt": "Image 3",

      "into1": "  Adrenaline Red Accent Package   ",
      "into2": "  Features With Adrenaline Red Accent Package:   ",
      "into3": "  Adrenaline Red interior   ",
      "into4": "   Torch Red seat belt color  ",
      "into5": " Available with exterior colors Arctic White, Black, or Torch Red    ",
      "into6": "  Stinger Stripe   ",
      "into7": " Carbon Flash/Edge Red when exterior color Arctic White or Black is selected    ",
      "into8": "  Carbon Flash/Midnight Silver when exterior color Torch Red is selected   ",
      "into9": "   Selection of one of the following wheels:  ",
      "into10": "  19 inch front/20 inch rear 5-open-spoke Carbon Flash-painted aluminum with machined edge   ",
      "into11": "   19 inch front/20 inch rear 20-spoke Gloss Black forged aluminum  ",
      "into12": "  19 inch front/20 inch rear 5-split-spoke Gloss Black forged aluminum   ",

      "into13": " Bright Red-painted brake calipers   ",
      "into14": " Low-profile rear spoiler and front splitter (spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package  ",
      "into12": "  Performance exhaust ",

      "title": "Corvette, Velocity Yellow Acccent Package ",

      "id": 3,
      "src": "/group3.png",
      "alt": "Image 3",

      "into1": "  Adrenaline Red Accent Package   ",
      "into2": "  Features With Adrenaline Red Accent Package:   ",
      "into3": "  Adrenaline Red interior   ",
      "into4": "   Torch Red seat belt color  ",
      "into5": " Available with exterior colors Arctic White, Black, or Torch Red    ",
      "into6": "  Stinger Stripe   ",
      "into7": " Carbon Flash/Edge Red when exterior color Arctic White or Black is selected    ",
      "into8": "  Carbon Flash/Midnight Silver when exterior color Torch Red is selected   ",
      "into9": "   Selection of one of the following wheels:  ",
      "into10": "  19 inch front/20 inch rear 5-open-spoke Carbon Flash-painted aluminum with machined edge   ",
      "into11": "   19 inch front/20 inch rear 20-spoke Gloss Black forged aluminum  ",
      "into12": "  19 inch front/20 inch rear 5-split-spoke Gloss Black forged aluminum   ",

      "into13": " Bright Red-painted brake calipers   ",
      "into14": " Low-profile rear spoiler and front splitter (spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package  ",
      "into12": "  Performance exhaust ",

      "title": "Corvette, Velocity Yellow Acccent Package ",


      "id": 3,
      "src": "/group3.png",
      "alt": "Image 3",

      "into1": "  Adrenaline Red Accent Package   ",
      "into2": "  Features With Adrenaline Red Accent Package:   ",
      "into3": "  Adrenaline Red interior   ",
      "into4": "   Torch Red seat belt color  ",
      "into5": " Available with exterior colors Arctic White, Black, or Torch Red    ",
      "into6": "  Stinger Stripe   ",
      "into7": " Carbon Flash/Edge Red when exterior color Arctic White or Black is selected    ",
      "into8": "  Carbon Flash/Midnight Silver when exterior color Torch Red is selected   ",
      "into9": "   Selection of one of the following wheels:  ",
      "into10": "  19 inch front/20 inch rear 5-open-spoke Carbon Flash-painted aluminum with machined edge   ",
      "into11": "   19 inch front/20 inch rear 20-spoke Gloss Black forged aluminum  ",
      "into12": "  19 inch front/20 inch rear 5-split-spoke Gloss Black forged aluminum   ",

      "into13": " Bright Red-painted brake calipers   ",
      "into14": " Low-profile rear spoiler and front splitter (spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package  ",
      "into12": "  Performance exhaust ",

      "title": "Corvette, Velocity Yellow Acccent Package ",

//       ////
//       Tension Blue Accent Package
//    All Features Included With Tension Blue Accent Package:
//         Sky Cool Gray interior
//    Tension Blue seat belt color
//    Arctic White exterior color
//    Carbon Flash Metallic- painted outside mirrors and spoiler
//    Edge Blue Full Length Dual Racing Stripes
//    19" front/20" rear 5 - split - spoke Satin Graphite with machined edge forged aluminum wheels
//   Low - profile rear spoiler and front splitter(spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package)
//    Performance exhaust

// /////

//    Velocity Yellow Accent Package
//    All Features Included With Velocity Yellow Accent Package:
//    Jet Black interior
//    Yellow seat belt color
//    Available with exterior colors Arctic White, Hysteria Purple Metallic, or Riptide Blue Metallic
//    Carbon Flash / Competition Yellow Stinger Stripe
//    Selection of one of the following wheels:
//   19" front/20" rear 5 - open - spoke Carbon Flash - painted aluminum with machined edge
//   19" front/20" rear 20 - spoke Gloss Black forged aluminum
//   19" front/20" rear 5 - split - spoke Gloss Black forged aluminum
//    Velocity Yellow - painted brake calipers
//   Low - profile rear spoiler and front splitter(spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package)
//    Performance exhaust


// //////
//    Edge Orange Accent Package
//    All Features Included With Edge Orange Accent Package:
//    Jet Black interior
//    Orange seat belt color
//    Available with exterior colors Arctic White or Black
//    Also includes Carbon Flash Metallic - painted outside mirrors and spoiler when Arctic White exterior color is selected
//    Edge Orange Full Length Dual Racing Stripes
//    Selection of one of the following wheels:
//   19" front/20" rear 5 - open - spoke Carbon Flash - painted aluminum with machined edge
//   19" front/20" rear 20 - spoke Gloss Black forged aluminum
//   19" front/20" rear 5 - split - spoke Gloss Black forged aluminum
//   Low - profile rear spoiler and front splitter(spoiler replaced with Z51 spoiler when ordered with available Z51 Performance Package)
//    Performance exhaust


// /////

//    Z51 Performance Package
//    All Features Included With Z51 Performance Package:
//    Required for track use
//    Z51 performance Brembo® brakes
//    Z51 performance suspension
//    Performance exhaust
//    Performance rear axle ratio
//    Electronic Limited Slip Differential(eLSD)
//   Z51 - specific front splitter and rear spoiler
//   Michelin® Pilot® Sport 4S 245 / 35ZR19 front and 305 / 30ZR20 rear, high performance, run - flat, summer - only tires1
//   Heavy - duty cooling system

//    ////

//    Coupe Engine Appearance Package
//    All Features Included With Coupe Engine Appearance Package:
//    Carbon fiber closeout panels on each side of the engine
//    LED engine lighting
//    Engine specifications plaque
// ///

// Not all of the 2025 Corevette Stingray options and option packages
// are listed.See the Chevrolet.com Performance website for prices,
//     availability, and dealer pricing.








    },
{
  "id": 4,
    "src": "/group4.png",
      "alt": "Image 4",
        "title": "  Corvette, Edge Orange Acccent Package",
    }
  ]


return (
  <>
    <div className="rowPage">
      <CarouselSting />
    </div>

    <div className="col-3">
      <SidebarSting1 />
    </div>

    <div className="col-6">
      <h2>
        <b>
          <i>Presenting ...</i>
        </b>
      </h2>
      <h1>
        <b> The 2025  Corvette Stingray </b>
      </h1>
      <h1>
        <b> Interior / Exterior Accent Color Packages </b>
      </h1>


      <div className="center">
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/stinglogo.png">
              <img src="/stinglogo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />

            </a>
          </div>
        </div>
        <p> Corvette Stingray Logo   </p>



        <CarouselIntro />

        {     /*  Start Photo Display  */}

        <div className="center">
          {selectedImage &&
            <Overlay onClick={() => setSelectedImage(null)}>
              <FullscreenImage src={selectedImage} alt="Fullscreen View" />
            </Overlay>}

          <GridContainer>
            {jsonDataArray.map((image) => (
              <><ImageItem
                key={image.id}
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImage(image.src)} />
                <br /><br />
                <div className="center">
                  <h2>  {image.info1}    </h2>
                  <h3> {image.info2} </h3><ul>
                    <p>   <li>   {image.info4}   </li>   </p>
                    <p>   <li>   {image.info5}   </li>   </p>


                    <p>   <li>   {image.info6}   </li>   </p>
                    <p>   <li>   {image.info7}   </li>   </p>
                    <p>   <li>   {image.info8}   </li>   </p>
                    <p>   <li>   {image.info9}   </li>   </p>
                    <p>   <li>   {image.info10}   </li>   </p>
                    <p>   <li>   {image.info11}   </li>   </p>
                    <p>   <li>   {image.info12}   </li>   </p>
                    <p>   <li>   {image.info13}   </li>   </p>
                    <p>   <li>   {image.info14}   </li>   </p>

                    <h2>  {image.title}    </h2>

                  </ul>

                </div>
                <br /><br />

              </>
            ))}


            <br /><br /><br />


          </GridContainer>

        </div>

        {   /* End Photo Display */}


        <div className="references">
          <h1>References</h1>
          <Link to=" https://www.chevrolet.com/performance/corvette">   1. Chevrolet.com, "Colors That Capitave, The Stingray". </Link>
        </div>


        <Footer />

      </div>

      <div className="col-3 ">
        <CarouselFlag />
        <OnPageSting />
        <SidebarStingB />
      </div>
    </div>
  </>
);
}
