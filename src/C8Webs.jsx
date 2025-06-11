import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZR1 from "./ZR1/SidebarZR1";
//import SidebarZR1 from "./ZR1/SidebarZR1";

export default function C8Webs() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <div className="center">
            {/* <HorizontalButtons />
            <ButtonGridExtZR1 />
            <ButtonRacingStipesZR1 />
            <ButtonGridWheels /> */}
            <h1>
              <b> The Cool Jimmy Corvette</b>
            </h1>
            <h1>
              <b>Set of Websites</b>
            </h1>
            <h2>
              <b> by James L. Avakian, Cool Jimmy, </b>
            </h2>
            <h3>An Optical Automation, LLC Product</h3>
          </div>
          <br />
          <br />
        
          <p>
              <Link src=" http://www. TheCorvetteJournal.Com " alt="  ">
                Main Corvette Website
              </Link>
          </p>
            <br />

          <p>
              <Link src=" http://www. TheCorvetteWeb.Com " alt="  ">
                The Corvette Website
              </Link>
          </p>
            <br />

          <p>
              <Link src=" http://www. Checkered-Flag.Com " alt="  ">
                Checkered-Flag.Com, An eCommerce Merch Website
              </Link>
          </p>
            <br />

          <p>
              <Link src=" http://www. CoolJimmyCorvette.Com " alt="  ">
                Cool Jimmy Corvette
              </Link>
          </p>
            <br />
            <br />
            <br />
          <p>Here are some highlight statements:</p>
            <br />
            <br />
          <p>
              This set of websites are a compilation and research from real
              people seen in YouTube videos and the General Motors, Chevrolet
              website.
          </p>
            <br />
            <br />
          <p>
              Unlink some or many other websites, this set of information is the
              extreme opion, feeling, and genuine love for Chevrolet Corvettes!
              Written by Cool Jimmy, Software Engineering Technologist.
          </p>
            <br />
            <br />
          <p>
              These are our automotive enthusiasts car websites. A product of
              Optical Automation, LLC
          </p>
            <br />
            <br />
          <p>Endorsed by James L. Avakian, ET, March 6, 2025</p>
            <br />
        
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
            <OnPageZR1 />  <SidebarZR1 />
        </div>
      </div>
    </>
  );
}
