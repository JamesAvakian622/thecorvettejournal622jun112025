import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage06 from "./OnPage06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
import CarouselIntro from "./CarouselIntro";

export default function Gm() {
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>
            <b> Welcome General Motors Staff</b>
          </h1>

          <h1>
            <b> "Parent Chevrolet Corvette"</b>
          </h1>
       <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/cad.png">
            <img src="/cad.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
          </a>
          <div className="desc"> Cadillac, Coupe De Ville, 1959 Custom 672 Convertible   </div>
        </div>
      </div>
                    <h3>            <b> </b>          </h3>
<p> 

SOLD! $330,000, 2026 SCOTTSDALE AUCTION
</p>

<p>
Powered by a 6.2-liter LS3 crate V8 engine and 4L60 automatic transmission. Professionally built award-winner. Equipped
with air conditioning, cruise control and a custom sound system, along with power steering, top, windows and seats.


</p>

        
          <p>
              Welcome the Executives and Chevrolet Staff     </p>
            <h3>
              <b> Mara Bara, CEO, General Motors </b>
            </h3>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting33}>
            <img src={Sting33} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06 Images</div>
        </div>
      </div>
          <p>
              Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
              flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
              torque. Transmission: It comes with an 8-speed dual-clutch
              transmission for lightning-fast gear shifts. Equipped also with
              left paddle only hold to lowest gear from any other for instant
              power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
              60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
              233 mph, making it one of the fastest production cars ever.
          </p>
                       <b> Mara Bara, CEO, General Motors </b>
            </h3>
               <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting33}>
            <img src={Sting33} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06 Images</div>
        </div>
      </div>
          <p>
              Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
              flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
              torque. Transmission: It comes with an 8-speed dual-clutch
              transmission for lightning-fast gear shifts. Equipped also with
              left paddle only hold to lowest gear from any other for instant
              power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
              60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
              233 mph, making it one of the fastest production cars ever.
          </p>
                        <b> Mara Bara, CEO, General Motors </b>
            </h3>
               <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={Sting33}>
            <img src={Sting33} alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
          <div className="desc">Corvette Z06 Images</div>
        </div>
      </div>
          <p>
              Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
              flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
              torque. Transmission: It comes with an 8-speed dual-clutch
              transmission for lightning-fast gear shifts. Equipped also with
              left paddle only hold to lowest gear from any other for instant
              power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
              60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
              233 mph, making it one of the fastest production cars ever.
          </p>
                        <b> Mara Bara, CEO, General Motors </b>
            </h3>
               <><div className="responsive">
                    <div className="gallery100">
                        <a target="_blank" rel="noopener noreferrer" href={Sting33}>
                            <img src={Sting33} alt="Cinque Terre" width={"100%"} height={"100%"} />

                        </a>
                        <div className="desc">Corvette Z06 Images</div>
                    </div>
                </div><p>
                        Engine: The Z06 features a 5.5L twin-turbocharged V8 engine with a
                        flat-plane crankshaft, producing 1,064 horsepower and 828 lb-ft of
                        torque. Transmission: It comes with an 8-speed dual-clutch
                        transmission for lightning-fast gear shifts. Equipped also with
                        left paddle only hold to lowest gear from any other for instant
                        power from the engine. 0-60 mph: The Z06 can accelerate from 0 to
                        60 mph in just 2.6 seconds. Top Speed: It boasts a top speed of
                        233 mph, making it one of the fastest production cars ever.
                    </p><p>
                        The base model starts at around $118,900. The
                        <Link to="/Z06">2026 Corvette Z06 </Link> is designed to deliver
                        an exhilarating driving experience with cutting-edge technology
                        and stunning design.
                    </p><Footer /></>
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPage06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
