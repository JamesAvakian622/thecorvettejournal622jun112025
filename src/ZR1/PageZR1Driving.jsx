import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "./CarouselZR1";
import OnPageZR1 from "./OnPageZR1";
import CarouselFlag from "./CarouselFlag";
import SidebarZR1 from "./SidebarZR1";
import SidebarZR1B from "./SidebarZR1B";
import NavbarInterior from "../NavbarInterior";
import CarouselIntro from "./CarouselIntro";
export default function PageZR1Driving() {
  const sections = [

    {
      title: "Driving the 2025 Corvette ZR1",
      text: "   ",
    },

    {
      title: "What Makes the ZR1 Special?",
      text: " Driving the 2025 Corvette ZR1 is an absolute adrenaline rush—its the most powerful production Corvette ever, packing 1,064 horsepower from a twin-turbo 5.5L LT7 V8. This beast rockets from 0-60 mph in just 2.3 seconds and boasts a top speed of 233 mph2.",
    },
    { title: "Insane Power: ", 
      text: "The twin-turbo setup delivers relentless acceleration, making it faster than many exotics." ,
    },
      {
      title: "Flat-Plane Crankshaft:",
      text: "The LT7 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.  ",
    },
    {
      title: "High Redline:",
      text: "The LT7 revs to 8,000 RPM, a testament to its high-performance design. ",
    },
    {
      title: "High Power Output:",
      text: "It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM.",
    },
    {
      title: "Oversquare Bore and Stoke:",
      text: "The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. ",
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
      text: "The LT7 was co-developed with the LT6.R racing engine, which powers the C8.R race car, sharing many major components.  ",
    },
    {
      title: "Race-Tested, Production Approved:   ",
      text: "The LT7's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  ",
    },
    {
      title: "Built at The Performance Build Center:  ",
      text: "The Corvette LT7 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  ",
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
      title: "Aerodynamics: ",
      text: "    he ZR1 features aggressive aero enhancements, including a massive rear wing for high-speed stability.     ",
    },

    {
      title: "Co-Developed with Racing Engine: ",
      text: "The LT7 was co-developed with the LT6.R racing engine, which powers the C8.R race car, sharing many major components.  ",
    },
    {
      title: "Race-Tested, Production Approved:   ",
      text: "The LT7's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  ",
    },
    {
      title: "Built at The Performance Build Center:  ",
      text: "The Corvette LT7 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  ",
    },


 
    {
      title: "  Track Dominance:    ",
      text: "   It was tested at Circuit of the Americas, where it showcased incredible grip and handling.",
    },

    {
      title: "    ",
      text: "   Watch a first drive to see how it performs on the road.    ",
    },


    {
      title: "      Where to Experience It?   ",
      text: " National Corvette Museum Motorsports Track allowing per driver fees testing of Z06 and E-Ray test cars  ",
    },

    {
      title: "       ",
      text: "     See it in action at Circuit  Of The Americas, COTA, where it was pushed to its limits.            ",
    },

    {
      title: "       ",
      text: "     Read a full review detailing its performance and driving dynamics.          ",
    },

  ];


  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />


        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
           <NavbarInterior />
             <br />
          <div className="center">
            <h1>
              <b>
                2025 Corvette ZR1 Driving
              </b>
            </h1>
           
          </div>
          <br />
          <div className="center">  
              <h2>"Drive on the Track, Air Cond On, It's The Coolest Place To Be!, </h2> 
               <h2>   Tadge Juecther, Corvette Chief Engineer" </h2> 
         
         
          <p> This Car Is a Track Car, the engine a Flat-Plane Crank with 1064  Horsepower !  

         Its a Great Sound And It Is A Beast !  </p>


         <p>The First Impressions of the Circuit Of The Americas, COTA</p>

         <p>They go 80 around the corners and an easy 170 on the straights !!!</p>

         
</div>
   <p> "On Circuit Of The Americas, the car was very easy to driv even when 
    pushing the car beyond my limits!", Engineering Explained </p>
        


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
            The base model starts at around $175,900. The
            <Link to="/Z06">2025 Corvette ZR1 </Link> is designed to deliver
            an exhilarating driving experience with cutting-edge technology
            and stunning design.
          </p>

          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>




          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.youtube.com/watch?v=gMc8kRYDUog&t=6s ">
              1. Top Gear, "FIRST DRIVE: 1064hp Corvette ZR1 – America’s New 233mph King!".
            
            </Link>
            <Link to="https://www.youtube.com/watch?v=BKmYRlVNML4&t=1s">
              2. Cleetus McFarland, "First Drive in the NEW Corvette ZR1 - 1,064 Horsepower"".
           
            </Link>
            <Link to="  https://www.youtube.com/watch?v=eo82OSOdDYg ">
              3. Motor Trend Channel, "Corvette ZR1 ZTK Track Performance Package Costs".
            </Link>
            <Link to="https://www.youtube.com/watch?v=cd3JSeumn14">
              4. Jay Leno's Garage, "First Drive of the 2025 Corvette ZR1 with GM President Mark Reuss! | Jay Leno's Garage".

            </Link>
          </div>

          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />
          <SidebarZR1B />
        </div>
     </div>
    </>
  );
}
