import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./OnPageZ06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
import ReactPlayer from "react-player";
export default function PageZ06Sound() {
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>
            <b>
 Corvette Z06    Engine Sound
            </b>
          </h1>
     

            <h3>
              <b> Exhaust Engine Sound</b>
            </h3>



        
          <h2>
            <b> Corvette Z06</b>
          </h2>

        <p>
            <b>  Corvette Z08 Exhaust, The Toyz </b>
            <div style={{ position: 'relative', paddingTop: '65.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/shorts/wxnoGNVeXWQ"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

        </p>
          <h2>
            <b> Corvette Stingray and Z06 Exhaust</b>
          </h2>
        <p>
            <b> Compare Stingray to Z06 Exhaust </b>
            <div style={{ position: 'relative', paddingTop: '65.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/shorts/FQ-2ctJg384"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

        </p>
          <h2>
            <b> Corvette  Z06 Exhaust</b>
          </h2>
        <p>
            <b>  Corvette Z06 Stock Vs Custom Exhaust </b></p>
          <div style={{ position: 'relative', paddingTop: '65.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=4txioITwZXs&t=25s"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>



        <p>
            <b>  Corvette Z06 comparisons, Brink of Speed</b>
            <div style={{ position: 'relative', paddingTop: '65.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=O_zfsSNZVuo"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

        </p>


          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
