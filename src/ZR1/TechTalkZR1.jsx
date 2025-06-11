import React from 'react';
import '../styles/Page.css';
import '../styles/globals.css';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import CarouselZR1 from './ZR1/CarouselZR1';
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from './ZR1/OnPageZR1';
import CarouselFlag from './ZR1/CarouselFlag';
import SidebarZR1 from './ZR1/SidebarZR1';
import SidebarZR1 from './ZR1/SidebarZR1';

export default function TechTalkZR1 () {
  const sections = [
    {
      title: 'LT6 Engine Deep Dive:',
      text: ' The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette ZR1, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. ',
    },
    {title: 'Title Two', text: 'This is the paragraph for Title Two.'},
    {
      title: 'Flat-Plane Crankshaft:',
      text: '  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    ',
    },
    {
      title: 'High Redline:',
      text: ' The LT6 revs to 8,600 RPM, a testament to its high-performance design. ',
    },
    {
      title: 'High Power Output:',
      text: '  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM.',
    },
    {
      title: 'Oversquare Bore and Stoke:',
      text: 'The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. ',
    },
    {
      title: 'Lightweight Components:  ',
      text: 'The LT6 uses lightweight forged aluminum pistons, forged titanium connecting rods, and an aluminum harmonic balancer to minimize rotational inertia.   ',
    },
    {
      title: 'Dry-Sump Oil System: ',
      text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette ZR1's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  ",
    },
    {
      title: 'Dual-Overhead-Cam Cylinder Heads:',
      text: 'The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      ',
    },
    {
      title: 'Variable Valve Timing:',
      text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      ",
    },
    {
      title: 'Hot-Side Direct Injection:  ',
      text: 'The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     ',
    },
    {
      title: 'Clean-Sheet Design:',
      text: 'The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  ',
    },
    {
      title: 'Co-Developed with Racing Engine: ',
      text: 'The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  ',
    },
    {
      title: 'Race-Tested, Production Approved:   ',
      text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  ",
    },
    {
      title: 'Built at The Performance Build Center:  ',
      text: 'The Corvette LT6 engine for the ZR1 and GT3. R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette ZR1 engines are built.  ',
    },
  ];

  return (
    <div className="rowPage">
      <CarouselZR1 />
      <div className="col-3 ">
        <SidebarZR1 />
      </div>

      <div className="col-6">
        <h1>

          <b> The <Link to="/ZR1">2025 Corvette ZR1 </Link> Tech Talk </b>

        </h1>
        <img
          src="/LT6.png"
          alt="High-performance LT6 engine"
          onError={e => {
            e.target.onerror = null;
            e.target.src = '/fallback.png';
          }}
        />
        <h5>
          Source: Chevrolet
        </h5>

        <Link to="https://www.youtube.com/shorts/nW26qmt3uWs">
          LT6 Engine Video
        </Link>
        {/* https://www.youtube.com/shorts/nW26qmt3uWs */}
        <h2>
          <b> Horsepower: 670 hp @ 8,400 rpm, "Revving Fast And High"</b>
          <b> Torque: 460 lb-ft @ 6,300 rpm </b>
        </h2>
        <h5>
          The ZR1 LT6 670-hp V-8 engine is a landmark achievement. Hagerty, February 21, 2022
        </h5>

        {/* <ul style={{ listStyleType: "none" }}> */}

        <h3>

          <b> Corvette ZR1 TechTalk, </b>

          Yes, you could order GT1 and 1LZ for your Corvette ZR1

        </h3>
        <p>
          GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
          If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.
        </p>

        <h3>

          <b> Corvette ZR1 TechTalk, </b>

          What are the Best Color Combinations - without Competition Stipes, (My Opionion, Anonymous)

        </h3>
        <p>
          GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
          If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.
        </p>

        <h3>

          <b> Corvette ZR1 TechTalk, </b>

          What are the Best Color Combinations - with Competition Stipes, (My Opionion, Anonymous)

        </h3>
        <p>
          GT1 seats are typically standard on the 1LZ trim, but they are not available for the top-tier 3LZ trim.
          If you're considering the ZR1 with the LZ1 trim, GT1 seats should be an option, but it's always best to confirm with your dealer for the latest configurations and availability2.

        </p>

        <h2>
          <p>
            The 2025 Chevrolet Corvette ZR1 is the most powerful Corvette
            ever produced. Here are some highlights:
          </p>
        </h2>
        <h3>
          <b> Performance </b>
        </h3>

        <p>

          The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette ZR1, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time.
        </p>
        <p> Here's a deeper dive into the LT6 engine: </p>

        <h3>  <b> Development and Relationship to Other Engines: </b></h3>

        <p> Here's a deeper dive into the LT6 engine: </p>

        <p>  <b> Key Features and Design: </b>        </p>

        <div className="content-container">
          {sections.map ((section, index) => (
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
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-ZR1s-670-hp-v-8-is-a-landmark-achievement/          ">
            Reference: 1. "Hagerty, The LT6 A Landmark Achievement
          </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
            2. "Vette Vues Magazine
          </Link>
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />  <SidebarZR1 />
        </div>

      </div>
    </div>
  );
}
