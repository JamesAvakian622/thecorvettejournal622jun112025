import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselC8R from "./CarouselC8R";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageC8R from "./OnPageC8R";
import CarouselFlag from "./CarouselFlag";
import SidebarC8R from "./SidebarC8R";
export default function PageC8RYear() {
  return (
    <>
      <div className="rowPage">
        <SidebarC8R />
        <div className="col-3 ">
          <SidebarC8R />
        </div>
      </div>

      <div className="col-6">
        <h1>
          <b> The 2025 Chevrolet Corvette C8R </b>
        </h1>
      
        <p>
            The 2025 Chevrolet Corvette C8R is the most powerful Corvette ever
            produced. Here are some highlights:
        </p>
          <br />
          <h3>
            <b> Performance </b>
          </h3>
        <p>
            Engine: The C8R features a 5.5L twin-turbocharged V8 engine with a
            flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
            torque. Transmission: It comes with an 8-speed dual-clutch eight
            speedtransmission for lightning-fast gear shifts. Equipped also with
            left paddle only hold to lowest gear from any other for instant
            power from the engine. 0-60 mph: The C8R can accelerate from 0 to 60
            mph in just 2.6 seconds. Top Speed: It boasts a top speed of 233
            mph, making it one of the fastest production cars ever.
        </p>
          <br />
          <h3>
            <b> Design </b>
          </h3>
        <p>
            Aerodynamics: The C8R features cutting-edge aerodynamics with wide
            side air inlets, carbon-fiber elements, and a multitude of airflow
            and cooling features. <b>Exterior:</b>The design includes a sleek
            and aggressive look with quad center exhaust and available
            carbon-fiber trim.<b>Interior:</b> The cockpit is driver-centric
            with high-quality materials and bespoke options.
        </p>
          <br />
          <h3>
            <b> Technology </b>
          </h3>
        <p>
            Infotainment: Standard wireless Apple CarPlay and Android Auto, with
            an available 14-speaker Bose Performance Series Sound system.
            Performance App: Provides real-time performance data and vehicle
            information. Built-in Wi-Fi Hotspot: Keeps you connected on the go.
        </p>
          <br />
          Magnetic Selective Ride Control: This advanced suspension system
          adjusts damping to provide a smooth ride on various road conditions.
          Advanced Infotainment: The C8R includes a state-of-the-art
          infotainment system with navigation, Bluetooth connectivity, and more.
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
        <p>
            The base model starts at around $118,900. The 2025 Corvette C8R is
            designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
        </p>
          <br />
      
        <Footer />
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPageC8R />
      </div>
    </>
  );
}
