import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
import OnPageZ06 from "./OnPageZ06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
import NavbarInterior from "../NavbarInterior";
import CarouselIntro from "./CarouselIntro";
export default function PageZ06Driving() {
  const sections = [
    {
      title: "The Corvette Z06 Experience:",
      text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8       engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-      revving nature and high power output, making it the most powerful naturally      -aspirated production V8 engine of all time. ",
    },
    { title: " What Makes the Z06 Special? ", text: "Driving the Corvette Z06 is an entirely different beast compared to the Stingray—it's sharper, louder, and more track-focused. The Z06 is powered by the 5.5L LT6 V8, a naturally aspirated flat-plane crank engine that screams up to 8,600 RPM, delivering 670 horsepower. The acceleration is brutal, with 0-60 mph in just 2.6 seconds, making it one of the quickest cars in its class." },
    {
      title: "Flat-Plane Crankshaft:",
      text: "  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    ",
    },
    {
      title: "High Redline:",
      text: " The LT6 revs to 8,600 RPM, a testament to its high-performance design. ",
    },
    {
      title: "High Power Output:",
      text: "  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM.",
    },
    {
      title: "Oversquare Bore and Stoke:",
      text: "The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. ",
    },


    {
      title: "Handling: ",
      text: "The Z06 features wider tires, upgraded suspension, and aerodynamic enhancements, making it feel glued to the road.",

    },

    {
      title: "Braking:",
      text: "    Equipped with massive Brembo brakes, it stops on a dime, giving you confidence in high-speed corners. ",
    },


    {
      title: "  Exhaust Note    :",
      text: " The high-revving V8 produces a Ferrari-like wail, making every drive an event. ",
    },



    {
      title: "Lightweight Components:  ",
      text: "The LT6 uses lightweight forged aluminum pistons, forged titanium connecting rods, and an aluminum harmonic balancer to minimize rotational inertia.   ",
    },
    {
      title: "Dry-Sump Oil System: ",
      text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  ",
    },
    {
      title: "Dual-Overhead-Cam Cylinder Heads:",
      text: "The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      ",
    },
    {
      title: "Variable Valve Timing:",
      text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      ",
    },
    {
      title: "Hot-Side Direct Injection:  ",
      text: "The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     ",
    },
    {
      title: "Clean-Sheet Design:",
      text: "The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  ",
    },
    {
      title: "Co-Developed with Racing Engine: ",
      text: "The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  ",
    },
    {
      title: "Race-Tested, Production Approved:   ",
      text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  ",
    },
    {
      title: "Built at The Performance Build Center:  ",
      text: "The Corvette LT6 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  ",
    },

    {
      title: "Where to Experience It? ",
      text: " ",
    },

    {
      title: "1. ",
      text: "  NCM Motorsports Park offers Corvette driving experiences, including track laps in the C7 and C8 models.    ",
    },

    {
      title: "2.",
      text: "  Ron Fellows Performance Driving School provides Corvette owners with professional training to master their car’s capabilities.   ",
    },
    {
      title: "3.",
      text: " Z06 Experience allows enthusiasts to rent and drive a Z06 for a thrilling ride.   ",
    },

  ];






  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <div className="center">
            <h1>
              <b>
                Driving A 2025 Corvette Z06 
              </b>
            </h1>
            <NavbarInterior />
          </div>
          <br /><br />

          <div className="center">   

   <h4>" It's The Coolest Place To Be!, Driving In A Corvette on the Track,  with Air Conditioner On!"   
                  Tadge Juecther, Corvette Chief Engineer (Retired) </h4>

          <p> Driving A Corvette Z06 Is A Great Experience</p>

          <p> This Car Is a Track Car !</p>

          <p> The Flat-Plane Crank Engine Has 670 Horsepower !  </p>
          <p> The Engine Has A Great Sound !  </p>

      
         
          </div>


          <h3>
            The 2025 Chevrolet Corvette  Naturally Aspirated Z06 is the most powerful Vette ever
            produced. Here are some highlights:
          </h3>

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
          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
