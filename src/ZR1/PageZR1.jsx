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
import CarouselIntro from "./CarouselIntro";

export default function PageZR1() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h2>
            <b>
              <i>Presenting ...</i>
            </b>
          </h2>
          <h1>
            <b> The 2025 Chevrolet Corvette ZR1 </b>
          </h1>
          <CarouselIntro />
          <h5>    Source: GM, Corvette ZR1, Hypersonic Gray</h5>

          <h2>   The Corvette ZR1  <b> "King Of The Hill"</b>          </h2>

          <h1>   The most powerful Corvette ever ! </h1>

          <h2>    And It Has A  <b> Split Window !    </b>          </h2>
          <CarouselIntro />

          <h2>
            <b> Horsepower: 1064 hp @ 8,000 rpm, "Revving Fast And High"</b>
          </h2>
          <h2>
            <b> Torque: 828 lb-ft @ 6,300 rpm </b>
          </h2>
          <h2>
            <b> "The Corvette Track Car - What A Beast!"</b>
          </h2>


          <div className="responsive">
            <div className="gallery">
              <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
                <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
                />

              </a>
            </div>
          </div>
          <p> Corvette ZR1 Logo   </p>


          <p>
            The 2025 Chevrolet Corvette ZR1(Reveal July 25, 2024) is the most powerful Corvette ever
            produced. This vehicle has the largest Turbos, Without Turbo Lab, outfitted to any car. This car easily is fast with
            Top Speeds of 233 mph. It is considered a Track Beast. Only 302 will be manufactured this year making it
             a difficult to find later as an "Exclusive"  model to own!
</p>

                <p> Visit Our Website Pages For The Complete Corvette Lineup !</p>
          <div className="center">
            <Link to="/Stingray ">Stingray</Link>
            <Link to="/Z06 ">Z06</Link>
            <Link to="/Eray">E-Ray</Link>
            <Link to="/ZR1 ">ZR1</Link>
          </div>

<p>
             The 2025 Corvette ZR1 will be available for order starting February 13, 2025. Production is scheduled to 
             begin in the second quarter of 2025 at GM’s Bowling Green plant in Kentucky. The LT7 engine produces 1064 horsepower, 800 ft-lbs
             and base model 1LZ will start at $175,000 MSRP.              Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>
          <p>
            <b> Engine:</b> The Corvette LT7 ZR1 engine features a 5.5L
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
            <b> 0-60 mph: </b> The Corvette ZR1 can accelerate from 0 to 60
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
            <b> Aerodynamics:</b> The ZR1 features cutting-edge aerodynamics
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
          <p>
            The base model starts at <b> $174,995 </b>. The
            <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br /> </Link>is
            designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design. This SuperCar
            is only available in left-hand drive in the United States.
          </p>

          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.corvetteblogger.com/2020/06/23/the-c8-corvette-is-loaded-with-21st-century-composite-materials/  ">
              1. "C8 Corvette is Loaded with 21st Century Composite Materials",
              Corvette Blogger.
            </Link>
            <Link to="https://www.motortrend.com/how-to/vemp-1108-corvette-body-materials/">
              2. "Corvette Body Materials - From Fiberglass To Carbon Fiber",
              Motor Trend.
            </Link>
            <Link to="https://gmauthority.com/blog/2025/01/heres-how-much-the-2025-corvette-zr1-ztk-track-performance-package-costs/">
              3.  "Corvette ZR1 ZTK Track Performance Package Costs", GM Authority.
            </Link>
            <Link to="https://gmauthority.com/blog/2024/09/c8-corvette-zr1-brings-back-the-ztk-performance-package/">
              4. "C8 Corvette ZR! ZTK Package Comes Back", GM Authority.
            </Link>
          </div>


          <Footer /></div>


        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />  <SidebarZR1B />
        </div>
      </div>


    </>
  );
}
