import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselEray from "./CarouselEray";
import OnPageEray from "./OnPageEray";
import CarouselFlag from "./CarouselFlag";
import SidebarEray from "./SidebarEray";
import SidebarErayB from "./SidebarErayB";
import NavbarInterior from "../NavbarInterior";
import CarouselIntro from "./CarouselIntro";
export default function PageErayDriving() {
  const sections = [
    {
      title: "The Corvette E-Ray Experience",
      text: "Driving the Corvette E-Ray is a thrilling blend of V8 muscle and electric precision, making it the fastest Corvette ever. With a 6.2L LT2 V8 paired with an electric motor, it delivers 655 horsepower and all-wheel drive, launching from 0-60 mph in just 2.5 seconds.    ",
    },
    {
      title: "What Makes the E-Ray Unique?",
      text: "          "
    },
    {
      title: "   Instant Torque:    ",
      text: "The electric motor provides immediate acceleration, making launches feel effortless.   ",
    },
    {
      title: "    All-Weather Capability:   ",
      text: " Unlike other Corvettes, the E-Ray’s AWD system enhances grip in rain and even light snow.",
    },
    {
      title: "High Power Output:",
      text: "  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM.",
    },



    {
      title: "  Balanced Handling:    ",
      text: " Wider fenders and Magnetic Ride Control 4.0 ensure a smooth yet aggressive driving experience.     ",
    },


    {
      title: "Where to Experience It?",
      text: "NCM Motorsports Park offers E-Ray touring laps, where you can drive it on a professional track.   ",
    },

    {
      title: "Winter Driving?   ",
      text: "Some owners have tested the E-Ray in cold conditions, with mixed results depending on tire choice. ",
    },

  ];



  return (
    <>
      <div className="rowPage">
        <CarouselEray />
        <div className="col-3 ">
          <SidebarEray />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
                2025 Corvette Z06 Interior
              </b>
            </h1>
            <NavbarInterior />
          </div>
          <p> Driving A Corvette E-Ray Is A Great Experience</p>

          <p> It Has Stingray 500 Horsepower Plus 160 Horsepower Motor!  </p>


          <p>  The First Corvette To Have All Wheel Drive  </p>
          <div className="center">
            <h1>"Be In A Corvette, The Coolest Place To Be!, Tadge Juecther, Corvette Chief Engineer" </h1>
          </div>


          <p>
            The 2025 Chevrolet Corvette Z06 is the most powerful Corvette ever
            produced. Here are some highlights:
          </p>

          <h3>
            <b> Design </b>
          </h3>

          <p>
            <b>Interior:</b> The cockpit is driver-centric
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
            <Link to="https://www.corvetteblogger.com/2020/06/23/the-c8-corvette-is-loaded-with-21st-century-composite-materials/  ">
              1. C8 Corvette is Loaded with 21st Century Composite Materials,
              Corvette Blogger.
            </Link>
            <Link to="https://www.motortrend.com/how-to/vemp-1108-corvette-body-materials/">
              2. Corvette Body Materials - From Fiberglass To Carbon Fiber,
              Motor Trend.
            </Link>
            <Link to="https://gmauthority.com/blog/2025/01/heres-how-much-the-2025-corvette-zr1-ztk-track-performance-package-costs/">
              3. Corvette ZR1 ZTK Track Performance Package Costs
            </Link>
            <Link to="https://gmauthority.com/blog/2024/09/c8-corvette-zr1-brings-back-the-ztk-performance-package/">
              4. C8 Corvette ZR! ZTK Package Comes Back, GM Authority.
            </Link>
          </div>

          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageEray />
          <SidebarErayB />
        </div>
      </div>
    </>
  );
}
