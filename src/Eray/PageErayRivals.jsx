import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselEray from "./CarouselEray";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageEray from "./OnPageEray";
import CarouselFlag from "./CarouselFlag";
import SidebarEray from "./SidebarEray";
import SidebarErayB from "./SidebarErayB";
export default function PageErayRivals() {
  return (
    <>
      <div className="rowPage">
        <CarouselEray />
        <div className="col-3 ">
          <SidebarEray />
        </div>

        <div className="col-6">
          <h1>
            <b> The 2025 Corvette Eray Rivals</b>
          </h1>
        <p>NSX, Ferrari, Porsche, electronfied spoprts cars</p>
          <p>
              The 2025 Chevrolet Corvette Z06 is the most powerful Corvette ever
              produced. Here are some highlights:
          </p>
            <h3>
              <b> Performance </b>
            </h3>
          <p>
              Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
              flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
              torque. Transmission: It comes with an 8-speed dual-clutch
              transmission for lightning-fast gear shifts. Equipped also with
              left paddle only hold to lowest gear from any other for instant
              power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
              60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
              233 mph, making it one of the fastest production cars ever.
          </p>
            <h3>
              <b> Design </b>
            </h3>
          <p>
              Aerodynamics: The Z06 features cutting-edge aerodynamics with wide
              side air inlets, carbon-fiber elements, and a multitude of airflow
              and cooling features. <b>Exterior:</b>The design includes a sleek
              and aggressive look with quad center exhaust and available
              carbon-fiber trim.<b>Interior:</b> The cockpit is driver-centric
              with high-quality materials and bespoke options.
          </p>
            <h3>
              <b> Technology </b>
            </h3>
          <p>
              Infotainment: Standard wireless Apple CarPlay and Android Auto,
              with an available 14-speaker Bose Performance Series Sound system.
              Performance App: Provides real-time performance data and vehicle
              information. Built-in Wi-Fi Hotspot: Keeps you connected on the
              go.
          </p>
            Magnetic Selective Ride Control: This advanced suspension system
            adjusts damping to provide a smooth ride on various road conditions.
            Advanced Infotainment: The Stingray includes a state-of-the-art
            infotainment system with navigation, Bluetooth connectivity, and
            more.
            <h3>
              <b> Pricing Starting MSRP: </b>
            </h3>
          <p>
              The base model starts at around $118,900. The
              <Link to="/Z06">2025 Corvette Z06 </Link> is designed to deliver
              an exhilarating driving experience with cutting-edge technology
              and stunning design.
          </p>
        

          

     <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="   https://gmauthority.com/blog/2025/06/2025-chevy-corvette-e-ray-officially-introduced-in-europe/  " >  1. "2025 Chevy Corvette E-Ray Officially Introduced In Europe", GM authority
          </Link>
      
        </div>


          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
           <OnPageEray />   <SidebarErayB />
        </div>
      </div>
    </>
  );
}
