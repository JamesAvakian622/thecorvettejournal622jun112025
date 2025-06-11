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

import NavbarExtA from "../Zinternal/NavbarExtA";
import NavbarExtB from "../Zinternal/NavbarExtB";
import NavbarExtC from "../Zinternal/NavbarExtC";
//import Spacer from "../components/Spacer";

import ButtonGridExtA from "../components/buttons/ButtonGridExtA";
import ButtonGridExtB from "../components/buttons/ButtonGridExtB";
import ButtonRacingStipes from "../components/buttons/ButtonRacingStipes";
export default function PageStingExtSoc() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />
      </div>

      <div className="col-3 ">
        <SidebarSting />
      </div>

      <div className="col-6">
        <h1>
          <b> The 2025 Stingray Exterior</b>
        </h1>
              <h3>
              <b> Body Color</b>
            </h3>
            <NavbarExtA />
            <ButtonGridExtA />
            <br />
            <NavbarExtB />
            <ButtonGridExtB />
            <h3>
              <b> Racing Stipes</b>
            </h3>
            <NavbarExtC />
            <ButtonRacingStipes />
            <br />

      
        <p>
            The <Link to="/Stingray">2025 Corvette Stingray </Link> o offers a
            stunning array of paint options that cater to every taste. For the
            2025 model year, Chevrolet has introduced ten vibrant colors,
            including classics like Torch Red, Arctic White, and Black, as well
            as bold choices like Hysteria Purple Metallic and Sebring Orange
            Tintcoat2. Some colors, like Rapid Blue, are available at an
            additional cost, while others are standard.
        </p>
          <br />
          <br />
         
          <h3>
            <b> Top Color Choices: </b>
          </h3>
          <h2 id="1"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting1.png">
                <img
                  src="/sting1.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic, clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="2"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting2.png">
                <img
                  src="/sting2.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="3"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting3.png">
                <img
                  src="/sting3.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Torch Red </b> Bold and eye-catching.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="4"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting4.png">
                <img
                  src="/sting4.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arcticggggggg White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="5"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting5.png">
                <img
                  src="/sting5.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Red Mist Metallic Tintcoat </b> A deeper, more sophisticated
                red.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="6"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting6.png">
                <img
                  src="/sting6.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Hypersonic Gray Metallic </b> Modern and stylish. (last year
                2024)
              </div>
            </div>
          </div>
          {/* /// */}
          <h2 id="7"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting7.png">
                <img
                  src="/sting7.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="8"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting8.png">
                <img
                  src="/sting8.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="9"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting9.png">
                <img
                  src="/sting9.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Torch Red </b> Bold and eye-catching.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="10"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/sting10.png">
                <img
                  src="/sting10.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arcticggggggg White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="11"></h2>
          <h3>
            <b> Stipe Options: </b>
          </h3>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/5x.png">
                <img
                  src="/5x.png"
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
          {/* /// */} <h2 id="8"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/6x.png">
                <img
                  src="/6x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">hhhhh</div>
            </div>
          </div>
          {/* /// */} <h2 id="9"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/7x.png">
                <img
                  src="/7x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* /// */} <h2 id="10"></h2>
          <div className="responsive">
            <div className="gallery100100">
              <a target="_blank" rel="noopener noreferrer" href="/8x.png">
                <img
                  src="/8x.png"
                  alt="Cinque Terre"
                  width={600}
                  height={400}
                />
              </a>
              <div className="desc">
                <b> Arctic White </b> A classic and clean look.
              </div>
            </div>
          </div>
          {/* ///< */}
          <div className="responsive">
            <div className="gallery100100">
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
                the hood, available in colors like Carbon Flash and Midnight
                Silver.
              </div>
            </div>
          </div>
          {/* ///</p> */}
          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.corvetteblogger.com/2020/06/23/the-c8-corvette-is-loaded-with-21st-century-composite-materials/  ">
              1. C8 Corvette is Loaded with 21st Century Composite Materials,
              Corvette Blogger.
            </Link>
            <Link to="https://www.motortrend.com/how-to/vemp-1108-corvette-body-materials/">
              2. Corvette Body Materials - From Fiberglass To Carbon Fiber,
              Motor Trend.
            </Link>
            <Link to="https://gmauthority.com/blog/2025/01/heres-how-much-the-2025-corvette-zr1-ztk-track-performance-package-costs/">
              3. Corvette ZR1 ZTK Track Performance Package Costs
            </Link>
            <Link to="https://gmauthority.com/blog/2024/09/c8-corvette-zr1-brings-back-the-ztk-performance-package/">
              4. C8 Corvette ZR! ZTK Package Comes Back, GM Authority.
            </Link>
          </div>
      
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
