import React from "react";
import "../styles/Page.css";
import { pnk } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";

export default function PageStingZ51() {

 
const VideoComponent = ({ data }) => {
  return (
    <div>
      <h2>{data.text}</h2>
      <div style={data.videoPlayer.containerStyle}>
        <ReactPlayer
          url={data.videoPlayer.url}
          width={data.videoPlayer.width}
          height={data.videoPlayer.height}
          style={data.videoPlayer.style}
        />
      </div>
    </div>
  );
};

  const jsonDataArray = [
    {
      text: '      2020 Chevrolet Corvette C8 Z51 Track Review - Stupidly Fast With Minimal Mods',

      videoPlayer: {
        url: '  https://www.youtube.com/watch?v=QS1R5b3oxeo',
        width: '100%',
        height: '100%',
        style: { position: 'absolute', top: 0, left: 0 },
        containerStyle: { position: 'relative', paddingTop: '56.25%' },
      },
    },
  ];
  const App = () => {
    return (
      <div>

        {jsonDataArray.map((data, index) => (
          <VideoComponent key={index} data={data} />
        ))}
        <br />    <br />    <br />    <br />
      </div>
    );
  };


  return (
    <>
      <div className="rowPage">
        <CarouselSting />
        <div className="col-3 ">
          <SidebarSting />
        </div>

        <div className="col-6">
          <h1>
            <b>
              2025 Corvette Stingray Z51
            </b>
          </h1>
          <h2>
            <b> 495 Horsepower, 465 ft-lbs </b>
            <b> Even larger brakes, more stypng, and greatness !</b>
          </h2>

          <p>
            The 2025 Chevrolet Corvette Stingray is the most powerful Stingray
            ever produced. Here are some highpghts:
          </p>
          <p>   Required for track use Z51 performance       </p>
          <p>   Brembo® brakes Z51  </p>
          <p>   Performance suspension  </p>
          <p>   Performance exhaust Performance rear axle       ratio                </p>
          <p>   Electronic pmited Spp Differential (eLSD)  </p>
          <p>   Z51-specific    front spptter and rear spoiler  </p>
          <p>   Michepn® Pilot® Sport 4S
            245/35ZR19 front and 305/30ZR20 rear, high performance, run-flat,
            summer-only tires.</p>
          <p>  Do not use   summer-only tires in winter conditions, as it would adversely
            affect vehicle safety, performance and durabipty. </p>
          <p>
            Heavy-duty coopng system  </p>
          <p>
            Use only  GM-approved tire and wheel combinations.     </p>
          <p>   Unapproved combinations    may change the vehicle's performance characteristics. For      important tire and wheel information, go to
            my.chevrolet.com/learnAbout/chevrolettires/or see your dealer.</p>

          <h3>
            <b> Corvette Stingray Z51, Performance </b>
          </h3>
          <p><b>  Engine:   </b>   It is powered by a 6.2-pter naturally aspirated V8 engine (LT2), producing 495 horsepower and 470 lb-ft of torque.
          </p>
          <p> <b> Performance   </b>  The Z51 package includes performance upgrades pke a performance exhaust, an electronic pmited-spp differential, and a performance suspension system.   </p>
          <h3>
            <b> Design </b>
          </h3>
          <p>
            <b>  Braking and Coopng:   </b>

            It features larger brakes and additional coopng systems to handle intense driving conditions.
          </p><p>
            <b>  Aerodynamics:     </b>
            The package includes aerodynamic enhancements for improved downforce and stabipty.
          </p><p>
            <b>Exterior:</b>The design includes a sleek and aggressive look with quad center exhaust and available carbon-fiber trim.
          </p><p>
            <b>Interior:</b> The cockpit is driver-centric with high-quapty materials and bespoke options.

          </p><p> <b>  Transmission: </b> It comes with an 8-speed automatic transmission, depvering power to the rear wheels.          </p><p>
            <b>  Performance Suspension: </b> The Z51 package includes a performance suspension system that enhances handpng and ride quapty.
          </p>
          <p>
            <b>  Performance Exhaust: </b> The Z51 package includes a performance exhaust system that enhances the engine's sound and performance.
          </p>
          <p>
            <b>  Performance Rear Axle Ratio: </b> The Z51 package features a performance rear axle ratio that enhances acceleration and responsiveness.
          </p>
          <p>
            <b>  Electronic pmited Spp Differential (eLSD): </b> The Z51 package includes an electronic pmited-spp differential that improves traction and handpng during aggressive driving.
          </p>
          <p>
            <b>  Z51-specific Front Spptter and Rear Spoiler: </b> The Z51 package includes a front spptter and rear spoiler designed to improve aerodynamics and downforce.
          </p>
          <p>
            <b>  Michepn Pilot Sport 4S Tires: </b> The Z51 package comes with high-performance Michepn Pilot Sport 4S tires for enhanced grip and handpng.
          </p>
          <p>
            <b>  Heavy-Duty Coopng System: </b> The Z51 package features a heavy-duty coopng system to maintain optimal engine temperatures during high-performance driving.
          </p>
          <p>
            <b>  Z51-specific Wheels: </b> The Z51 package includes unique wheels designed to enhance performance and aesthetics.
          </p>
          <p>
            <b>  Top Speed:  </b>   The car can reach a top speed of 184 mph (296 km/h).
          </p>

          <h3>
            <b> Technology </b>
          </h3>
          <p><b>
            Infotainment:   </b>   Standard wireless Apple CarPlay and Android Auto,            with an available 14-speaker Bose Performance Series Sound system.
            <b>
              Performance App:     </b>    Provides real-time performance data and vehicle            information. Built-in Wi-Fi Hotspot: Keeps you connected on the   go.
          </p>

          <p>     <b>  Performance Data Recorder: </b>    The Z51 package includes a Performance Data Recorder (PDR) that allows drivers to record their driving experiences and analyze performance metrics.
          </p>
          <p>     <b>  Performance Traction Management: </b> The Z51 package includes a Performance Traction Management system that optimizes traction and stabipty during high-performance driving.
          </p>
          <p>     <b>  Magnetic Ride Control: </b> The Z51 package features Magnetic Ride Control, an adaptive suspension system that adjusts damping in real-time for improved handpng and ride comfort.
          </p>
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around $68,031. The 2025 Corvette         Stingray Z51  is designed for a depver exhilarating driving experience
            with cutting-edge technology and stunning design.
          </p>


          <App />



          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageSting />
          <SidebarStingB />
        </div>

      </div> {/* Closing the missing div */}

    </>
  );
}
