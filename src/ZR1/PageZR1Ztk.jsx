import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "./CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./OnPageZR1";
import CarouselFlag from "./CarouselFlag";
import SidebarZR1 from "./SidebarZR1";import SidebarZR1B from "./SidebarZR1B";
export default function PageZR1Ztk() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1>
            <b>
              The 2025 Corvette ZR1 ZTK Sports Car 
            </b>
          </h1>
        
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
              The 2025 Chevrolet Corvette ZR1 and the ZTK Track Performance
              Package for the
              <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>is
              designed to enhance the car's track capabilities. Here are some of
              the key benefits:
          </p>
            <h3>
              <b> Enhanced Aerodynamics </b>
            </h3>
          <p>
              <b> High-Downforce Rear Wing: </b> Provides increased stability
              and grip at high speeds.
              <b> Tall Hood Gurney Lip: </b>Improves airflow over the car,
              reducing drag.
              <b> Front Dive Planes: </b> Enhance front-end downforce for better
              cornering.
          </p>
            <h3>
              <b> Design </b>
            </h3>
          <p>
              <b> Upgraded Suspension </b>
              <b> Magnetic Selective Ride Control: </b>Offers a special
              calibration for track performance, providing a more responsive and
              controlled ride.
              <b> Stiffer Springs: </b>
              Improve handling and reduce body roll during aggressive driving.
          </p>
            <h3>
              <b> High-Performance Tires </b>
            </h3>
          <p>
              <b> Michelin Pilot Sport Cup 2 R Tires: </b>These tires are
              specifically designed for track use, offering superior grip and
              performance.
          </p>

            <h3>
              <b> Overall Performance </b> The combination of enhanced
              aerodynamics, upgraded suspension, and high-performance tires
              results in better lap times and overall track performance.
            </h3>
          <p>
              <b> Improved Lap Times: </b>
              <b> Tested on Renowned Tracks: </b>
              The ZTK package has been tested on world-renowned tracks like the
              Nürburgring, Road Atlanta, and Virginia International Raceway.
          </p>
          <p>
              In summary, the ZTK Track Performance Package is a must-have for
              enthusiasts looking to maximize their Corvette ZR1's track
              capabilities. It offers significant improvements in aerodynamics,
              suspension, and tire performance, making it a formidable contender
              on the track.
          </p>
              <div>
                  <h3>
                    <b> References </b>
                  </h3>
                  <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. "Hagerty, The LT6 A Landmark Achievement  </Link>
                  <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. "Vette Vues Magazine</Link>
                 
                </div> 
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
            <OnPageZR1 />  <SidebarZR1B />
        </div>
      </div>
    </>
  );
}
