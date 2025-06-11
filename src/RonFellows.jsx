import React from 'react';
import './styles/Page.css';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import CarouselZ06 from './Z06/CarouselZ06';
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from './Z06/OnPageZ06';
import CarouselFlag from './Z06/CarouselFlag';
import SidebarZ06 from './Z06/SidebarZ06';
import SidebarZ06B from './Z06/SidebarZ06B';
import NavbarVideos from './NavbarVideos';
import ReactPlayer from 'react-player';

export default function RonFellows () {
  const sections = [
    {
      title: 'Driving Schools',
      text: ' ron Fellows   roduction V8 engine of all time. ',
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
      text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  ",
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
      text: 'The Corvette LT6 engine for the Z06 and GT3.R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  ',
    },
  ];

  return (

    
    <div className="rowPage">
      <CarouselZ06 />

      <NavbarVideos />

      <br />

      <div className="center">
        <h1>          <b> Corvette Driving Schools </b>        </h1>

        <h2> Ron Fellows Driving School </h2>
      </div>

        <p>
        <b>
                 " I Drove the Corvette E-Ray So Hard OnStar Called Me!,  Ron Fellows Performance at Spring Mountain "

        </b>
      </p>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
    url="https://www.youtube.com/watch?v=arVsnpe9Rfg"

          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }} />
      </div>






      <br />

      <p>
        <b>
           "Testing the Limits of the C8 Z06 at Ron Fellows Performance Driving School"
        </b>
      </p>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
    url = ' https://www.youtube.com/watch?v=S7sanBussPk'

          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }} />
      </div>


      <p>
        <b>
          "Overview of the Ron Fellows Performance Driving School for new Corvette owners"
        </b>
      </p>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url=" https://www.youtube.com/watch?v=Vf3cOwyNBV4"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }} />
      </div>
  
    <div>
    
    
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.youtube.com/watch?v=eDGJ-ZuJ9QQ&t=1s ">    1. HorsePower Obsessed,"C8 Corvette DCT Transmission Maineanced Explained " </Link>
        <Link to="  https://www.youtube.com/watch?v=BP5yAn8Rugs     "> 2. Rick Conti, "Corvette Confusion C8 DCT Transmission Servicing"</Link>


      </div>


</div>
    
  
  );
}
