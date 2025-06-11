import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "../ZR1/CarouselZR1";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import CarouseM from "./CarouseM";
import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";

 



export default function P4() {
  // const breadcrumbItems = [
  //   { label:"Home", href:"/Home" },
  //   { label:"The Chevrolet Corvette", href:"./Stingray/PageSting" },
  //   { label:"The Corvette Stingray", href:"./Stingray/PhotoAlbum" },
  // ];

  return (
    <>

<div className="rowPage">
        <CarouselZR1 />

      </div>


      <NavbarVideos />

      <div className="center">
        <h1>

      <Link to="https://www.youtube.com/watch?v=rjNSX_G1Ooc&t=115s">     <b>  Jessee Iwujii  </b>  </Link>  
          <br />

          <h4>
            <Link to="http://www.JesseeIwujii.com">   Jessee Iwujii Sports Cars  And  You Tube Content Developer  </Link></h4>

         


       
        </h1>

        <p>
          Jesse Iwuji is a professional stock car racing driver and a Lieutenant Commander in the U.S. Navy Reserve. He competes part-time in the NASCAR Xfinity Series, driving the No. 91 Chevrolet SS for DGM Racing with Jesse Iwuji Motorsports. Before his racing career, he played college football for the Navy Midshipmen and later served as a surface warfare officer in the Navy.
          Iwuji is also a Stong advocate for military veterans and diversity in NASCAR, supporting initiatives that promote inclusion in motorsports. His journey from the military to professional racing is inspiring—he’s proving that dedication and resilience can open doors in unexpected places.

        </p>
        <br />
        <br />
      
      <p>       <b>    "The BEST looking C8 ZR1 hood...ever"     </b>    </p>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=rjNSX_G1Ooc"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>
    

            <p>
            <b>
                     "New Mods for the C8 Z06...and they work! More horsepower..."
            </b>
          </p>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
         url= "https://www.youtube.com/watch?v=a1C-JIq5DXU"
    
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>
    
    
        <h2>
          <b> Stingray - Z51</b>
        </h2>
        <p>
          <b>"The LOUDEST C8 Z06...perhaps in the world | C8 Platform Cruise | Z06, eRay, Stingrays" </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url= "https://www.youtube.com/watch?v=hEBcImoN6Jg"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>
        <h2>
          <b> Corvette Z06</b>
        </h2>

        <p>
          <b> "Every car enthusiast DREAM CAR: The C8 ZR1" </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url= "https://www.youtube.com/watch?v=2xSShst0Jc0"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>
        <h2>
          <b> Corvette Z06 / Z07</b>
        </h2>
        <p>
        "C8 Z06 EXTREME Heat Test | 1/4 mi Drag Racing | 60-130mph"
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
             url= "https://www.youtube.com/watch?v=hnYa0k36lWY"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>
  

      </div>

      <div>
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
        <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
        <Footer />
      </div>


    

    </>
  );
}
