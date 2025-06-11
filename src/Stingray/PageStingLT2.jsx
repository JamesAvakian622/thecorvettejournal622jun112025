import React, {useState} from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import styled from "styled-components";



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




export default function PageStingLT2() {
  const [selectedImage, setSelectedImage] = useState(null);

  const jsonDataArray = [
    {
      "id": 1,
      "src": "/imgs/Stingray/LT1LT2.png",
      "alt": "LT1 LT2 plot"
    }
  ];

  return (
    <>
      <div className="rowPage">
        <CarouselSting />
      </div>

      <div className="col-3 ">
        <SidebarSting />
      </div>

      <div className="col-6">
        <h1>
          <b> The 2025 Corvette LT2 Engine </b>
        </h1>
        <h2>
          <b> 490 Horsepower, 465 ft-lbs </b>
        </h2>

        <img
            src="/LT2.png"
            alt="High-performance LT2 engine"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
        <h5>         Source: Corvette Magazine.com</h5>
        
         <p>
            Corvette engines are primarily manufactured at GM’s Performance Build Center in Bowling Green, Kentucky.
            This facility specializes in assembling high-performance engines, including those used in the ZR1, Z06, and E-Ray models.
          </p>
          <p>
            Additionally, some Corvette engines, like the LT2 and LT6, are produced at GM’s Tonawanda Engine Plant in Buffalo, New York, which has a long history of building powerful V8 engines for Chevrolet.
          </p>
          <p>
            Bowling Green remains the heart of Corvette production, ensuring precision and performance in every engine.
          </p>
      
        <p>
            The 2025 Chevrolet Corvette Stingray continues to impress with its
            blend of performance, design, and value. Here are some key
            highlights: The Stingray is part of the Corvette lineup, which also
            includes the <Link to="/Stingray">2025 Corvette Stingray </Link>, Z06, and
            the upcoming ZR1. Each model offers a unique driving experience,
            catering to different performance needs and preferences3.
        </p>
          <h3>
            <b> Performance </b>
          </h3>
        <p>
            Performance: The Stingray features a naturally aspirated V8 engine
            positioned behind the driver, delivering up to 495 horsepower and
            470 lb-ft of torque. It boasts a 0-60 mph time of 2.9 seconds and a
            top speed of 194 mph.
        </p>

{
  /*  Start Photo Display  */
}

<div className="center">
  {selectedImage &&
    <Overlay onClick={() => setSelectedImage (null)}>
      <FullscreenImage src={selectedImage} alt="Fullscreen View" />
    </Overlay>}

  <GridContainer>
    {jsonDataArray.map (image => (
      <ImageItem
        key={image.id}
        src={image.src}
        alt={image.alt}
        onClick={() => setSelectedImage (image.src)}
      />
    ))}
  </GridContainer>
</div>

{
  /* End Photo Display */
}


          <h3>
            <b> Design </b>
          </h3>
        <p>
            The 2025 model offers a Stiking design with multiple leather seat
            designs and wheel options for customization. It also includes a
            retractable hardtop for the convertible version2.
        </p>
          <h3>
            <b> Interior </b>
          </h3>
        <p>
            The cockpit combines advanced technology with expert craftsmanship,
            featuring genuine leather seats, a head-up display, and a Bose sound
            system.
        </p>
          <h3>
            <b> Price</b>
          </h3>
        <p>
            The Stingray starts at $68,300 for the coupe and $89,335 for the
            convertible.
        </p>
      
        <Footer />
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPageSting />
 <SidebarStingB />
      </div>
    </>
  );
}
