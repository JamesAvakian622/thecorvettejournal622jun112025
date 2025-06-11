import React from "react";
import "./styles/Page.css";
import "./styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselSting from "./Stingray/CarouselSting";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./Stingray/OnPageSting";
import CarouselFlag from "./Stingray/CarouselFlag";
import SidebarSting from "./Stingray/SidebarSting1";
import OnPageZR1 from "./ZR1/OnPageZR1";
import SidebarZR1 from "./ZR1/SidebarZR1";
import ReactPlayer from "react-player";
import NavbarMore from "./NavbarMore";
//import SidebarErayB from "./Eray/SidebarStingB";
//import ButtonGridWheels from "../components/buttons/ButtonGridWheels";
//import ButtonGridExt from "../components/buttons/ButtonGridExt";
//import ButtonRacingStipes from "../components/buttons/ButtonRacingStipes";
//import Spacer from "../components/Spacer";
export default function C9() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
      </div>

      <div className="col-3 ">
        <SidebarSting />
      </div>

      <div className="col-6">
        {/*   Adjust two Navbar 2 n 3 */}
        <div className="center">
          {/* <ButtonGridExt/>
          <ButtonRacingStipes />
          <ButtonGridWheels /> */}
          <NavbarMore />

          <h1>
            <b> The Corvette C9 Concept Car</b>
          </h1>
        </div>
      
          <h2>
            <b> ZR1 C9 Leaked!</b>
          </h2>

        <p>
            <b> ZR1 C9 Corvette SuperCar Killer, Road Masters</b>
            <br />
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="  https://www.youtube.com/watch?v=U-mR3OdR3kg"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
        </p>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/1x.png">
                <img
                  src="/1x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc"> Torch Red Bold and eye-catching. </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/2x.png">
                <img
                  src="/2x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc"> Black Sleek and timeless. </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/3x.png">
                <img
                  src="/3x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc"> Red Mist Metallic Tintcoat </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/4x.png">
                <img
                  src="/4x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Hypersonic Gray Metallic </b> Modern and stylish. (2024
                color)
              </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/4x.png">
                <img
                  src="/4x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Hypersonic Gray Metallic </b> Modern and stylish. (2024
                color)
              </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/5x.png">
                <img
                  src="/5x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc"> Stipe Options: </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/6x.png">
                <img
                  src="/6x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                Full-Length Dual Racing Stipes - Available in colors like
                Carbon Flash, Midnight Silver, and Sterling Silver.
              </div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/7x.png">
                <img
                  src="/7x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">Corvette Z06</div>
            </div>
          </div>

          <img src="/8x.png   " alt=" wht"></img>

          <div className="responsive">
            <div className="gallery100">
              <a target="_blank" rel="noopener noreferrer" href="/8x.png">
                <img
                  src="/8x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                Stinger Stipe - A single Stipe that runs down the center of
                theas34gh90 hood, available in colors like Carbon Flash and
                Midnight Silver.
              </div>
            </div>
          </div>
      
        <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="   https://www.youtube.com/watch?v=QCa-JGOx6jw&t=190s   ">
            1. First Look: Next-Gen Corvette Concept, Top Gear
          </Link>
          <Link to="     https://www.youtube.com/watch?v=1CcxnlXca3w   ">
            2. Lotus Evija, Exclusive First Drive, Top Gear
          </Link>
          <Link to=" https://www.carscoops.com/2025/04/gms-corvette-concept-pushes-c9-into-radical-new-territory/  ">
            3. GM Corvette Pushes C9, By Chris Chilton, Carscoops
          </Link>
          <Link to="  https://www.youtube.com/watch?v=24H8cMdJews&t=516s     ">
            4. Official lGM Release, Brink Of Speed
          </Link>
          <Link to="  https://www.youtube.com/watch?v=E8FSrfuvNs0     ">
            5. Next-Gen Corvette, C9 Corvette, HorsepowerObsessed
          </Link>
          <Footer />
        </div>
      </div>

      <div className="col-3 ">
        <CarouselFlag />
        {/*      <ThemeSwitcher /> */}
        <OnPageZR1 />
        <SidebarZR1 />
      </div>
    </>
  );
}
