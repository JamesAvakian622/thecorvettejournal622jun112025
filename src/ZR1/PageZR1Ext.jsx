import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "./CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./OnPageZR1";
import CarouselFlag from "./CarouselFlag";
import SidebarZR1 from "./SidebarZR1";
import SidebarZR1B from "./SidebarZR1B";
import NavbarExtA from "../Zinternal/NavbarExtA";
import NavbarExtB from "../Zinternal/NavbarExtB";
import NavbarExtC from "../Zinternal/NavbarExtC";
import NavbarExtD from "../Zinternal/NavbarExtD";
import ButtonGridExtA from "../components/buttons/ButtonGridExtA";
import ButtonGridExtB from "../components/buttons/ButtonGridExtB";
//import ButtonRacingStipesZR1A from "../components/buttons/ButtonRacingStipesZR1A";
//import ButtonRacingStipesZR1 from "../components/buttons/ButtonRacingStipesZR1";


export default function PageZR1Ext() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
              2025 Corvette ZR1 Exterior
              </b>
            </h1>

     <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
            <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div>
<p> Corvette ZR1 Logo   </p>


              <h3>
              <b> Body Color</b>
            </h3>
            <NavbarExtA />
            <ButtonGridExtA />
            <br />
            <NavbarExtB />
            <ButtonGridExtB />
            <h3>
              <b> Racing Stipes</b>
            </h3>
            <NavbarExtC />
         
            {/* <ButtonRacingStipesZR1A /> */}
             <NavbarExtD />
            {/* <ButtonRacingStipesZR1 /> */}
            <br />
          </div>

        
          <p>
              The Corvette has a long history of using innovative materials for
              its exterior. Originally, it was known for its fiberglass body,
              which debuted in 1953.  Over the years, Chevrolet has transitioned
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

            <h3>
              <b> Exterior Pieces </b>
            </h3>
          <p>
              The exterior pieces as trim on the outside of the vehicle is
              manufactured from Carbon fiber and Carbon Flash are two distinct
              materials often used in Corvette design, each with its own
              aesthetic and functional appeal:
          </p>
          <p>
              <b> Carbon Fiber: </b> This is a lightweight, high-Stength
              material often left exposed to showcase its woven pattern. It's
              commonly used for performance-oriented parts like spoilers,
              splitters, and roofs. Its sleek, high-tech look is a favorite
              among enthusiasts.
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
              <Link to="/ZR1">
                2025 Corvette ZR1 Sports Car <br />
              </Link>
              is designed to deliver an exhilarating driving experience with
              cutting-edge technology and stunning design.
          </p>

            <div>
              <h3>
                <b> References </b>
              </h3>
              <Link to=" https://www.chevrolet.com/performance/corvette">
1. Chevrolet.com, "Colors That Capitave, The Stingray".{' '}
</Link>;

              <Link to="https://www.corvetteblogger.com/2020/06/23/the-c8-corvette-is-loaded-with-21st-century-composite-materials/  ">
                2. "C8 Corvette is Loaded with 21st Century Composite Materials,
                Corvette Blogger.
              </Link>
              <Link to="https://www.motortrend.com/how-to/vemp-1108-corvette-body-materials/">
                3. "Corvette Body Materials - From Fiberglass To Carbon Fiber,
                Motor Trend.
              </Link>
              <Link to="https://gmauthority.com/blog/2025/01/heres-how-much-the-2025-corvette-zr1-ztk-track-performance-package-costs/">
                4.  Corvette ZR1 ZTK Track Performance Package Costs
              </Link>
              <Link to="https://gmauthority.com/blog/2024/09/c8-corvette-zr1-brings-back-the-ztk-performance-package/">
                5. C8 Corvette ZR! ZTK Package Comes Back, GM Authority.
              </Link>
            </div>
        
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 /> <SidebarZR1B />
        </div>
        
      </div>
    </>
  );
}
