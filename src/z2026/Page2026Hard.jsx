import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carousel2026 from "./Carousel2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebar2026 from "./Sidebar2026";
import Sidebar2026B from "./Sidebar2026B";

import Sting20 from "../imgs/2026/z0.png";
 import Sting21 from "../imgs/2026/z1.png";
 import Sting22 from "../imgs/2026/z2.png";
 import Sting23 from "../imgs/2026/z3.png";
 import Sting24 from "../imgs/2026/z4.png";
 import Sting25 from "../imgs/2026/z5.png";
 import Sting26 from "../imgs/2026/z6.png";
 import Sting27 from "../imgs/2026/z7.png";
 import Sting28 from "../imgs/2026/z8.png";
 import Sting29 from "../imgs/2026/z9.png";
 import Sting30 from "../imgs/2026/z10.png";
 import Sting31 from "../imgs/2026/z11.png";
 import Sting32 from "../imgs/2026/z12.png";
 import Sting33 from "../imgs/2026/z13.png";

export default function Page2026Hard() {

  return (
    <>
      <div className="rowPage">
        <Carousel2026 />
        <div className="col-3 ">
          <Sidebar2026 />
        </div>

        <div className="col-6">
          <h1>
            <b>
              2026 Corvette z2026 Hard Top
            </b>
          </h1>

          <p>    The   Stingray, Z06, E-Ray, and ZR1 Sports Cars  all have an available coupe or convertible option.            </p>
          
          
          <p> The Coupe Stingray, Z06, and E-Ray have a frunk and trunk to see the engine through the back window and store the hard top.</p>

<p> The ZR1 has a front radiator and split window, so the trunk is the only storage and place to store the hard top.</p>

<p> the Convertible offers the best automatic push button option, but lacks the engine direct view by split window.</p>
<div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting20}>
            <img src={Sting20} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>   <div className="desc">Corvette 2026 Coupe</div>;

        </div>
      </div>

<div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting20}>
            <img src={Sting20} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        <div className="desc">Corvette 2026 Coupe Photochromic Roof</div>;

          </a>   <div className="desc">Corvette 2026 Convertible</div>;

        </div>
      </div>

 <div className="responsive">
  <div className="gallery100">
    <a target="_blank" rel="noopener noreferrer" href={Sting20}>
      <img src={Sting20} alt="Cinque Terre" width={'100%'} height={'100%'} />
      <div className="desc">Corvette 2026 Coupe Photochromic Roof</div>;

    </a>   <div className="desc">Corvette 2026 Photochromic Top</div>;

  </div>
</div>;



          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.youtube.com/watch?v=ofDqv2T35tI      " >  1. Hardtop Convertible, Corvette z2026, DPCcars  </Link>
            <Link to="https://www.youtube.com/watch?v=NtvyWgy4STY" > 2. z2026 convertible, Carscoiops</Link>
            <Footer />
          </div>
        </div>


        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPage2026 /> 
           <Sidebar2026B />
        </div>
      </div>

    </>
  );
}
