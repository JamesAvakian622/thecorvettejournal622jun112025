import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselEray from "./CarouselEray";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageEray from "./OnPageEray";
import CarouselFlag from "./CarouselFlag";
import SidebarEray from "./SidebarEray";
import SidebarErayB from "./SidebarErayB";
import ButtonGridWheels from "../components/buttons/ButtonGridWheels";
import ButtonGridExt from "../components/buttons/ButtonGridExt";
import ButtonRacingStipes from "../components/buttons/ButtonRacingStipes";
export default function PageErayExt() {
  const sections = [
    {
      title: "LT6 Engine Deep Dive:",
      text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. ",
    },
    { title: "Title Two", text: "This is the paragraph for Title Two." },
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

  return (
    <>
      <div className="rowPage">
        <CarouselEray />
        <div className="col-3 ">
          <SidebarEray />
        </div>

        <div className="col-6">
          <div className="center">
            {/* <ButtonGridExt />
            <ButtonRacingStipes />
            <ButtonGridWheels /> */}

            <h1>
              <b> The 2025 Corvette Eray Wing, Suspension, Options</b>
            </h1>
            <p>This is for Chevrolet OEM Options</p>
            <h3>
              <b> The Wing Option, Only One </b>
            </h3>

            <p> make a table to compare all three on same page.</p>
            <p> high wiung and suspension</p>
            <Stingray>
              four suspension options, Stingray base, FE1, base level
              suspension, four independant shocks - Soft ride. Stingray base,
              FE2 magnetic ride suspension - Soft ride. Z51, FE3 magnetic ride
              suspension Z51, FE4 magnetic ride suspension, m ost performance.
              Brakes, Standard, 4 Four piston front, 2 piston rear, standard
              size rotor and calipur. low dust. Brrembo, Z51, Z51 logo, larger
              size rotor and calipur. cake dust.
            </Stingray>

            <Z06>
              Standard Z06, FE6, Magnetic Ride Suspension. FE7, tighter for
              track Brembo, Steel rotor, 6 piston front, 4 piston rear, color
              options, high dust. Brembo Carbon Ceramic, larger rotor, low dust
              output. the brake pads last more than 100k miles as long you are
              not tracking the car. z06 asnd eray interior same.
            </Z06>

            <Eray>
              Standard Eray, All Season Tires and FE5 Magnetic Ride Suspension.
              ZER Package, Michelin 4S, All Weather Tires, Summer tires? FED
              Magnetic Ride Suspension which is tigther for tracking and the
              sport ride for the car. Brembo Carbon Ceramic, larger rotor, low
              dust output. the brake pads last more than 100k miles as long you
              are not tracking the car. rivals, porsehe 918, Acura NSX,
            </Eray>

            <div className="responsive">
              <div className="gallery100">
                <a target="_blank" rel="noopener noreferrer" href={Sting21}>
                  <img
                    src="/1Eray.png"
                    alt="Cinque Terre"
                    width={600}
                    height={400}
                  />
                </a>
                <div className="desc">Eray Wing Spoiler</div>
              </div>
            </div>
            <p>show 2LZ interior door</p>

            <div className="content-container">
              {sections.map((section, index) => (
                <div key="2LZa.png" className="content-section">
                  <h2 className="content-title">{section.title}</h2>
                  <p className="content-text">{section.text}</p>
                </div>
              ))}
            </div>

            <p>
              3LZ interior door, Napa Leather with stiching, Stealth speakers,
              and carbon fibre steering wheel and shifters
            </p>
            <p> brink 17:47</p>
            <p> https://www.youtube.com/watch?v=TD47dVq_9sM&t=1025s </p>
            <div className="content-container">
              {sections.map((section, index) => (
                <div key="3LZ0.png" className="content-section">
                  <h2 className="content-title">{section.title}</h2>
                  <p className="content-text">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="content-container">
              {sections.map((section, index) => (
                <div key="3LZa.png" className="content-section">
                  <h2 className="content-title">{section.title}</h2>
                  <p className="content-text">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="content-container">
              {sections.map((section, index) => (
                <div key="3LZb.png" className="content-section">
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
            <OnPageEray /> <SidebarErayB />
          </div>
        </div>
      </div>
    </>
  );
}
