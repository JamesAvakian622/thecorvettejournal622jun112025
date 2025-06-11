import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./OnPageZ06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
//import NavZ06 from "./NavZ06";
export default function PageZ06Brand() {
  const sections = [
    { title: "LT6 Engine Deep Dive:", text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. " },
    { title: "Title Two", text: "This is the paragraph for Title Two." },
    { title: "Flat-Plane Crankshaft:", text: "  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    " },
    { title: "High Redline:", text: " The LT6 revs to 8,600 RPM, a testament to its high-performance design. " },
    { title: "High Power Output:", text: "  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM." },
    { title: "Oversquare Bore and Stoke:", text: "The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. " },
    { title: "Lightweight Components:  ", text: "The LT6 uses lightweight forged aluminum pistons, forged titanium connecting rods, and an aluminum harmonic balancer to minimize rotational inertia.   " },
    { title: "Dry-Sump Oil System: ", text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  " },
    { title: "Dual-Overhead-Cam Cylinder Heads:", text: "The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      " },
    { title: "Variable Valve Timing:", text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      " },
    { title: "Hot-Side Direct Injection:  ", text: "The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     " },
    { title: "Clean-Sheet Design:", text: "The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  " },
    { title: "Co-Developed with Racing Engine: ", text: "The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  " },
    { title: "Race-Tested, Production Approved:   ", text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  " },
    { title: "Built at The Performance Build Center:  ", text: "The Corvette LT6 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  " },
  ];
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>
            <b>
              The 2025 Corvette Z06 Brand
            </b>
          </h1>
        {/* <NavZ06 /> */}
          <p>
              The 2025 Chevrolet Corvette Z06 is the most powerful Corvette ever
              produced. Here are some highlights:
          </p>
            <h3>
              <b> Performance </b>
            </h3>
          <p>
              Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
              flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
              torque. Transmission: It comes with an 8-speed dual-clutch
              transmission for lightning-fast gear shifts. Equipped also with
              left paddle only hold to lowest gear from any other for instant
              power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
              60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
              233 mph, making it one of the fastest production cars ever.
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
            <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, "The Z06 LT6, A Landmark Achievement"  </Link>

            <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
            <Footer />
          </div>
</div>

        <div className="col-3 ">
          <CarouselFlag />
          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
