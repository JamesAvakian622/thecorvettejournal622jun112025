import React from "react";
import Navbar0 from "./Navbar0";
import "./styles/mega1.css";
//import Intro from "./Intro";
//import { Link } from "react-router-dom";

function Mega1() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <dir className="logoMin">
            {/*  keep this for spacing */}
            {/* <a> Map </a> */}
          </dir>
          <a href="http://www.TheCorvetteJournal.com">.</a>
        </div>
        <Navbar0 />
        <div className="dropdown">
          <button className="dropButtonZ">
            <h1>... The Corvette Journal</h1>
            {/* <i className="fa fa-caret-down"></i> */}
          </button>

          {/* <div className="backdrop1"> */}
          <div className="dropdown-content">
            {/* <div className="header"> */}
            <div className="imageRow">
              {/* <Link to="./Stingray"> The Stingray1</Link> */}
              <img src="/sting.png" alt="Corvette" />

              <div className="imgSpace">W</div>
              <img
                src="/z06.png"
                alt="Corvette"
                className=" height: auto;   max-width: 17%;  max-height: 2%;"
              />

              <div className="imgSpace">W</div>
              <img src="/eray.png" alt="Corvette" />
              <div className="imgSpace">W</div>
              <img
                src="/00eray.png"
                alt="Corvette"
                class=" height: auto;   max-width: 19%;  max-height: 2%;"
              />

              <div className="imgSpace">W</div>
              <img src="/redz.png" alt="Corvette" />
              <div className="imgSpace">W</div>
              {/* <img src="/c8rt.png" alt="Corvette" /> */}
              {/* </div> */}
            </div>
{/* 
            <div className="menuRow">
              <div className="column">
                <div className="titles1">
                  <Link to="./Stingray/PageSting"> The Stingray </Link>
                </div>
                <Link to="./Stingray/PageStingBrand"> Stingray Sports Car</Link>
                <Link to="./Stingray/PageStingExt"> Stingray Exterior </Link>
                <Link to="./Stingray/PageStingPhotoA">
                  Stingray Photo Album
                </Link>
                <Link to="./Stingray/PageStingInt"> Stingray Interior </Link>
                <Link to="./Stingray/PageStingPhotoB">
                  Stingray Interior Album
                </Link>
                <Link to="./Stingray/PageStingLT2"> Corvette LT2 Engine </Link>
                <Link to="./Stingray/PageStingSound">Stingray Exhaust</Link>

                <Link to="./Stingray/PageStingZ51">The Stingray Z51 </Link>

                <Link to="./Stingray/PageStingHard">
                  Stingray Hardtop Options
                </Link>
                <Link to="./Stingray/PageStingOptions">Stingray Options </Link>

                <Link to="./Stingray/PageStingSpecs">
                  Vehicle Specifications
                </Link>
                <Link to="./Stingray/PageStingPhotoC">
                  Stingray Customs Album
                </Link>
                <Link to="./Stingray/PageStingYear">Stingray Year Model</Link>
                <Link to="./Stingray/PageStingRivals">Stingray Rivals</Link>
                <Link to="./Stingray/PageStingVideos">Stingray Videos</Link>
              </div>

              <div className="column">
                <div className="titles1">
                  <Link to="./Z06/PageZ06"> Corvette Z06 </Link>
                </div>

                <Link to="./Z06/PageZ06Brand"> Z06 Sports Car</Link>
                <Link to="./Z06/PageZ06Ext"> Z06 Exterior </Link>
                <Link to="./Z06/PageStingPhotoA"> Z06 Photo Album </Link>
                <Link to="./Z06/PageZ06Int">Z06 Interior </Link>
                <Link to="./Z06/PageZ06PhotoB"> Z06 Interior Album </Link>
                <Link to="./Z06/PageZ06LT6">Corvette LT6 Engine</Link>
                <Link to="./Z06/PageZ06Sound">Z06 Exhaust</Link>

                <Link to="./Z06/PageZ06Z07">The Z06 Z07 </Link>
                <Link to="./Z06/PageZ06Hard">Z06 Hardtop Options </Link>
                <Link to="./Z06/PageZ06Options">Z06 Options </Link>
                <Link to="./Z06/PageZ06Specs">Z06 Specifications</Link>

                <Link to="./Z06/PageZ06PhotoC"> Z06 Customs Album </Link>
                <Link to="./Z06/PageZ06Year">Year Model</Link>

                <Link to="./Z06/PageZ06Rivals">Z06 Rivals</Link>
                <Link to="./Z06/PageZ06Videos">Z06 Videos</Link>
              </div>
              <div className="column">
                <div className="titles1">
                  <Link to="./Eray/PageEray"> Corvette E-Ray </Link>
                </div>

                <Link to="./Eray/PageEray"> E-Ray Sports Car</Link>
                <Link to="./Eray/PageErayExt"> E-Ray Exterior </Link>
                <Link to="./Eray/PageErayPhotoA"> E-Ray Photo Album </Link>
                <Link to="./Eray/PageErayInt"> E-Ray Interior </Link>
                <Link to="./Eray/PageStingPhotoB"> E-Ray Interior Album </Link>
                <Link to="./Eray/PageErayLT2"> LT2 & Motor</Link>
                <Link to="./Eray/PageEraySound"> 2025 E-Ray Exhaust</Link>

                <Link to="./Eray/PageErayZer">The E-Ray ZER </Link>
                <Link to="./Eray/PageErayHard">Eray Hardtop Options </Link>
                <Link to="./Eray/PageErayOptions">Eray Options </Link>
                <Link to="./Eray/PageEraySpecs">Vehicle Specifications</Link>
                <Link to="./Eray/ErayPhotoC"> E-Ray Customs Album </Link>
                <Link to="./Eray/PageErayYear">Year Model</Link>
                <Link to="./Eray/PageErayRivals">E-Ray Rivals</Link>
                <Link to="./Eray/PageErayVideos"> 2025 E-Ray Videos</Link>
              </div>
              <div className="column">
                <div className="titles1">
                  <Link to="./ZR1/PageZR1"> Corvette ZR1 </Link>
                </div>

                <Link to="./ZR1/PageZR1"> ZR1 Sports Car</Link>
                <Link to="./ZR1/PageZR1Ext"> ZR1 Exterior </Link>
                <Link to="./ZR1/PageZR1PhotoA"> ZR1 Photo Album </Link>
                <Link to="./ZR1/PageZR1Int"> ZR1 Interior </Link>
                <Link to="./ZR1/PageZR1PhotoB"> ZR1 Interior Album </Link>
                <Link to="./ZR1/PageZR1LT7">Corvette LT7 Engine</Link>
                <Link to="./ZR1/PageZR1Sound">ZR1 Exhaust</Link>

                <Link to="./ZR1/PageZR1Ztk">The ZR1 ZTK</Link>
                <Link to="./ZR1/PageZR1rayHard">ZR1 Hardtop Options </Link>
                <Link to="./ZR1/PageZR1Options">ZR1 Options </Link>
                <Link to="./ZR1/PageZR1Specs">Vehicle Specifications</Link>
                <Link to="./ZR1/PageZR1PhotoC"> ZR1 Customs Album </Link>
                <Link to="./ZR1/PageZR1Year">Year Model</Link>
                <Link to="./ZR1/PageZR1Rivals"> ZR1 Rivals</Link>
                <Link to="./ZR1/PageZR1Videos">ZR1 Videos</Link>
              </div>
              {/* <div className="column">
                <Link to="./Zora/PageZora">The Corvette Zora</Link>
                <Link to="./Zora/PageZoraBrand"> Zora Sports Car</Link>
                <Link to="./Zora/PageZoraExt"> The Exterior </Link>
                <Link to="./Zora/PageZoraInt"> The Interior </Link>
                <Link to="./Zora/PageZoraLT7">The Corvette LT7 Engine</Link>
                <Link to="./Zora/PageZoraZtk">Zora ZTK </Link>
                <Link to="./Zora/PageZoraSpecs">Vehicle Specifications</Link>
                <Link to="./Zora/PageZoraYear">Model Year</Link>
                <Link to="./Zora/PageZoraRivals">GM Zora Rivals</Link>
                <Link to="./Zora/PageZoraSound">Zora Exhaust</Link>
                <Link to="./Zora/PageZoraVideos">Zora Videos</Link>
              </div>
              <div className="column">
                <div className="titles1">
                  <Link to="./More/P0"> HP Obsessed </Link>
                </div>

                <Link to="./More/P1"> Brink Of Speed</Link>
                <Link to="./More/P2"> Paragon Performance</Link>
                <Link to="./More/P3"> Savaegeese Media </Link>
                <Link to="./More/P4"> Micheal Iujuii </Link>
                <Link to="./More/P5"> Throttle House </Link>
                <Link to="./More/P12"> Jay Leno </Link>
                <Link to="./More/P6"> Emily Hartford </Link>
                <Link to="./More/P7"> Hagerty Media </Link>
                <Link to="./More/P8"> Raities Rides </Link>
                <Link to="./More/P9"> Motor Trend </Link>
                <Link to="./More/P10">Car And Driver</Link>
                <Link to="./More/P11">Corvette World</Link>
                <Link to=""> </Link>
                <Link to="./Stingray/StingrayLegacy"> Stingray Legacy </Link>
                <Link to="./Z06/Z06Legacy"> Z06 Legacy </Link>
                <Link to="./Eray/ErayLegacy">E-Ray Legacy</Link>
                <Link to="./ZR1/ZR1Legacy">ZR1 Legacy</Link>
              </div>
              <div className="column">
                <div className="titles1">
                  <Link to="./C8R/PageC8RBrand"> C8.R Race Car </Link>
                </div>

                <Link to="./C8R/PageC8RExt"> Exterior Interior </Link>

                <Link to="./C8R/PageC8RLT76">The Corvette LT6 Engine</Link>
              
                <Link to="./C8R/PageC8RSpecs">Vehicle Specifications</Link>
                <Link to="./C8R/PageC8RYear">C8.R Model Year</Link>
                <Link to="./C8R/PageC8RSound">C8.R Exhaust</Link>
                <Link to="./C8R/PageC8RVideos">C8.R Videos</Link>

                <Link to=""></Link>
                <Link to="./RonFellows"> Ron Fellows School </Link>
                <Link to=""></Link>
                <Link to="./C8Hist">70 Years, Corvette Brand</Link>
                <Link to=""></Link>
                <Link to="./C8Histb">General Motors Engineers 70 Years</Link>
                <Link to=""></Link>
                <Link to="./C8Webs">Our Set Of Websites</Link>
              </div>
            </div>*/}
          </div> 
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Mega1;
