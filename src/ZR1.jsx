import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZR1 from "./ZR1/SidebarZR1";
import SidebarZR1B from "./ZR1/SidebarZR1B";
//import NavbarZR1 from "./NavbarZR1";
import CarouselIntro from "./Z06/CarouselIntro";

export default function ZR1() {
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
            <b> The 2025 Corvette ZR1 </b>
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
          <div className="right">
            <p>Source: Chevrolet.Com</p>
          </div>

          <CarouselIntro />

          <div className="right">
            <p>Source: Chevrolet.Com</p>
          </div>

          <p>The Corvette ZR1 </p>


          <h1> "The King Of The Hill"  </h1>

          <div className="center">
            <a target="_blank" rel="noopener noreferrer" href="/zrz.png">
              <img
                src="/zrz.png"
                alt="Cinque Terre"
                width={800}
                height={600}
              />
            </a>
            {/* <div className="desc"> 2025 Corvette Stingray</div> */}
          </div>

          <p>
            <Link to="/Z06">2025 Corvette ZR1 </Link>   is the most powerful Corvette ever
            produced, it officially revealed on July 25, 2024. Chevrolet has  equipped this beast of a car

            with a twin-turbo 5.5L LT7 engine.  It has 1064 horsepower and 828 ft-lbs of torque with a top speed of 233 mph.

            Chevrolet has announced that the first  ordering cycle begun on June 26, 2025, with production started on August 4, 2025.
          </p>


          <p> Visit Our Website Pages For The Complete Corvette Lineup !</p>
          <div className="center">
            <Link to="/Stingray ">Stingray</Link>
            <Link to="/Z06 ">Z06</Link>
            <Link to="/Eray">E-Ray</Link>
            <Link to="/ZR1 ">ZR1</Link>
          </div>

          <br />


          <p>
            Here are some highlights:
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
            <b> Transmission: </b>It comes with an 8-speed dual-clutch eight
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
            <b> Performance App: </b>Provides real-time performance data and
            vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
            on the go.
          </p>
          <p>
            <b> Selective Magnetic Ride Control:</b>
            This advanced suspension system adjusts damping to provide a
            smooth ride on various road conditions. The six modes are Z mode,
            My Mode, Tour, Sport, Track, and Weather.
          </p>
          <b> Advanced Infotainment: </b>The Stingray includes a
          state-of-the-art infotainment system with navigation, Bluetooth
          connectivity, and more.
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around <b> $174,995 </b>. The
            <Link to="/ZR1">
              2025 Corvette ZR1 Sports Car <br />
            </Link>
            is designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

          <div className="references">
            <h1>References</h1>
            <h3>
              <a Link to="https://en.wikipedia.org/wiki/Chevrolet_Corvette_ZR1">
                Corvette ZR1
              </a>
            </h3>
          </div>


          <div className="references">
            <h1>References</h1>
            <Link to="https://www.chevrolet.com/performance/corvette/zr1">
              Chevrolet.com, "The Chevrolet, "Corvette ZR1"
            </Link>
            <Link to="https://en.wikipedia.org/wiki/Chevrolet_Corvette_ZR1">
              Wikipedia, "The Chevrolet, "Corvette ZR1"
            </Link>
          </div>


          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />
          <SidebarZR1B />

        </div>

      </div>
    </>
  );
}
