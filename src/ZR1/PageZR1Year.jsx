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
import Navbar5b from "../Navbar5b";
export default function PageZR1Year() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
      </div>
      <div className="col-3 ">
        <SidebarZR1 />
      </div>

      <div className="col-6">
        <h1>
          <b>           
             The Corvette ZR1     Model Years
          </b>
        </h1>
      <Navbar5b />

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
            The 2025 Chevrolet Corvette ZR1 is the most powerful Corvette ever
            produced. Here are some highlights:
        </p>
          <h3>
            <b> Performance </b>
          </h3>
        <p>
            Engine: The ZR1 features a 5.5L twin-turbocharged V8 engine with a
            flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
            torque. Transmission: It comes with an 8-speed dual-clutch
            transmission for lightning-fast gear shifts. Equipped also with left
            paddle only hold to lowest gear from any other for instant power
            from the engine. 0-60 mph: The ZR1 can accelerate from 0 to 60 mph
            in just 2.6 seconds. Top Speed: It boasts a top speed of 233 mph,
            making it one of the fastest production cars ever.
        </p>
          <h3>
            <b> Design </b>
          </h3>
        <p>
            Aerodynamics: The ZR1 features cutting-edge aerodynamics with wide
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
            <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>is
            designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
        </p>
            <div>
                <h3>
                  <b> References </b>
                </h3>
                <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. "Hagerty, The LT6 A Landmark Achievement  </Link>
                <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. "Vette Vues Magazine</Link>
               
              </div>
        <Footer />
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
          <OnPageZR1 />  <SidebarZR1B />
      </div>
    </>
  );
}
