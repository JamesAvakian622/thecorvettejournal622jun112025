import React from "react";
import "./styles/Page.css";
import "./styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselSting from "./Stingray/CarouselSting";
// //import ThemeSwitcher from "./ThemeSwitcher";
// import OnPageSting from "./Stingray/OnPageSting";
// import CarouselFlag from "./Stingray/CarouselFlag";
// import SidebarSting from "./Stingray/SidebarSting1";
// import OnPageZR1 from "./ZR1/OnPageZR1";
// import SidebarZR1 from "./ZR1/SidebarZR1";
import ReactPlayer from "react-player";
import NavbarMore from "./NavbarMore";
//import SidebarErayB from "./Eray/SidebarStingB";
//import ButtonGridWheels from "../components/buttons/ButtonGridWheels";
//import ButtonGridExt from "../components/buttons/ButtonGridExt";
//import ButtonRacingStipes from "../components/buttons/ButtonRacingStipes";
//import Spacer from "../components/Spacer";
export default function Concept() {
  return (
    <>
      <div className="rowPage">
        <CarouselSting />


          <div className="center">
            {/* <ButtonGridExt/>
          <ButtonRacingStipes />
          <ButtonGridWheels /> */}
          <br /> <br />   <br /> <br />

            <NavbarMore />

            <h1>   <b> The Corvette C9 Concept Car</b>            </h1>
       

          <h2>    <b> ZR1 C9 Leaked!</b>          </h2>
  
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

          <p>

            <b>       FIRST LOOK: Shock Next-Gen Corvette Concept! | 4K     </b>
            <br />
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="  https://www.youtube.com/watch?v=QCa-JGOx6jw "
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </div>
          </p>


          <p>
            <b>  5 Reasons This Will Not Be the C9 Corvette (Thank God) New Corvette Concept Will Not See Production </b>
            <br />
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url=" https://www.youtube.com/watch?v=-e5EXmv_-nQ"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </p>


          <p>

            <b>     NEW Corvette C9 Concept Car      </b>
            <br />
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="     https://www.youtube.com/watch?v=MJtPn20_aRc"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </div>
          </p>






          <p>

            <b>   Official GM Release! Is this the C9 Corvette?       </b>
            <br />
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="  https://www.youtube.com/watch?v=24H8cMdJews&t=3s"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </div>
          </p>






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

          </div>
          <Footer />

          {/* <div className="col-3 ">
        <CarouselFlag />
         <ThemeSwitcher /> 
        <OnPageZR1 />
        <SidebarZR1 />
      </div> */}
 </div>
</div>

        </>
        );
}
