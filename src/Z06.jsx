import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZ06 from "./Z06/CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./Z06/OnPageZ06";
import CarouselFlag from "./Z06/CarouselFlag";
import SidebarZ06 from "./Z06/SidebarZ06";
import SidebarZ06B from "./Z06/SidebarZ06B";
import Navbar4 from "./Navbar4";
import CarouselIntro from "./Z06/CarouselIntro";
export default function Z06() {
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h2>
            <b>
              <i>Presenting ...</i>
            </b>
          </h2>
          <h1>
            <b> The 2025 Corvette Z06 </b>
          </h1>
          <br />


          <div className="center">
            <a target="_blank" rel="noopener noreferrer" href="/z06logo.png">
              <img
                src="/z06logo.png"
                alt="Cinque Terre"
                width={800}
                height={600}
              />
            </a>
            <div className="desc"> 2025 Corvette Z06</div>
          </div>


          <div className="right">
            <p>Source: Chevrolet.Com</p>
          </div>

          <CarouselIntro />
          <div className="right">
            <p>Source: Chevrolet.Com</p>
          </div>


          <p>
            <Link to="/Z06">2025 Corvette Z06 </Link>  is the most powerful Naturally
            Aspirated V8 ever produced anywhere, worldwide. Chevrolet has announced that the first
            ordering cycle begun on June 26, 2025, with production started on August 4, 2025.
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
            Here are some
            highlights:
          </p>
          <br />
          <h3>
            <b> Performance </b>
          </h3>
          <br />
          <p>
            <b> Engine:</b>
            The Corvette LT6 Z06 engine features a 5.5L twin-turbocharged V8
            engine with a flat-plane crankshaft, producing 670 horsepower and
            460 lb-ft of torque.
          </p>
          <br />
          <p>
            <b> Transmission: </b>It comes with an 8-speed dual-clutch eight
            speed transmission for lightning-fast gear shifts. Equipped also
            with left paddle only hold to lowest gear from any other for
            instant power from the engine.
          </p>
          <br />
          <p>
            <b> 0-60 mph: </b>
            The Corvette Z06 can accelerate from 0 to 60 mph in just 2.6
            seconds.
          </p>
          <br />
          <p>
            <b> Top Speed: </b>
            It boasts a top speed of 233 mph, making it one of the fastest
            production cars ever.
          </p>
          <br />
          <h3>
            <b> Design </b>
          </h3>
          <br />
          <p>
            <b> Aerodynamics:</b>
            The Z06 features cutting-edge aerodynamics with wide side air
            inlets, carbon-fiber elements, and a multitude of airflow and
            cooling features.
          </p>
          <br />
          <p>
            <b>Exterior:</b>The design includes a sleek and aggressive look
            with quad center exhaust and available carbon-fiber trim.
          </p>
          <br />
          <p>
            <b>Interior:</b>
            The cockpit is driver-centric with high-quality materials and
            bespoke options.
          </p>

          <h3>
            <b> Technology </b>
          </h3>

          <p>
            <b> Infotainment:</b>Standard wireless Apple CarPlay and Android
            Auto, with an available 14-speaker Bose Performance Series Sound
            system.
          </p>
          <br />
          <p>
            <b> Performance App: </b>Provides real-time performance data and
            vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
            on the go.
          </p>
          <br />
          <p>
            <b> Selective Magnetic Ride Control:</b>
            This advanced suspension system adjusts damping to provide a
            smooth ride on various road conditions. The six modes are Z mode,
            My Mode, Tour, Sport, Track, and Weather.
          </p>
          <br />
          <p>
            <b> Advanced Infotainment: </b>The Corvette Z06 includes a
            state-of-the-art infotainment system with navigation, Bluetooth
            connectivity, and more.
          </p>
          <br />
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <br />
          <p>
            The base model starts at around <b> $174,995 </b>. The
            <Link to="/Z06">2025 Corvette Z06 Sports Car </Link>is designed to
            deliver an exhilarating driving experience with cutting-edge
            technology and stunning design.
          </p>


          <div className="references">
            <h1>References</h1>
            <Link to="https://en.wikipedia.org/wiki/Chevrolet_Corvette_Z06_GT3.R"    >
              Chevrolet.com, "The Chevrolet, "Corvette Z06".
            </Link>
            <Link to="https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C8)">
              Wikipedia, "The Chevrolet, "Corvette Z06".
            </Link>
          </div>
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />

          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
