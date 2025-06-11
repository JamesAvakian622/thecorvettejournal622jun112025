import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import ReactPlayer from "react-player";
export default function PageStingManu() {

//  How The Corvette C8 Z06 Is Made
//  https://www.youtube.com/watch?v=Z2ag9b8BWzI

//https://www.youtube.com/watch?v=9ccOrwFs3No
//Chevrolet Corvette Stingray Assembly Plant


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





//   Watch the First 1,064 hp Corvette ZR1s Being Built in Bowling Green
//   https://www.youtube.com/watch?v=evVMVEVO9oI




//   2025 Corvette C8 ZR1 | How to Engineer a 1064HP Supercar
//   https://www.youtube.com/watch?v=9oJZ2ApCfTI



// https://www.youtube.com/watch?v=5Ljp8uLCslg

  return (
    <>
      <div className="rowPage">
        <CarouselSting />
   
          <h1>
           <b>  Corvette Stingray  Hard Top  </b>
          </h1>
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
  Corvettes are assembled at the General Motos, Chevrolet, Bowling Green Assembly Plant in Bowling Green, Kentucky. This facility has been the exclusive home of Corvette production since 1981 and has manufactured over 1.1 million Corvettes.
  Before Bowling Green, Corvettes were built at:
  <br /><p>   
  Flint, Michigan (1953) – The first 300 Corvettes were hand-assembled here. </p>  <p>   
  St. Louis, Missouri (1954–1981) – Corvette production expanded significantly at this facility.</p>
  <br />
  Bowling Green continues to evolve, incorporating advanced manufacturing techniques and cutting-edge technology to produce high-performance Corvettes.

</p>

          <p>
            The
            <Link to="/Stingray">2025 Corvette Stingray</Link>
            offers a variety of options to customize your ride to your liking.
            Here are some of the key options available.
          </p>

          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>

   <h2>
        <b> Stingray Assembly Line</b>
      </h2>
      <p>
        <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>


          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
              Reference: 1. Hagerty, The LT6 A Landmark Achievement
            </Link>
              <Link to="  https://gmauthority.com/blog/2025/04/31-workers-laid-off-indefinitely-at-corvette-bowling-green-assembly-plant/">
   2. GM Authority, "31 Workers Laid Off Indefinitely At Corvette Bowling Green Assembly Plant".
   </Link>

              
            <Footer />
          </div>
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageSting />
          <SidebarStingB />
        </div>
  
    </>
  );
}
