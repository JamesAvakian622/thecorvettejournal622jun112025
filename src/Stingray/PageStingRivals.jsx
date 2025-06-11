import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";

import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarErayB from "./SidebarStingB";
export default function PageStingRivals() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>
        <div className="col-6">
          <h1>
            <b>
              The 2025 Corvette Stingray Rivals
            </b>
          </h1>

          <p>
            The 2025 Chevrolet Corvette Stingray is the most powerful Corvette
            ever produced. Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>


{/* 
          2020 C8 Corvette Z51 vs Mustang Shelby GT500 // DRAG RACE, ROLL RACE & LAP TIMES

          https://www.youtube.com/watch?v=-gZLTLmZBGM */}
          <p>
            The Corvette Stingray holds its own against some of the world's best sports cars, offering supercar-level performance at a fraction of the price. Here's how it stacks up:
            <h2>  Performance
            </h2>
            <b> 
            0-60 mph:    </b>   2.8 seconds (Z51 package) – on par with the Porsche 911 Carrera GTS and McLaren GT.
          <b>
            Quarter-mile:  </b>     11.2 seconds – slightly behind the McLaren GT (10.7 sec) but ahead of the Porsche 718 Cayman GTS 4.0 (12.0 sec).
          <b>
            Skidpad grip:   </b>      1.03g – comparable to the Porsche 911 GTS (1.06g).

          <h2>
            Price vs. Competitors</h2>
          <b>
            Corvette Stingray Z51:  </b>      $65,895
          <b>
            Porsche 911 Carrera GTS:  </b>        $144,050
          <b>
            McLaren GT:  </b>       $208,490
          <b>
            Porsche 718 Cayman GTS 4.0:   </b>      $96,850
          <b>
            Driving Experience    </b>

          The Stingray’s mid-engine layout gives it exceptional balance, making it feel planted in corners. While Porsche models offer more refinement, the Corvette delivers raw power and excitement at a much lower cost. Compared to the Toyota Supra and Ford Mustang, the Stingray has more power and sharper handling, but those cars offer a different driving feel.
        </p>
  <h2>
Driving Experience  </h2>
The Stingray’s mid-engine layout gives it exceptional balance, making it feel planted in corners. While Porsche models offer more refinement, the Corvette delivers raw power and excitement at a much lower cost. Compared to the Toyota Supra and Ford Mustang, the Stingray has more power and sharper handling, but those cars offer a different driving feel.
        <h3>
          <b> Design </b>
        </h3>
        <p>
          Aerodynamics: The Stingray features cutting-edge aerodynamics with
          wide side air inlets, carbon-fiber elements, and a multitude of
          airflow and cooling features. <b>Exterior:</b>The design includes
          a sleek and aggressive look with quad center exhaust and available
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
          <Link to="/Stingray">2025 Corvette Stingray </Link>
          is designed to deliver an exhilarating driving experience with
          cutting-edge technology and stunning design.
        </p>

        <Footer />
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/* {* <ThemeSwitcher /> *} */}
        <OnPageSting />
        <SidebarSting />
      </div>
    </div >
    </>
  );
}
