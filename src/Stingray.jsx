import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselSting from "./Stingray/CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./Stingray/OnPageSting";
import CarouselFlag from "./Stingray/CarouselFlag";
import SidebarSting from "./Stingray/SidebarSting1";
import SidebarStingB from "./Stingray/SidebarStingB";
import Navbar2 from "./Navbar2";
import Navbar5 from "./Navbar5";
import Navbar4 from "./Navbar4";
import CarouselIntro from "./Stingray/CarouseIntro";

export default function Stingray() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>

        <div className="col-6">
          <h2>
            <b>
              <i>Presenting ...</i>
            </b>
          </h2>
          <h1>
            <b> The 2025 Corvette Stingray </b>
          </h1>
          <br />

          <div className="center">
            
            <a target="_blank" rel="noopener noreferrer" href="/stinglogo.png">
              <img src="/stinglogo.png" alt="Cinque Terre" width={800} height={600} />
            </a>
            <div className="desc"> 2025 Corvette Stingray Logo</div>

            <h1>The Corvette Stingray has 500 Horsepower!</h1>

            <p> The First Mid-Engine LT2 Corvette ever! Introduced April 2020, Visit Our Website Pages For The Complete Corvette Lineup !</p>

            <div className="center">
              <Link to="/Stingray ">Stingray</Link>
              <Link to="/Z06 ">Z06</Link>
              <Link to="/Eray">E-Ray</Link>
              <Link to="/ZR1 ">ZR1</Link>
           </div>

          </div>

          <div className="center">
            <a target="_blank" rel="noopener noreferrer" href="/Stingray">
              <img
                src="/Stingray.png"
                alt="Cinque Terre"
                width={800}
                height={600}
              />
            </a>
            <div className="desc"> 2025 Corvette Stingray</div>
          </div>


          <div className="right">
            <p>Source: Chevrolet.Com</p>
          </div>
          <CarouselIntro />
          <CarouselSting />

          <div className="right">
            <p>Source: Chevrolet.com</p>
          </div>

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
            <Link to="/ZR1">
              2025 Corvette ZR1 Sports Car <br />
            </Link>
            is designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

          <div className="references">
            <h1>References</h1>
            <Link to=" https://www.chevrolet.com/shopping/configurator/performance/2025/corvette/corvette/config?buildCode=&radius=2000&zipCode=91303">  1. Chevrolet.com, "Chevrolet, The Stingray". </Link>

            <Link to=" https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C8)">  Wikipedia, "Corvette Stingray".   </Link>

          </div>
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageSting /> <SidebarStingB />
        </div>
      </div>
    </>
  );
}
