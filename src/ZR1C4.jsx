import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZR1 from "./ZR1/SidebarZR1";
import SidebarZR1B from "./ZR1/SidebarZR1B";
import NavbarZR1 from "./NavbarZR1";
export default function ZR1C4() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />

        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1>
            <b> The Corvette C6 ZR1             </b>
          </h1>
        <NavbarZR1 />
        
          <p>
              The 2025 Chevrolet Corvette ZR1 is the most powerful Corvette ever
              produced and known as the <b> "King Of The Hill"</b>.
          </p>

     <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
            <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div>
<p> Corvette ZR1 Logo   </p>


      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/c4zr1.png">
            <img src="/c4zr1.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div>

<p>Corvette C4 ZR1   </p>
          <p>
              The
              <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>is
              a true powerhouse, combining stunning design with incredible
              performance. Here are the highlights for its interior and
              exterior:
          </p>

            <h3>
              <b> Exterior </b>
            </h3>
          <p>
              
              <b> Design: </b>The ZR1 features a more aggressive and aerodynamic
              design with wider fenders, quarter panels, and fascias.
          </p>
          <p>
              <b> Colors: </b>Available in Competition Yellow Tintcoat Metallic,
              Hysteria Purple Metallic, and Sebring Orange Tintcoat Metallic.
          </p>
          <p>
              <b> Wheels: </b>Comes with 20-inch front wheels and 21-inch rear
              wheels, wrapped in performance tires.
          </p>
          <p>
              <b> Spoiler: </b>The Z51 Performance Package includes a redesigned
              spoiler for improved stability and a more aggressive appearance.
          </p>
          <p>
              <b> Top Speed:</b> The ZR1 can reach a top speed of 233 mph,
              making it the fastest Corvette ever.
          </p>
            <h3>
              <b> Interior </b>
            </h3>
          <p>
              
              <b> Upholstery: </b>Features high-quality materials with new
              upholstery options, including Habanero color.
          </p>
          <p>
              <b> Technology:</b> Equipped with a 12-inch digital inStument
              panel and an 8-inch touchscreen with wireless Apple CarPlay and
              Android Auto.
          </p>
          <p>
              <b> Comfort: </b>Heated and ventilated front seats, leather
              upholstery, and carbon fiber interior details in higher trims.
          </p>
          <p>
              <b> Performance Features: </b>Includes standard Launch Control and
              Custom Launch Control for optimized acceleration.
          </p>
            <h3>
              <b> Performance </b>
            </h3>
          <p>
              
              <b>Engine: </b>The ZR1 is powered by a 5.5-liter twin-turbo V8
              engine, producing 1,064 horsepower and 828 lb-ft of torque.
          </p>
          <p>
              <b> Transmission: </b>Features an eight-speed dual-clutch eight
              speedautomatic transmission.
          </p>
          <p>
              <b> Acceleration: </b>Can accelerate from 0 to 60 mph in just 2.3
              seconds.
          </p>
          <p>
              <b> Quarter Mile: </b>Runs the quarter mile in 9.6 seconds at 150
              mph.
          </p>
          <p>
              <b> 0-60: </b> 2.3 seconds.
          </p>

            <h3>
              <b> Pricing Starting MSRP: </b>
            </h3>
          <p>
              The base model starts at a price not yet revealed by Chevrolet.
          </p>
          <p>
              The
              <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>is
              designed to deliver unmatched performance and style, making it a
              standout in the sports car world.
          </p>
          <div>
              <h3>
                <b> References </b>
              </h3>
              <Link to="  https://www.youtube.com/watch?v=C7IOelB64DE  ">
                1. "C68 Corvette ZR1, Quick Review",
               Extra Throttle House.
              </Link>
              <Link to="https://www.youtube.com/watch?v=aS-QI1tdDxw">
                2. "Corvette C6 ZR1",
                Savagegeese.
              </Link>
              <Link to="https://gmauthority.com/blog/2025/01/heres-how-much-the-2025-corvette-zr1-ztk-track-performance-package-costs/">
                3.  Corvette ZR1 ZTK Track Performance Package Costs
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
            <OnPageZR1 />  <SidebarZR1B />
        </div>
      </div>
    </>
  );
}
