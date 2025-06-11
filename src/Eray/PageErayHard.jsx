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
import ReactPlayer from "react-player";
export default function PageErayHard() {
  
  // const sections = [
  //   { title: "LT6 Engine Deep Dive:", text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. " },
  //   { title: "Title Two", text: "This is the paragraph for Title Two." },
  //   { title: "Flat-Plane Crankshaft:", text: "  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    " },
  //   { title: "High Redline:", text: " The LT6 revs to 8,600 RPM, a testament to its high-performance design. " },
  //   { title: "High Power Output:", text: "  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM." },
  //   { title: "Oversquare Bore and Stoke:", text: "The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. " },
  //   { title: "Lightweight Components:  ", text: "The LT6 uses lightweight forged aluminum pistons, forged titanium connecting rods, and an aluminum harmonic balancer to minimize rotational inertia.   " },
  //   { title: "Dry-Sump Oil System: ", text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  " },
  //   { title: "Dual-Overhead-Cam Cylinder Heads:", text: "The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      " },
  //   { title: "Variable Valve Timing:", text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      " },
  //   { title: "Hot-Side Direct Injection:  ", text: "The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     " },
  //   { title: "Clean-Sheet Design:", text: "The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  " },
  //   { title: "Co-Developed with Racing Engine: ", text: "The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  " },
  //   { title: "Race-Tested, Production Approved:   ", text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  " },
  //   { title: "Built at The Performance Build Center:  ", text: "The Corvette LT6 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  " },
  // ];


  return (
    <>
    <div className="rowPage">
    <CarouselEray />
    <div className="col-3 ">
      <SidebarEray />
    </div>

    <div className="col-6">
      <h1>
        <b>
         2025 Corvette E-Ray Hard Top 
        </b>
      </h1>
 
        <p>
          The
          <Link to="/ZR1">2025 Corvette E-Ray Sports Car <br/> </Link>
          offers a variety of options to customize your ride to your liking.
          Here are some of the key options available:
        </p>

       
       


        <p>
  <b> WHY C8 Corvette HTC sounds BETTER! Watch B4 you BUY!</b>
  <div style={{position: 'relative', paddingTop: '56.25%'}}>
    <ReactPlayer
      url=" https://www.youtube.com/watch?v=6TS8oH1gmGk"
      width="100%"
      height="100%"
      style={{position: 'absolute', top: 0, left: 0}}
    />
  </div>
</p>
<p>
  <b> 2025 Corvette Review | Coupe vs. Convertible | Letsvette</b>
  <div style={{position: 'relative', paddingTop: '56.25%'}}>
    <ReactPlayer
      url=" https://www.youtube.com/watch?v=oETiNpppnp0"
      width="100%"
      height="100%"
      style={{position: 'absolute', top: 0, left: 0}}
    />
  </div>
</p>;

<p>
  <b> First Drive of 2020 Corvette Stingray Convertible Z51 - Jay Leno’s Garage</b>

  <div style={{position: 'relative', paddingTop: '56.25%'}}>
    <ReactPlayer
      url=" https://www.youtube.com/watch?v=nvTzcNtaSLU"
      width="100%"
      height="100%"
      style={{position: 'absolute', top: 0, left: 0}}
    />
  </div>
</p>


<p>
  <b>2023 C8 HTC 70th Anniversary Special Edition Cost? Was it worth it?</b>

  <div style={{position: 'relative', paddingTop: '56.25%'}}>
    <ReactPlayer
      url=" https://www.youtube.com/watch?v=5Ljp8uLCslg"
      width="100%"
      height="100%"
      style={{position: 'absolute', top: 0, left: 0}}
    />
  </div>
</p>






{/* 
        <div className="content-container">
          {sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2 className="content-title">{section.title}</h2>
              <p className="content-text">{section.text}</p>
            </div>
          ))}
        </div> */}

          <p>
              <b>  WHY C8 Corvette HTC sounds BETTER! Watch B4 you BUY!</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url=" https://www.youtube.com/watch?v=6TS8oH1gmGk"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>


        <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
          <Footer />
        </div>
  </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
           <OnPageEray />   <SidebarErayB />
        </div>
 </div>
    </>
  );
}
