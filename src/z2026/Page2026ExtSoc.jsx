import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carouselz2026 from "./Carouselz2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebarz2026 from "./Sidebarz2026";
import Sidebarz2026B from "./Sidebarz2026B";
import NavbarExtA from "../Zinternal/NavbarExtA";
import NavbarExtB from "../Zinternal/NavbarExtB";
import NavbarExtC from "../Zinternal/NavbarExtC";
import NavbarExtD from "../Zinternal/NavbarExtD";
import ButtonGridExtA from "../components/buttons/ButtonGridExtA";
import ButtonGridExtB from "../components/buttons/ButtonGridExtB";
import ButtonRacingStipesz2026A from "../components/buttons/ButtonRacingStipesz2026A";
import ButtonRacingStipesz2026B from "../components/buttons/ButtonRacingStipesz2026B";


import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

function YouTubeEmbed ({ videoId }) {
return (
  <VideoWrapper>
    <StyledIframe
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  </VideoWrapper>
);
}






export default function Page2026ExtSoc() {
  return (
    <>
      <div className="rowPage">
        <Carouselz2026 />
        <div className="col-3 ">
          <Sidebarz2026 />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
                <Link to="/z2026">2026 Corvette z2026 </Link> Exterior
              </b>
            </h1>

              <h3>
              <b> Body Color, Social Media</b>
            </h3>
            <NavbarExtA />
            {/* <ButtonGridExtA /> */}
            <br />
            <NavbarExtB />
            {/* <ButtonGridExtB /> */}
            {/* <h3>
              <b> Racing Stipes</b>
            </h3> */}
            {/* <NavbarExtC />
         
            <ButtonRacingStipesz2026A />
             <NavbarExtD />
            <ButtonRacingStipesz2026B /> */}
            <br />
          </div>

        
          <p>
              The Corvette has a long history of using innovative materials for
              its exterior. Originally, it was known for its fiberglass body,
              which debuted in 1953. Over the years, Chevrolet has transitioned
              to more advanced composite materials to enhance performance and
              reduce weight. For example, the modern Corvette, like the C8,
              incorporates lightweight composites, carbon fiber, and other
              advanced materials to improve aerodynamics, durability, and
              overall efficiency.
          </p>

            <h3>
              <b> Exterior Body </b>
            </h3>
          <p>
              <b> The Corvette Paint: </b> The paint give the Corvette body its
              brilliant color. It has evolved over the years to incorporate
              advanced materials and techniques. Modern Corvettes typically use
              a base coat/clear coat system, which involves a layer of color
              (base coat) followed by a protective and glossy clear coat. This
              method enhances durability, UV resistance, and the overall
              aesthetic appeal of the car.
          </p>
          <p>
              The paint itself is often a combination of acrylic or
              urethane-based materials, designed to adhere well to the
              Corvette's composite body panels. These materials are chosen for
              their flexibility and ability to withstand the unique thermal and
              mechanical Stesses of the car's exterior.
          </p>

            <h3>              <b> Instagram</b>             </h3>
           <h3>              <b> C8, Artic White</b>             </h3>
            <iframe src="https://www.youtube.com/results?search_query=corvette+c8+arctic+white" width="600" height="400"></iframe>
    <div>
      {/* <YouTubeVideo title="ReactJS Styled Components Tutorial" videoId="if0WlwM8m9A" />
      <YouTubeVideo title="2026 Corvette z2026 LT7" videoId=" watch?v=9E4gxsMZ5UU&t=310s " /> */}
    
<YouTubeEmbed videoId="watch?v=TGbgWq-VplQ" />
<YouTubeEmbed videoId=" watch?v=9E4gxsMZ5UU&t=310s" />
    
    </div>
             <h3>              <b> C8, Artic White</b>             </h3>
          <p>
           <iframe src="https://www.instagram.com/p/CZk70KDLYMN/" width="600" height="400"></iframe>

          </p>
          <p>
              <b> Carbon Flash: </b>
              This is a metallic black paint finish with subtle silver speckles,
              giving it a glossy and sophisticated appearance. It's used on
              various accents like mirrors, vents, and emblems to complement the
              car's overall design. While it mimics the look of carbon fiber
              from a distance, it's a painted finish rather than a Stuctural
              material.
          </p>

          <p>
              Both options add unique character to the Corvette, and the choice
              often comes down to personal preference and the desired balance
              between performance and style.
          </p>

          <p>
              <b> Exterior:</b> The design includes a sleek and aggressive look
              with quad center exhaust and available carbon-fiber trim.
          </p>
          <p>
              <b>Interior:</b> The cockpit is driver-centric with high-quality
              materials and bespoke options.
          </p>
            <h3>
              <b> Technology </b>
            </h3>
          <p>
              <b> Infotainment:</b> Standard wireless Apple CarPlay and Android
              Auto, with an available 14-speaker Bose Performance Series Sound
              system.
          </p>
          <p>
              <b> Performance App:</b> Provides real-time performance data and
              vehicle informatainment.
          </p>
          <p>
              <b> Built-in Wi-Fi Hotspot:</b> Keeps you connected on the go.
          </p>
          <p>
              <b> Magnetic Selective Ride Control:</b> This advanced suspension
              system adjusts damping to provide a smooth ride on various road
              conditions.
          </p>
          <p>
              <b> Advanced Infotainment:</b> The Stingray includes a
              state-of-the-art infotainment system with navigation, Bluetooth
              connectivity, and more.
          </p>
            <h3>
              <b> Pricing Starting MSRP:</b>
            </h3>
          <p>
              The base model starts at around $118,900. The
              <Link to="/z2026">
                2026 Corvette z2026 Sports Car <br />
              </Link>
              is designed to deliver an exhilarating driving experience with
              cutting-edge technology and stunning design.
          </p>

            <div>
              <h3>
                <b> References </b>
              </h3>
              <Link to="https://www.corvetteblogger.com/2020/06/23/the-c8-corvette-is-loaded-with-21st-century-composite-materials/  ">
                1. C8 Corvette is Loaded with 21st Century Composite Materials,
                Corvette Blogger.
              </Link>
              <Link to="https://www.motortrend.com/how-to/vemp-1108-corvette-body-materials/">
                2. Corvette Body Materials - From Fiberglass To Carbon Fiber,
                Motor Trend.
              </Link>
              <Link to="https://gmauthority.com/blog/2026/01/heres-how-much-the-2026-corvette-z2026-ztk-track-performance-package-costs/">
                3. Corvette z2026 ZTK Track Performance Package Costs
              </Link>
              <Link to="https://gmauthority.com/blog/2024/09/c8-corvette-z2026-brings-back-the-ztk-performance-package/">
                4. C8 Corvette ZR! ZTK Package Comes Back, GM Authority.
              </Link>
            </div>
        
          <Footer />
        </div>
        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPage2026 /> <Sidebarz2026B />
        </div>
      </div>
    </>
  );
}
