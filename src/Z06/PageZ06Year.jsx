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
//import NavZ06 from "./NavZ06";
export default function PageZ06Year() {
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
        Corvette Z06 Model Years
            </b>
          </h1>

        {/* <NavZ06 /> */}
        
        <h3>
          <b> The Corvette z06 Evolution, Since 1963</b>
        </h3>

          <p>
              The Chevrolet Corvette Z06 originates as a secret racing package in 1963.
              The "Father Of The Corvette", Zora Arkus-Duntov, codenamed this car as "Zora's Option 6"
              to avoid alerting GM's management. It signified a track-tocused, high-performance Corvette
              featuring enhanced performance components.
          </p>
            <h3>
              <b> Z06 Background </b>
            </h3>
          <p>
 <p><b>     Origin:       </b>      </p><p> 
The Z06 package was created by Zora Arkus-Duntov, a legendary chief engineer at GM, who wanted a track-ready Corvette. 

</p>
<p><b>     Purpose:                </b>      </p><p> 
The Z06 was designed to allow Corvette owners to race their cars and represent Chevrolet in an informal sense, circumventing a corporate agreement forbidding automobile racing. 
</p>

<p><b>   The  Orginal 1963 Package:           </b>      </p><p> 
This Corvette option package, included stiffer suspension, heavy-duty brakes, a thicker front stabilizer bar, a larger 36-gallon fuel tank, a fuel-injected 5.4-liter engine (327 cubic inches) V8, and a close-ratio four-speed manual transmission. 
</p>

<p><b>     Subrosa, "As a Secret":       </b>      </p><p> 
The package was a secret, with the Z06 designation not even in the order book, and buyers in the know could request this special track-ready Corvette sports car. 
</p>

<p><b>   Return of the Z06:      </b>      </p><p> 
In 2001 the Z06 brand model designation reappeared for the C5 generation of Corvettes and has been offered in each generation since. 
</p>

<p><b>   The   Modern Z06 Model:   </b>      </p><p> 
Since 2001 the Corvette Z06 model was continued to represent a track-focused, race-oriented Corvette, with enhanced performance features like a supercharged engine, advanced aerodynamics, and a focus on track performance. 

</p>

<p><b>   The  C8 Generation Z06:   </b>      </p><p> 
The model 2025 year Chevrolet Corvette Z06 is praised for its incredible performance, including a powerful 5.5-liter flat-plane crank V8 engine, a blistering 0-60 time, and a top speed of 195 mph, all while offering a balanced mid-engine design and a supercar-like experience at a relatively accessible price. 
The Chevrolet Corvette LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. 
</p>



          </p>
            <h3>
              <b> Design </b>
            </h3>
          <p>
              Aerodynamics: The Z06 features cutting-edge aerodynamics with wide
              side air inlets, carbon-fiber elements, and a multitude of airflow
              and cooling features. <b>Exterior:</b>The design includes a sleek
              and aggressive look with quad center exhaust and available
              carbon-fiber trim.<b>Interior:</b> The cockpit is driver-centric
              with high-quality materials and bespoke options.
          </p>
            <h3>
              <b> Technology </b>
            </h3>
          <p>
              Infotainment: Standard wireless Apple CarPlay and Android Auto,
              with an available 14-speaker Bose Performance Series Sound system.
              Performance App: Provides real-time performance data and vehicle
              information. Built-in Wi-Fi Hotspot: Keeps you connected on the
              go.
          </p>
            Magnetic Selective Ride Control: This advanced suspension system
            adjusts damping to provide a smooth ride on various road conditions.
            Advanced Infotainment: The Stingray includes a state-of-the-art
            infotainment system with navigation, Bluetooth connectivity, and
            more.
            <h3>
              <b> Pricing Starting MSRP: </b>
            </h3>
          <p>
              The base model starts at around $118,900. The
              <Link to="/Z06">2025 Corvette Z06 </Link> is designed to deliver
              an exhilarating driving experience with cutting-edge technology
              and stunning design.
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
