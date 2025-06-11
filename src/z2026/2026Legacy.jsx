import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carouselz2026 from "./Carouselz2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebarz2026 from "./Sidebarz2026";
import Sidebarz2026B from "./Sidebarz2026B";
import Navbar4 from "../Navbar4";
export default function z2026Legacy() {
  const sections = [
    { title: "1. Coupe:", text: "Removable top, store in trunk." },
    { title: "2. Convertible", text: "One button open and close." },
    {
      title: "3Flat-Plane Crankshaft:",
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

  return (
    <>
      <div className="rowPage">
        <Carouselz2026 />
        <div className="col-3 ">
          <Sidebarz2026 />
        </div>

        <div className="col-6">
          <h1>
            <Link to="/Stingray">Corvette z2026 Legacy</Link>
          </h1>
          <Navbar4 />
          <br />
          <h1> Coupe / Convertible </h1>

          <dir className="image-row">
            <div className="responsive">
              <div className="gallery1001">
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
            The
            <Link to="/Stingray">2026 Corvette Stingray</Link>
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
            <Footer />
          </div>
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPage2026 />
          <Sidebarz2026 />
        </div>
      </div>
    </>
  );
}
