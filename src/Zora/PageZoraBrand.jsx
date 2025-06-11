import React from "react";
import '../styles/Page.css';
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZora from "./CarouselZora";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZora from "./OnPageZora";
import CarouselFlag from "./CarouselFlag";
import SidebarZora from "./SidebarZora";
export default function PageZoraBrand() {
  return (
    <>
      
        <div className="rowPage">
                    <CarouselZora />
        <div className="col-3 ">
          <SidebarZora />
        </div>

        <div className="col-6">
          
      
          <div className="black">
            <h1>
              <b> The 2025 Corvette Zora </b>
            </h1>
            <ul style={{ listStyleType:"none" }}>
            <p>
                The 2025 Chevrolet Corvette Stingray is an exciting update to
                the iconic sports car lineup. Here are some key features and
                highlights:
            </p>
              <h2 className="space" id="perf">
                <b> Performance </b>
              </h2>
            <p>
                <b>The 2025 Chevrolet Corvette Stingray </b> is an exciting
                update to the iconic sports car lineup. Here are some key
                features and highlights:
            </p>
            <p>
                <b> Engine: </b>
                The 2025 Stingray features a naturally aspirated 6.2L V8 engine
                with 495 horsepower and 470 lb-ft of torque.
            </p>
            <p>
                <b>Transmission: </b>
                It comes with an 8-speed dual-clutch eight speedtransmission, providing
                smooth and quick gear shifts. Equipped also with left paddle only hold
              to lowest gear from any other for instant power from the engine. 0-60 mph: The Stingray can
                accelerate from 0 to 60 mph in just 2.9 seconds.
            </p>
            <p>
                <b> Acceleration: </b>
                It can accelerate from 0 to 60 mph in just 2.9 seconds, thanks
                to its powerful engine and advanced aerodynamics.
            </p>
              <b> </b>
            <p>Top Speed: It has a top track speed of 194 mph.</p>
            <p>
                <b>Suspension: </b>
                The Magnetic Ride Control 4.0 provides precise handling and
                control, adapting to road conditions in real-time.
            </p>
              <h2 id="design">
                <b> Design </b>
              </h2>
            <p>
                <b>Exterior:</b>
                The Stingray boasts a sleek, aggressive design with sharp lines
                and an aerodynamic body. It features a front splitter, rear
                spoiler, and side air intakes to enhance performance and
                cooling.
            </p>
            <p>
                <b> Convertible Option:</b>
                The retractable hardtop convertible version provides the thrill
                of open-air driving without compromising on performance.
            </p>
            <p>
                <b> Customization:</b>
                Multiple options for wheels, colors, and trims allow for a
                personalized look. Available carbon-fiber accents enhance the
                sporty appearance.
            </p>
              <h2>
                <b> Interior </b>
              </h2>
            <p>
                <b> Cockpit: </b>
                The driver-centric cockpit features a high-resolution digital
                inStument display, a heads-up display, and ergonomic controls.
              <p></p> <b> Materials:</b>
                Premium materials such as leather, microfiber, and real aluminum
                create a luxurious feel.
              <p></p> <b> Seats:</b>
                The GT2 bucket seats provide excellent support and comfort, even
                during high-speed maneuvers.
              <p></p> <b> Infotainment:</b>
                The advanced Chevrolet Infotainment 3 Plus system includes an
                8-inch touchscreen, navigation, Apple CarPlay, and Android Auto
                compatibility.
              <p></p> <b> Audio:</b>A 14-speaker Bose Performance Series
                sound system ensures crystal-clear audio quality.
            </p>
              <h2>
                <b> Safety and Technology </b>
              </h2>
            <p>
                <b>Driver Assistance: </b>
                Advanced safety features such as forward collision alert, rear
                park assist, and a rearview camera enhance safety.
            </p>
              <p id="pdf">
                <b> Performance Data Recorder: </b>
                This system allows drivers to record their driving performance
                and analyze it later, making it a great tool for track
                enthusiasts.
            </p>
              <p id="wifi">
                <b> Wi-Fi Hotspot: </b>
                Stay connected with a built-in 4G LTE Wi-Fi hotspot, providing
                connectivity on the go.
            </p>
              <p id="mag">
                <b>Magnetic Selective Ride Control: </b>
                This advanced suspension system adjusts damping to provide a
                smooth ride on various road conditions. Advanced Infotainment:
                The Stingray includes a state-of-the-art infotainment system
                with navigation, Bluetooth connectivity, and more.
            </p>
              <h2 id="price">
                <b> Pricing Starting MSRP: </b>
              </h2>
            <p>
                The base model starts at around $68,300 for the coupe and
                $75,300 for the convertible. The  <Link to="/Stingray">2025 Corvette Stingray </Link> offers a
                perfect blend of performance, luxury, and style, making it a
                dream car for many enthusiasts.
            </p>
              <p id="z51">
                <b> Z51 Performance Package: </b>
                This package includes performance brakes, suspension, exhaust,
                and an electronic limited-slip differential.
            </p>
              <p id="#fiber">
                <b>Carbon Fiber Package: </b>
                Adds lightweight carbon-fiber accents to the exterior and
                interior for a more aggressive look and improved performance.
            </p>
              <h2 id="#conc">
                <b> Conclusion</b>
              </h2>
            <p>
                The  <Link to="/Stingray">2025 Corvette Stingray </Link> combines cutting-edge technology,
                stunning design, and exhilarating performance, making it a
                standout choice for sports car enthusiasts. Whether you're
                looking for a thrilling driving experience or a stylish
                statement, the Stingray has something to offer.
            </p>
          
          </div>
        </div>

        <div className="col-3 ">
     
          <CarouselFlag />
           {/* <ThemeSwitcher /> */}
          <OnPageZora />
        </div>

      </div>
      
    </>
  );
}
