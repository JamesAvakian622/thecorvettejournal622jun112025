import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./Stingray/CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./Stingray/OnPageSting";
import CarouselFlag from "./Stingray/CarouselFlag";
import SidebarZR1 from "./Stingray/SidebarSting1";
export default function Stingray() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1>
            <b> The 2025 Corvette Stingray Sports Car </b>
          </h1>

        
          <p>
              The 2025 Chevrolet Corvette Stingray is the most powerful Corvette
              ever produced. Here are some highlights:
          </p>
            <h3>
              <b> Performance </b>
            </h3>
          <p>
              <b>Engine:</b> The Corvette LT2 Stingray engine features a 5.5L
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
              <b>Infotainment:</b>Standard wireless Apple CarPlay and Android
              Auto, with an available 14-speaker Bose Performance Series Sound
              system.
              <b>Performance App: </b>Provides real-time performance data and
              vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
              on the go.
          </p>
          <p>
              <b> Selective Magnetic Ride Control:</b>
              This advanced suspension system adjusts damping to provide a
              smooth ride on various road conditions. The six modes are Z mode,
              My Mode, Tour, Sport, Track, and Weather.
          </p>
            <b>Advanced Infotainment: </b>The Stingray includes a
            state-of-the-art infotainment system with navigation, Bluetooth
            connectivity, and more.
            <h3>
              <b> Pricing Starting MSRP: </b>
            </h3>
          <p>
              The base model starts at around <b> $174,995 </b>. The
              <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>is
              designed to deliver an exhilarating driving experience with
              cutting-edge technology and stunning design.
          </p>
        
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
            <OnPageZR1 />  <SidebarZR1 />
        </div>
      </div>
    </>
  );
}
