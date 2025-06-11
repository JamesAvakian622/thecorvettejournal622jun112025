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
import ReactPlayer from "react-player";
export default function Page2026Rivals() {
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
              The 2026 Corvette 2026 Rivals 
            </b>
          </h1>
     

      <h2>
          <b> C8 2026 Versus Bugati, Koningsegg, McLaren, and Ferrari, Arc Driver </b>
        </h2>

      <p>
          <b> 2026 Looks And Reving, Speed Phenom</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="  https://www.youtube.com/watch?v=Wi8kVVO2LjQ"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

      </p>
<Link to="" >ddddd</Link>

            
            https://www.youtube.com/watch?v=Wi8kVVO2LjQ




          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
            <OnPage2026 />  <Sidebar2026B />
        </div>
      </div>
    </>
  );
}
