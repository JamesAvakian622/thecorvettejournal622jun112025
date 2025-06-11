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
//import Accord from "./Accord";

// was SidebarZR1
export default function PageZR1Legacy() {
  return (
    <>
      <div className="containerZ">
        <div className="rowPage">
          <CarouselZR1 />
        </div>
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1 className="center">

            <b> The 2025 Corvette ZR1 What YEars Legacy</b>
          </h1>

     

     <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
            <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div> <h1 className="center">
<p> Corvette ZR1 Logo   </p>

    
            <Link to="../LT7"> The LT7 Engine </Link>
          </h1>



          <img src="/LT7.png" alt="ZR1 engine" />
          <h3>
            <p>
              <b>

                Horsepower: 1,064 hp @ 7,000 rpm, "The Fastest Corvette Ever !"
              </b>
            </p>
            <p>
              <b> Torque: 828 lb-ft @ 6,000 rpm </b>
            </p>
          </h3>

          <p>
            The 2025 Chevrolet Corvette ZR1 is the most powerful Corvette ever
            produced. Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>
          <p>
            <b>Engine:</b> The ZR1 features a 5.5L twin-turbocharged V8 engine
            with a flat-plane crankshaft, producing 1,064 horsepower and 828
            lb-ft of torque.
          </p>
          <p>
            <b>Transmission: </b>It comes with an 8-speed dual-clutch
            transmission for lightning-fast gear shifts. Equipped also with left
            paddle only hold to lowest gear from any other for instant power
            from the engine. 0-60 mph: The ZR1 can accelerate from 0 to 60 mph
            in just 2.6 seconds.
          </p>
          <p>
            <b> Top Speed: </b>It boasts a top speed of 233 mph, making it one
            of the fastest production cars ever.
          </p>
          <h3>
            <b> Design </b>
          </h3>
          <p>
            <b>Aerodynamics:</b>The ZR1 features cutting-edge aerodynamics with
            wide side air inlets, carbon-fiber elements, and a multitude of
            airflow and cooling features.
          </p>
          <p>
            <b>Exterior:</b> The design includes a sleek and aggressive look
            with quad center exhaust and available carbon-fiber trim.
          </p>
          <p>
            <b> Interior:</b> The cockpit is driver-centric with high-quality
            materials and bespoke options.
          </p>
          <h3>
            <b> Technology </b>
          </h3>
          <p>
            Infotainment: Standard wireless Apple CarPlay and Android Auto, with
            an available 14-speaker Bose Performance Series Sound system.
            Performance App: Provides real-time performance data and vehicle
            information. Built-in Wi-Fi Hotspot: Keeps you connected on the go.
          </p>
          Magnetic Selective Ride Control: This advanced suspension system
          adjusts damping to provide a smooth ride on various road conditions.
          Advanced Infotainment: The Stingray includes a state-of-the-art
          infotainment system with navigation, Bluetooth connectivity, and more.
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around $118,900. The
            <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br /> </Link>is
            designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

  
     

        <div className="responsive">
          <h3>            <b> References </b>          </h3>
          <Link to="https://www.youtube.com/watch?v=9E4gxsMZ5UU&t=301s">            1. "2025 Corvette, ZR1, LT7 Engine Walk Around            </Link>
          <Link to="https://www.youtube.com/watch?v=Rs-3YmQfZos">            2. "2025 Corvette ZR1 Engine, Engineering Explained          </Link>
        </div>
        <Footer />
  </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />  <SidebarZR1B />
        </div>
     </div>
    </>
  );
}
