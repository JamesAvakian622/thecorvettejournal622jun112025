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


 export default function PageZ06Manu() {



  //   How The Corvette C8 Z06 Is Made
//  https://www.youtube.com/watch?v=Z2ag9b8BWzI&t=1s

  const sections = [
    { title: "1. Coupe:", text: "Removable top, store in trunk." },
    { title: "2. Convertible", text: "One button open and close." },
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
  ];


// Removable Top or convertible, Which One to Choose?

// If you prioritize open-air driving and a seamless retractable roof, the convertible is a great choice. If you prefer lighter weight, visible engine aesthetics, and a removable roof panel, the coupe might be the better fit.
//   The 2025 Corvette C8 offers both coupe (hardtop) and convertible options, each with distinct features:
  
//   Key Differences

//   Roof Design: The coupe has a removable roof panel, while the convertible features a power-retractable hardtop that seamlessly integrates into the body.
//   Engine Visibility: The coupe allows for a visible engine cover, whereas the convertible does not.
//   Weight & Performance: The convertible is slightly heavier due to the retractable mechanism, but both models maintain similar performance metrics.
//   Aesthetic Appeal: Some enthusiasts prefer the sleek lines of the convertible, while others favor the classic coupe silhouette.


//   ////

//   The 2025 Corvette Convertible features a power-retractable hardtop designed for seamless operation and reliability. Here are the key details:
// Operation:
// Retracts in 16 seconds at speeds up to 30 mph.
// Available in body-color or Carbon Flash-painted options.
// Engineered to minimize wind noise and turbulence.
// Specifications:
// Material: Lightweight composite panels for durability.
// Mechanism: Electric motors ensure smooth deployment.
// Storage: Folds neatly into the rear compartment without sacrificing cargo space.
// Reliability:
// Tested for high-speed stability and weather resistance.
// Reinforced seals prevent leaks and wind intrusion.
// Designed for long-term durability with minimal maintenance.


// https://www.youtube.com/watch?v=oETiNpppnp0
// 2025 Corvette Review | Coupe vs. Convertible | Letsvette




// https://www.youtube.com/watch?v=nvTzcNtaSLU
// First Drive of 2020 Corvette Stingray Convertible Z51 - Jay Leno’s Garage

// https://www.youtube.com/watch?v=5Ljp8uLCslg

  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>
           <b>  Corvette Z06 Vehicle Assembly </b>
          </h1>
          <br />
          <h1>   </h1>

          <dir className="image-row">
            <div className="responsive">
              <div className="gallery">
                <div className="center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/StingTopDown1.png"
                  >
                    <img
                      src="/StingTopDown1.png"
                      alt="Cinque Terre"
                      width={300}
                      height={200}
                    />
                  </a>
                </div>
                <div className="desc1">Stingray Coupe</div>
              </div>
            </div>
            <div className="responsive">
              <div className="gallery1001">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/StingConv3.png"
                >
                  <img
                    src="/StingConv3.png"
                    alt="Cinque Terre"
                    width={300}
                    height={200}
                  />
                </a>
                <div className="desc1">Stingray Hardtop Convertible (HTC)</div>
              </div>
            </div>
          </dir>
<p>
  Corvettes are assembled at the General Motos, Chevrolet, Bowling Green Assembly Plant in Bowling Green, Kentucky. This facility has been the exclusive home of Corvette production since 1981 and has manufactured over 1.1 million Corvettes.
  Before Bowling Green, Corvettes were built at:
  <br />
  Flint, Michigan (1953) – The first 300 Corvettes were hand-assembled here.
  St. Louis, Missouri (1954–1981) – Corvette production expanded significantly at this facility.
  <br />
  Bowling Green continues to evolve, incorporating advanced manufacturing techniques and cutting-edge technology to produce high-performance Corvettes.

</p>;

          <p>
            The
            <Link to="/Stingray">2025 Corvette Stingray</Link>
            offers a variety of options to customize your ride to your liking.
            Here are some of the key options available:
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
            <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
              Reference: 1. Hagerty, The LT6 A Landmark Achievement
            </Link>
            <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
              2. Vette Vues Magazine
            </Link>
               <Link to="  https://gmauthority.com/blog/2025/04/31-workers-laid-off-indefinitely-at-corvette-bowling-green-assembly-plant/">
                       3. GM Authority, "31 Workers Laid Off Indefinitely At Corvette Bowling Green Assembly Plant".
                       </Link>
            <Footer />
          </div>
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
