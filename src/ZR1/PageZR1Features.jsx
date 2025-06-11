import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "./CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./OnPageZR1";
import CarouselFlag from "./CarouselFlag";
import SidebarZR1 from "./SidebarZR1";
import SidebarZR1B from "./SidebarZR1B";
export default function PageZR1Features() {

  const sections = [
    { title: "LT6 Engine Deep Dive:", text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. " },
    { title: "Title Two", text: "This is the paragraph for Title Two." },
    { title: "Flat-Plane Crankshaft:", text: "  The LT6 utilizes a flat-plane crankshaft, a design common in racing engines, which contributes to its high-revving capability.    " },
    { title: "High Redline:", text: " The LT6 revs to 8,600 RPM, a testament to its high-performance design. " },
    { title: "High Power Output:", text: "  It generates a maximum of 670 hp (500 kW; 679 PS) at 8,400 RPM and 460 lb⋅ft (624 N⋅m) of torque at 6,300 RPM." },
    { title: "Oversquare Bore and Stoke:", text: "The LT6 features an oversquare bore and Stoke (104.3/80.0mm), which reduces peak piston speed at high rpm. " },
    { title: "Lightweight Components:  ", text: "The LT6 uses lightweight forged aluminum pistons, forged titanium connecting rods, and an aluminum harmonic balancer to minimize rotational inertia.   " },
    { title: "Dry-Sump Oil System: ", text: "The LT6 employs a dry-sump oil system, integrated into the engine, for better lubrication at high revs and during high-g cornering. It has six scavenging pumps.   The Corvette Z06's dry sump oil system is a standout feature designed for high-performance driving. Unlike traditional wet sump systems, the dry sump stores oil in an external reservoir, ensuring consistent lubrication even during extreme cornering, braking, or acceleration. This system minimizes oil aeration, enhances engine reliability, and allows the engine to sit lower in the vehicle, improving its center of gravity.  " },
    { title: "Dual-Overhead-Cam Cylinder Heads:", text: "The LT6 features dual-overhead-cam cylinder heads with mechanical Finger Follower valvetrain.      " },
    { title: "Variable Valve Timing:", text: "The LT6's hollow camshafts are equipped with variable valve timing, allowing for precise control of valve timing.      " },
    { title: "Hot-Side Direct Injection:  ", text: "The LT6 utilizes a hot-side direct-injection fuel system, which enables high compression ratios and optimizes combustion efficiency.     " },
    { title: "Clean-Sheet Design:", text: "The LT6 is a new, clean-sheet design, not an evolution of the traditional Chevy small-block V8, although it shares the same 4.4-inch bore centerline spacing.  " },
    { title: "Co-Developed with Racing Engine: ", text: "The LT6 was co-developed with the LT6-R racing engine, which powers the C8.R race car, sharing many major components.  " },
    { title: "Race-Tested, Production Approved:   ", text: "The LT6's development began in 2014, with the first prototype engine builds happening in 2015 and the first production-intent engines being completed in 2018.  " },
    { title: "Built at The Performance Build Center:  ", text: "The Corvette LT6 engine for the Z06 and GT3. R starts life at the Performance Build Center in Bowling Green, Kentucky, the same place all Corvette Z06 engines are built.  " },
  ];
// The C8.R Corvette Race car has a LT6,    see photo

//non-ZTK: has Michelin PS2 tires, 1/4 mile in 9.6 seconds at 105 mph, this was 2 mph faster because it is has less drag from the wing. 
// ZTK: has Michelin Cup 2 R tires, they are more sticky and the car does the 1/4 mile in, 9.7 seconds.

//on pump gas, premium and not E85.




// flat plane crankshaft

// Hard Top, removable or HTC convertible with a touch of a button

//Electronic Camera and Monitor, Backup Mirror</div>

// Frunk and Trumk, in a SuperCar

// DCT , eight speed automatic, shifts in 0.1 seconds.

// Beautiful colors, interior and exterior

//Both Stingray and the wide body Z06, E-Ray, and ZR1 have a sleek sexy body design

// The body is aerodynamic, with a Z06 wing   xxxx lbs downforce,  with ZR1 wing 1000 lbs downforce


// Braking, ZR1, ten Piston calipurs
// Sting
//Z06

//Eray
//ZR1, 
//2026 Corvette ZR1 To Offer New High-Performance Brake Package

//ZR1

//The 2026 Corvette ZR1 is getting a serious braking upgrade! As part of the ZTK performance package, it features 10-piston front and 6-piston rear calipers, paired with massive carbon ceramic discs—the largest brake setup ever fitted to a production Corvette.
//These brakes are designed to handle the ZR1’s monStous 1,064-horsepower twin-turbo 5.5L V8 LT7 engine, ensuring it can stop as impressively as it accelerates. The ZTK package also includes Michelin Pilot Sport Cup 2 R tires and a Carbon Fiber Aero package for maximum track performance.
//https://gmauthority.com/blog/2025/05/2026-corvette-zr1-to-offer-new-high-performance-brake-package/


//2026 ZR1 Corvette ZTK Will Have Some Of The Biggest Brakes Anywhere
//https://carbuzz.com/2026-zr1-corvette-ztk-big-brakes/

//Chevrolet says that the new brakes will be the largest ever fitted to a production Corvette. It didn't spell out exactly how sizable the rotors will be, but for comparison, the standard ZR1 has 15.7-inch front rotors and 15.4-inch rear rotors to stop it. Yes, they're already carbon, but the standard ZR1 has six-piston front and four-piston rear calipers, versus the 10-piston front and six-piston rear new ZTK parts. This new kit could make them some of the biggest automotive brakes in the world.

//Why carbon ceramic brakes? They don't corrode, for a start, so they'll always look good sitting inside the ZR1's available exposed carbon fiber wheels. But they also deliver benefits when it comes to stopping. Not just in braking distances, where their higher coefficient of friction can reduce distances significantly, because that is ultimately limited by the tire.

//Carbon ceramic brakes are nearly impervious to heat and thus fade. So they can handle lap after lap on even the toughest racetracks without overheating and either starting to fade, where the car fails to slow down as quickly when you ask, or cooking its parts to complete failure.

//Lastly, they last longer. In theory, they can last hundreds of thousands of miles if they don't have to endure a life of track time. They also can't warp or distort like iron rotors can.



// large electronic displays, configurablea

// Driving Modes
   //  custom Z mode and xyz mode 

   // Track, Touring
    // Adjustable exhaust, schocks, ....... ... ... ... ... parts

//..........
// Magnetic Schocks, licensed from Chevy to Ferarri   with Dates   


// magnetic.png

//   <div className="responsive">
//         <div className="gallery100">
//           <a target="_blank" rel="noopener noreferrer" href={Sting21}>
//             <img src={Sting21} alt="Cinque Terre" width={"100%"} height={"100%"}
//              />
        
//           </a>
//           <div className="desc">Corvette ZR1</div>
//         </div>

// Licensed to the following;


// Non-GM Vehicles
// Ford Mustang Shelby GT350 (2015 model year and newer, branded as MagneRide)
// Ferrari 599
// Ferrari F12berlinetta
// Ferrari California
// Ferrari FF
// Ferrari 458 Italia
// La Ferrari
// Lamborghini Aventador
// Audi TT
// Audi S3
// Audi R8
// Acura MDX
// Acura ZDX
// Land Rover Range Rover Evoque
// Land Rover Discovery Sport



// a Magnetic Ride Control shock absorber uses the following components:

// A monotube damper filled with magnetorheological fluid located at each wheel of a vehicle
// A set of sensors
// An electronic control unit (ECU) responsible for coordinating the entire system


// Dampers
// The MRC dampers are filled with magnetorheological fluid that is a mixture of easily-magnetized iron particles in a synthetic hydrocarbon oil. For the third generation of the technology, each monotube damper contains a piston with two electromagnetic coils and two small fluid passages through the piston. The electromagnets are capable of creating a variable magnetic field across the fluid passages.

// ........
// AuStalian, Carbon fiber W#heels     


// ref
// General Motors Magnetic Ride Control Technology

// https://gmauthority.com/blog/gm/general-motors-technology/gm-chassis-suspension-technology/gm-magnetic-ride-control-technology/



//////////ZR1 turbos

// The 2025 Corvette ZR1 is equipped with dual 76mm turbochargers integrated with the exhaust manifold. These mono-scroll, ball-bearing turbos are designed for quick response and feature electronic wastegates to optimize performance. The ZR1's LT7 5.5L twin-turbo V8 produces 1,064 horsepower and 828 lb-ft of torque, making it the most powerful factory Corvette ever2.


// The 2025 Corvette ZR1 is equipped with BorgWarner twin turbochargers, designed specifically for the LT7 5.5L V8. These 76mm turbos feature electronically actuated wastegates and ball-bearing conStuction to optimize performance. BorgWarner has a long history of supplying high-performance components, including for IndyCar racing.
// Interestingly, each turbocharger carries a Gemini rocket insignia, paying homage to GM’s collaboration with NASA in the 1960s. You can explore more details on BorgWarner’s involvement here.

// ref

// https://www.autoblog.com/news/2025-corvette-zr1-how-nasa-inspired-twin-turbos-unlock-next-level-power

// "2025 Corvette ZR1: How NASA-inspired twin-turbos unlock next-level power", Autoblog.

////////////////C   Vette Displays

// The 2026 Corvette ZR1 features a redesigned cockpit with three advanced display screens, but Chevrolet has not officially disclosed the manufacturer of these displays. However, GM has historically partnered with Panasonic Automotive, LG Electronics, and Bosch for infotainment and digital inStument clusters in previous Corvette models.
// The ZR1’s interior includes:
// A 12.7-inch center console display for infotainment.
// A 14-inch driver information center for performance data.
// A 6.6-inch auxiliary touchscreen to the left of the steering wheel.

//////////
// 2026 Corvette Offers New Carbon Fiber Display Hood
// https://gmauthority.com/blog/2025/05/2026-corvette-offers-new-carbon-fiber-display-hood/


//////////

// Michelin.png

// Michelin Tires   

// Michelin provides several tire options for the C8 Corvette lineup, including the Stingray, E-Ray, Z06, and ZR1. Here’s a breakdown of the available models:
// Michelin Pilot Sport 4S ZP – A high-performance summer tire designed for daily driving and spirited road use. Standard on the Stingray and E-Ray.
// Michelin Pilot Sport All Season 4 ZP – Offers year-round usability, including light snow capability. Available for Stingray and E-Ray.
// Michelin Cup 2R ZP – A track-focused tire with extreme grip, standard on the Z06 with the Z07 package.
// Michelin Pilot Sport Cup 2 ZP – A high-performance summer tire with enhanced dry grip, used on the ZR1 for maximum traction.
// Each tire is run-flat (ZP), meaning it can be driven for a short distance after a puncture. You can check out a detailed comparison of these tires here and here.



//////////////// create engines

// LS, LT, LSX create engines

// Chevrolet Performance offers LS, LT, and LSX crate engines, each designed for different performance needs:

// LS Engines: Known for their versatility and reliability, LS engines are widely used in performance builds. Examples include the LS3 (430 HP, 6.2L) and LS376/525 (525 HP, 6.2L).

// LT Engines: The latest generation of GM small-block engines, featuring direct injection and improved efficiency. LT engines are commonly found in modern GM vehicles.

// LSX Engines: Built for high-performance applications, LSX engines are race-engineered versions of LS motors. Examples include the LSX454 (627 HP, 7.4L) and LSX376-B15 (473 HP, 6.2L).

// These engines are popular for restomods, muscle cars, and racing applications. You can explore more details on Chevrolet's official crate engine lineup.



// It seems like you're really interested in high-performance crate engines! 

// Read up on Chevy LS Next SHP LSX 427Ci Dart Forged Stoker Short Block, which is perfect for LS1, LS2, LS3, and LS9 applications. Additionally, the Chevrolet Performance LSX454 Long Block Kit could be a great fit for those looking for a powerful upgrade. There are also options like the GM Forged LS Shortblock Crate Engine and the Chevy LS Crate Engine with 570HP that could meet your performance needs.

////////////////create end

  return (
    <>
    <div className="rowPage">
    <CarouselZR1 />
    <div className="col-3 ">
      <SidebarZR1 />
    </div>

    <div className="col-6">
      <h1>
        <b>
          2025 Corvette ZR1 Hard Top       
        </b>
      </h1>
 

     <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
            <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
             />
        
          </a>
        </div>
      </div>
<p> Corvette ZR1 Logo   </p>


        <p>
          The
          <Link to="/ZR1">2025 Corvette ZR1 Sports Car <br/> </Link>
          offers a variety of options to customize your ride to your liking.
          Here are some of the key options available:
        </p>

        <div className="content-container">
          {sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2 className="content-title">{section.title}</h2>
              <p className="content-text">{section.text}</p>
            </div>
          ))}
        </div>

        <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="https://www.youtube.com/watch?v=ofDqv2T35tI      " >  1. "Hardtop Convertible, Corvette ZR1, DPCcars  </Link>
          <Link to="https://www.youtube.com/watch?v=NtvyWgy4STY" > 2. "ZR1 convertible, Carscoiops</Link>
          <Footer />
        </div>
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
