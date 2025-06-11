import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselEray from "./CarouselEray";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageEray from "./OnPageEray";
import CarouselFlag from "./CarouselFlag";
import SidebarEray from "./SidebarEray";
import SidebarErayB from "./SidebarErayB";


const lt2Path = process.env.PUBLIC_URL + "/LT2";

export default function PageErayLT2() {
  return (
    <>
      <div className="rowPage">
        <CarouselEray />
        <div className="col-3 ">
          <SidebarEray />
        </div>

        <div className="col-6">
          <h1>
            <b> Eray Power Train,</b>
            <b> Corvette LT2 Engine And Front Motor</b>
          </h1>

          <h2>
            <b> An All-Wheel-Drive, AWD, SuperCar</b>
          </h2>


          <div className="responsive">
            <div className="gallery">
              <a target="_blank" rel="noopener noreferrer" href="/LT2.png">
                <img src="/LT2.png" alt="Engine" width={"100%"} height={"100%"}
                />
              </a>
            </div>
          </div>
          <h5>   Source: Corvette Magazine.com</h5>
          <div className="center">  
<h2><b> The Chevrolet LT2 and E-Ray Motor work as one   </b></h2>
          <h2>This is E-Ray All Wheel Drive, AWD</h2>
          <h2> Horsepower: 490 hp, and 160 hp, 655 hp (Total combined)</h2>
          <h2> Torque: 470 lb-ft, V8 engine, 125 lb-ft electric motor, 595 lb-ft (Total combined)</h2>
 </div>
          <p>
            The 2025 Corvette E-Ray, the first electrified Corvette, features a 160-hp electric motor on the front axle, combined with the 6.2-liter V8, to produce a total of 655 horsepower and 595 lb-ft of torque, making it the quickest production Corvette ever.

            Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>
          <p>   Engine: The E-Ray retains the 6.2-liter LT2 V8 engine, delivering 495 horsepower and 470 lb-ft of torque to the rear wheels. </p>



          <p>  Electric Motor: A 160-hp electric motor is mounted on the front axle, providing additional power and all-wheel drive capabilities.  </p>
         
          <img
            src="/Eraymotor.png"
            alt="High-performance LT2 engine"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
          <h5>
            Source: C8CorvetteBlog</h5>

         
 

          <img
            src="/LT2c.png"
            alt="High-performance LT2 engine"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
          <h5>
            E-Ray Hybrid lelectric Motor and V8 Setup</h5>

          <h5>
            Source: GM</h5>

         <p>    Battery:  The 1.9 kilowatt hour battery utilized by the E-Ray is small, but it does have the ability to discharge a lot of energy and recharge itself fairly quickly — more so than normal hybrids. The battery is also capable of giving the car around three to four miles of range, which is good for shuttling the E-Ray around town on very short trips. The E-Ray isn't meant for long-distance electric driving — it's a car meant for performance, with the motor filling the gaps in low-torque situations, improving handling at the limit, and, as mentioned above, giving the car the ability to be driven year-round.     </p>

          <img
            src="/LT2b.png"
            alt="High-performance LT2 engine"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback.png";
            }}
          />
          <h5>
            Source: Corvette Magazine.com</h5>






          <p>Total Output: The combined output of the V8 and electric motor is 655 horsepower and 595 lb-ft of torque.  </p>

          <p>
            Corvette engines are primarily manufactured at GM’s Performance Build Center in Bowling Green, Kentucky.
            This facility specializes in assembling high-performance engines, including those used in the ZR1, Z06, and E-Ray models.
          </p>
          <p>
            Additionally, some Corvette engines, like the LT2 and LT6, are produced at GM’s Tonawanda Engine Plant in Buffalo, New York, which has a long history of building powerful V8 engines for Chevrolet.
          </p>
          <p>
            Bowling Green remains the heart of Corvette production, ensuring precision and performance in every engine.
          </p>
          <p>            Transmission: It comes with an 8-speed dual-clutch     transmission for lightning-fast gear shifts. Equipped also with
            left paddle only hold to lowest gear from any other for instant              power from the engine.
          </p>


          <p>
            0-60 mph: The Z06 can accelerate from 0 to    60 mph in just 2.6 seconds.
          </p>
          <p>
            Top Speed: It boasts a top speed of     233 mph, making it one of the fastest production cars ever.
          </p>
          <p>

            Other Features:
            The E-Ray also features a standard Active Fuel Management system that uses the electric motor to extend the four-cylinder operation in specific scenarios.
          </p>
          <p>
            Stealth Mode:
            The E-Ray has a Stealth mode, which allows for limited all-electric propulsion, enabling short distances on electric power.
          </p>
          <p>
            Stealth Mode Speed:
            The E-Ray can travel at up to 45 mph on electric power for short distances in what Chevy calls Stealth mode.
          </p>


          <h3>
            <b> Design </b>
          </h3>
          <p>
            Aerodynamics: The Z06 features cutting-edge aerodynamics with wide     side air inlets, carbon-fiber elements, and a multitude of airflow
            and cooling features.
          </p>

          <p>
            <b>Exterior:</b>The design includes a sleek   and aggressive look with quad center exhaust and available   carbon-fiber trim.
          </p>
          <p>

            <b>Interior:</b> The cockpit is driver-centric
            with high-quality materials and bespoke options.
          </p>

          <p>

            <b>Weight:</b> Chevy engineers weren't cavalier about America's sports car putting on pounds. "This car is the heaviest Corvette we've ever done," Corvette executive chief engineer Tadge Juechter said, "but we did everything in our power to make it light." The car comes with carbon-ceramic brakes standard, and a lithium-ion 12-volt battery saves 18 pounds over the lead-acid alternative. The electric front drive unit, which weighs about 80 pounds, uses a magnesium case. Optional carbon-fiber wheels trim another 41 pounds off the curb weight.
          </p> <p>
            And because the hybrid battery is located near the car's center of gravity, in the tall and wide tunnel between the driver and passenger, the weight diStibution is barely changed. Every C8 Corvette we've tested to date has carried its weight split between the front and rear axles at either 40/60 or 39/61 percent. Chevy says that the E-Ray will nudge that to 41/59 percent.
          </p>
          <h3>
            <b> Technology </b>
          </h3>
          <p>
            Infotainment: Standard wireless Apple CarPlay and Android Auto,
            with an available 14-speaker Bose Performance Series Sound system.
          </p>
          <p>
            Performance App: Provides real-time performance data and vehicle
            information. Built-in Wi-Fi Hotspot: Keeps you connected on the
            go.
          </p>
          <p>
            Advanced Infotainment: The Stingray includes a state-of-the-art
            infotainment system with navigation, Bluetooth connectivity, and
            more.

          </p>
          <p>

            Magnetic Selective Ride Control: This advanced suspension system
            adjusts damping to provide a smooth ride on various road conditions.
          </p>



          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around $118,900. The
            <Link to="/Z06">2025 Corvette Z06 </Link> is designed to deliver
            an exhilarating driving experience with cutting-edge technology
            and stunning design.
          </p>




          <h3>
            <b> References </b>
          </h3>

          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-Erays-670-hp-v-8-is-a-landmark-achievement/    " >  1. Car And Driver, E-Ray Is Wired For Speed  </Link>
<Link to="https://www.midenginecorvetteforum.com/forum/mid-engine-corvettes/c8-e-ray-powertrain/542349-e-ray-info-from-gm-techlink  "> 2. Mid Engine Corvette Forum, "Eray Powertrain"</Link>


          <Footer />
        </div >

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageEray />   <SidebarErayB />
        </div>
      </div>
    </>
  );
}
