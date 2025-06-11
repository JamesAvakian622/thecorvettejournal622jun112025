import React, { useState } from "react";
import "../styles/Page.css";
//import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carousel2026 from "./Carousel2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebar2026 from "./Sidebar2026";
import Sidebar2026B from "./Sidebar2026B";
import CarouselIntro from "../Z06/CarouselIntro";
import styled from "styled-components";


// Sample JSON data on the page
const data = [
  { title: "Get Ready For A New Experience", src: "/2026A.png" },
  { title: "Visible carbon fiber wheels with available J59 Ten Piston brake calipers in Velocity Yellow.", src: "/2026ZA.png" },
  { title: "2026 Corvette ZR1 Convertible in Competition Yellow Metallic Tintcoat.", src: "/2026B.png" },
  { title: "New Driver Centric, Three Screen Dashboard.", src: "/2026C.png" },
  { title: "New interior color for superior craftsmanship, sophistication and style.", src: "/2026D.png" },
  { title: "Section 2.png", src: "/2026E.png" },
  { title: "Section 3.png", src: "/2026F.png" },
  { title: "Available electrochromic coupe roof panel.", src: "/2026G.png" },
  { title: "2026 Corvette with Asymettrical Adrenaline Red / Jet Black Interior.", src: "/2026H.png" },
  { title: "2026 Corvette with Asymettrical Adrenaline Red / Jet Black Interior.", src: "/2026I.png" },
  { title: "2026 Corvette with Asymettrical Adrenaline Red / Jet Black Interior.", src: "/2026J.png" },
  { title: "2026 Corvette Convertible with Very Dark Atmosphere Interior.", src: "/2026K.png" },
  { title: "Bose Performance Series 14-Speaker audio system with Stealth Interior Trim Package and Carbon Fiber Package Level 2.", src: "/2026L.png" },
  { title: "Carbon Fiber Package Level 2.", src: "/2026M.png" },
  { title: "2026 Corvette with Sky Cool Gray / Medium Ash Gray Interior with Habenro stitching.", src: "/2026N.png" },
  { title: "2026 Corvette with Sky Cool Gray / Medium Ash Gray Interior with Habenro stitching.", src: "/2026O.png" },
  { title: "2026 Corvette with Sky Cool Gray / Medium Ash Gray Interior with Habenro stitching.", src: "/2026P.png" },
  { title: "2026 Corvette with Sky Cool Gray / Medium Ash Gray Interior with Habenero.", src: "/2026Q.png" },
  { title: "2026 Corvette ZR1 with Ultimate Suede Interior.", src: "/2026R.png" },
  { title: "Carbon fiber sueded microfiber wrapped steering wheel.", src: "/2026S.png" },
  { title: "Wireless charging pad.", src: "/2026T.png" },
  { title: "Leather wrapped passenger side grab handle.", src: "/2026U.png" },
  { title: "2026 Corvette ZR1 with Ultimate Suede Interior.", src: "/2026V.png" },
  { title: "2026 Corvette ZR1 with Ultimate Suede Interior.", src: "/2026W.png" },
  { title: "Driver Mode Selector.", src: "/2026X.png" },
  { title: "Bose Performance Series 14-Speaker audio system with Stealth Interior Trim Package and Carbon Fiber Package Level 2.", src: "/2026Y.png" },
  { title: "16 inch Reconfigurable Driver Information Center.", src: "/2026Z.png" }


];

// Styled-components
const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  text-align: center;
`;

const CarouselImage = styled.img`
  width: 200%;
  height: auto;
  border: 0px solid #000;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background: #007bff;
  color: white;
  border: none;

  &:hover {
    background: #0056b3;
  }
`;

export default function Page2026() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };


  return (
    <>
      <div className="rowPage">
        <Carousel2026 />
        <div className="col-3 ">
          <Sidebar2026 />
        </div>

        <div className="col-6">
          <h1>
            <b> The 2026 Chevrolet Corvette Details (Prelimary)  </b>
          </h1>
          <CarouselIntro />

          <h1>
            <b> "Excellence Meets Innovation"  </b>
          </h1>

          {/* <h5>         Source: GM, Corvette z2026, Hypersonic Gray</h5>

          <h2>            The Corvette z2026  <b> "King Of The Hill"</b>.

          </h2>
          <p>   The most powerful Corvette ever ! </p> */}


          {/* Performance-wise, the C8 now offers PTM Pro mode, which allows full deactivation of stability and traction control systems for track use.
 The C8 ZR1 is available with the ZTK Brake package, which includes carbon ceramic rotors and 10-piston front, six-piston rear calipers. */}
          <p>
            The 2026 Chevrolet Corvette is the most powerful Corvette ever
            produced. Reveal date May 2025, (Producti0on Date is estimated for August 2025.) Most is the improvement are internal with two 
            new external colors, updates to the interior are many more selections and color selections. More importantly 
            the vehicles, all models, will get a three electronic instrument display for a larger Infortainment display.
            Here are the exciting highlights:
          </p>
          <h3>
            <b>   Design    </b>
          </h3>
          <p>   Inside, the redesigned driver-focused cockpit delivers a refined, luxury experience with every stitch. </p>


     <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/Wheel2026">
            <img src="/Wheel2026" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
        <p>Stingray Base Model Wheel</p>
      </div>


          {/* < Caroubel Start > */}

          <CarouselWrapper>
            <h2>{data[currentIndex].title}</h2>

            <Controls>
              <Button onClick={goPrev}>Previous</Button>
              <Button onClick={goNext}>Next</Button>
            </Controls>
            <CarouselImage src={data[currentIndex].src} alt={data[currentIndex].title} />
          </CarouselWrapper>



          {/* </Carousel> */}

          <p>Base model Wheel, changed</p>
          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/Wheel2026.png">
              <img src="/Wheel2026.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />

            </a>
          </div>
        </div>


        <p>
          <b> Engine:</b> The Corvette LT7 z2026 engine features a 5.5L
          twin-turbocharged V8 engine with a flat-plane crankshaft,
          producing 1,064 horsepower and 828 lb-ft of torque.
        </p>
        <p>
          <b>Transmission: </b>It comes with an 8-speed dual-clutch eight
          speed transmission for lightning-fast gear shifts. Equipped also
          with left paddle only hold to lowest gear from any other for
          instant power from the engine.
        </p>
        <p>
          <b> 0-60 mph: </b> The Corvette z2026 can accelerate from 0 to 60
          mph in just 2.6 seconds.
        </p>
        <p>
          <b> Top Speed: </b> It boasts a top speed of 233 mph, making it
          one of the fastest production cars ever.
        </p>
        <h3>
          <b> Design </b>
        </h3>
        <p>
          <b> Aerodynamics:</b> The z2026 features cutting-edge aerodynamics
          with wide side air inlets, carbon-fiber elements, and a multitude
          of airflow and cooling features.
          <b>Exterior:</b>The design includes a sleek and aggressive look
          with quad center exhaust and available carbon-fiber trim.
          <b>Interior:</b> The cockpit is driver-centric with high-quality
          materials and bespoke options.
        </p>
        <h3>
          <b> Technology </b>
        </h3>
        <p>
          <b> Infotainment:</b>Standard wireless Apple CarPlay and Android
          Auto, with an available 14-speaker Bose Performance Series Sound
          system.
        </p>
        <p>
          <b> Performance App: </b>Provides real-time performance data and
          vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
          on the go.
        </p>
        <b> Selective Magnetic Ride Control:</b> This advanced suspension
        system adjusts damping to provide a smooth ride on various road
        conditions.
        <b>Advanced Infotainment: </b>The Stingray includes a
        state-of-the-art infotainment system with navigation, Bluetooth
        connectivity, and more.
        <h3>
          <b> Pricing Starting MSRP: </b>
        </h3>

        <Footer />
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPage2026 />

        <Sidebar2026B />
      </div>

    </div >

      </>
    );
}
