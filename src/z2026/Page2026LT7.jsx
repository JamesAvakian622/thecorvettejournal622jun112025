import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carousel2026 from "./Carousel2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebar2026 from "./Sidebar2026";
import Sidebar2026B from "./Sidebar2026B";
//import Accord from "./Accord"

// was Sidebar2026
export default function Page2026LT7() {
  return (
    <>
      <div className="container">
        <div className="rowPage">
          <Carousel2026 />
        </div>
        <div className="col-3 ">
          <Sidebar2026 />
        </div>

        <div className="col-6">
          <h1 className="center1">

            <b> The Corvette 2026 LT7 Engine</b>
          </h1>

          <h1 className="center1">
            <Link to="../LT7"> The LT7 Engine </Link>
          </h1>



         <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/LT7">
            <img src={"/LT7"} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div>

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
            The 2026 Chevrolet Corvette 2026 is the most powerful Corvette ever
            produced. Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>
          <p>
            <b>Engine:</b> The 2026 features a 5.5L twin-turbocharged V8 engine
            with a flat-plane crankshaft, producing 1,064 horsepower and 828
            lb-ft of torque.
          </p>
          <p>
            <b>Transmission: </b>It comes with an 8-speed dual-clutch
            transmission for lightning-fast gear shifts. Equipped also with left
            paddle only hold to lowest gear from any other for instant power
            from the engine. 0-60 mph: The 2026 can accelerate from 0 to 60 mph
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
            <b>Aerodynamics:</b>The 2026 features cutting-edge aerodynamics with
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
            <Link to="/2026">2026 Corvette 2026 Sports Car <br /> </Link>is
            designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

          <Footer />
        </div>

        <div className="responsive">
          <h3>            <b> References </b>          </h3>
          <Link to="https://www.youtube.com/watch?v=9E4gxsM5UU&t=301s">            1. 2026 Corvette, 2026, LT7 Engine Walk Around            </Link>
          <Link to="https://www.youtube.com/watch?v=Rs-3YmQfos">            2. 2026 Corvette 2026 Engine, Engineering Explained          </Link>
        </div>



        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPage2026 />  <Sidebar2026B />
        </div>
      </div>
    </>
  );
}
