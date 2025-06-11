import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarErayB from "./SidebarStingB";
export default function PageStingSpecs() {
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
2025 Corvette Stingray Specifications
            </b>
          </h1>
        
          <p>
              The 2025 Chevrolet Corvette Stingray continues to impress with its
              blend of performance, design, and value. Here are some key
              highlights: The Stingray is part of the Corvette lineup, which
              also includes the <Link to="/Eray">2025 Corvette E-Ray </Link>,
              Z06, and the upcoming ZR1. Each model offers a unique driving
              experience, catering to different performance needs and
              preferences3.
          </p>
            <h3>
              <b> Performance </b>
            </h3>
          <p>
              Performance: The Stingray features a naturally aspirated V8 engine
              positioned behind the driver, delivering up to 495 horsepower and
              470 lb-ft of torque. It boasts a 0-60 mph time of 2.9 seconds and
              a top speed of 194 mph.
          </p>



          
            <h3>
              <b> Design </b>
            </h3>
          <p>
              The 2025 model offers a Stiking design with multiple leather seat
              designs and wheel options for customization. It also includes a
              retractable hardtop for the convertible version2.
          </p>
            <h3>
              <b> Interior </b>
            </h3>
          <p>
              The cockpit combines advanced technology with expert
              craftsmanship, featuring genuine leather seats, a head-up display,
              and a Bose sound system.
          </p>
            <h3>
              <b> Price</b>
            </h3>
          <p>
              The Stingray starts at $68,300 for the coupe and $89,335 for the
              convertible.
          </p>
        
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageSting />
 <SidebarSting />
        </div>
      </div>
    </>
  );
}
