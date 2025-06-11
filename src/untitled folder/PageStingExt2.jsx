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
import ButtonGridWheels from "../components/buttons/ButtonGridWheels";
import ButtonGridExt from "../components/buttons/ButtonGridExt";
import ButtonRacingStipes from "../components/buttons/ButtonRacingStipes";
//import Spacer from "../components/Spacer";
export default function PageStingExt() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
      </div>

      <div className="col-3 ">
        <SidebarSting />
      </div>

      <div className="col-6">
        <div className="center">
          {/* <ButtonGridExt/>
          <ButtonRacingStipes />
          <ButtonGridWheels /> */}

          <h1>
            <b> The 2025 Stingray Exterior 2</b>
          </h1>
        </div>
        <p>This is for Chevrolet OEM Options</p>
      
        <p>
            The <Link to="/Stingray">2025 Corvette Stingray </Link> offers a
            variety of color and Stipe options to suit different tastes. Here
            are some of the most popular choices:
        </p>
          <h3>
            <b> Spoiler Options, Four</b>
          </h3>
        <p>
            <b> No Wind</b> A classic and clean look.
        </p>
          <img src="/0Sting.png   " alt=" wht"></img>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href={Sting21}>
                <img
                  src="/0Sting.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">Corvette Z06</div>
            </div>
          </div>

        <p>Low Wing.</p>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href={Sting21}>
                <img
                  src="/1Sting.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">Corvette Z06</div>
            </div>
          </div>

        <p>Mid Wing, new for 2025</p>
          <img src=" /2Sting.png  " alt="blk  "></img>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href={Sting21}>
                <img
                  src="/2Sting.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">Corvette Z06</div>
            </div>
          </div>

        <p> High Wing </p>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href={Sting21}>
                <img
                  src="/3Sting.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">Corvette Z06</div>
            </div>
          </div>

          <p>
            All four wing configuration, each fit the same hole mounting
            pattern.
          </p>
          <img src=" /4x.png  " alt=" gray "></img>
          <h3>
            <b> Stipe Options: </b>
          </h3>
          <img src="/5x.png   " alt=" wht"></img>
        <p>
            Full-Length Dual Racing Stipes - Available in colors like Carbon
            Flash, Midnight Silver, and Sterling Silver.
        </p>
          <img src="/6x.png   " alt=" wht"></img>
          <img src="/7x.png   " alt=" wht"></img>
        <p>
            Stinger Stipe - A single Stipe that runs down the center of the
            hood, available in colors like Carbon Flash and Midnight Silver.
        </p>
          <img src="/8x.png   " alt=" wht"></img>
          <h3>
            <b> Performance </b>
          </h3>
        <p>
            Performance: The Stingray features a naturally aspirated V8 engine
            positioned behind the driver, delivering up to 495 horsepower and
            470 lb-ft of torque. It boasts a 0-60 mph time of 2.9 seconds and a
            top speed of 194 mph.
        </p>
          <h3>
            <b> Design </b>
          </h3>
        <p>
            The 2025 model offers a Stiking design with multiple leather seat
            designs and wheel options for customization. It also includes a
            retractable hardtop for the convertible version.
        </p>
        <p>
            This set of images is only half of the available
            <Link to="/Stingray">2025 Corvette Stingray </Link> line. These are
            the most popular, you may want a more custom look and combination.
            Go for this car and love it with all your hearth. Love this car !
        </p>
        <p>
            Remember the convertible version is equally if not more a utility
            feature and its design whether in Black or Body Color is supurbe.
            What a beautify car, I love all the 2025 colors and certain Stipe
            combinations ! Select one and stay true to your nature.
        </p>
          <h3>
            <b> Interior </b>
          </h3>
        <p>
            The cockpit combines advanced technology with expert craftsmanship,
            featuring genuine leather seats, a head-up display, and a Bose sound
            system.
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
    </>
  );
}
