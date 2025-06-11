import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import NavbarInterior from "../NavbarInterior";
//import CarouselIntro from "./CarouselIntro";
export default function PageStingDriving() {
  const sections = [
    {
      title: "The Stingray Expeerinece:",
      text: "Driving a Corvette Stingray is an exhilarating experience that blends raw power with precision handling. The Stingray's mid-engine layout provides exceptional balance, making cornering feel sharp and controlled. The acceleration is breathtaking—thanks to its 6.2L LT2 V8 engine, it delivers 495 horsepower and can launch from 0-60 mph in just 2.9 seconds.",
    },
    {
      title: "", text: "On the road, the Stingray feels planted, with Magnetic Ride Control smoothing out imperfections while keeping the car responsive. The dual-clutch transmission shifts seamlessly, giving you the thrill of a manual with the ease of an automatic. Whether you're cruising down the highway or pushing it on a track, the Stingray offers a visceral driving experience that keeps you engaged at every turn.",
    },
    {
      title: "", text: " If you're looking for a hands-on experience, places like the NCM Motorsports Park offer Corvette touring laps, where you can drive both the C7 and C8 Stingray on a professional track. There’s also the Ron Fellows Performance Driving School, which teaches Corvette owners how to master their car’s capabilities.",
    },
  ];




  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
                2025 Corvette Stingray Driving
              </b>
            </h1>
            <NavbarInterior />
          </div>

          <p> Driving A Stingray Is A Great Experience</p>

          <p> The Stingray Has 500 Horsepower !  </p>

          <div className="center">
            <h1>"Be In A Corvette, The Coolest Place To Be!, Tadge Juecther, Corvette Chief Engineer" </h1>
          </div>


<div className="center">
  <h1>
    "Bet On A Corvette, It's A Winner !, Famous Nascar Driver "

  </h1>
</div>;



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
          <OnPageSting />
          <SidebarStingB />
        </div>
      </div>
    </>
  );
}
