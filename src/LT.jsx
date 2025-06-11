import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";

export default function LT() {

  const sections = [
    { title: "The Corvette Stingray LT trims are :", text: "   1LT, 2LT, and 3LT that offer progressively enhanced interior features:   "},
    { title: "1LT", text: " The base trim provides a driver-focused cockpit with Mulan leather seating surfaces, a 10-speaker Bose audio system,     and an 8-inch infotainment touchscreen with wireless Apple CarPlay and Android Auto.    " },
    { title: "2LT", text: " This trim adds heated and ventilated seats, a wireless charging pad, a 14-speaker Bose Performance Series audio system, and blind-spot monitoring for added convenience and safety.     " },
    { title: "3LT", text: "  This is the most premium trim, featuring GT2 bucket seats, a custom leather-wrapped interior, and sueded microfiber upper trim, elevating the luxury feel.    " },

  ];
//   The LS and LT engines have played a crucial role in Corvette's performance evolution. The LS series debuted in 1997 with the LS1, marking a significant leap in small-block V8 technology. The LS engines, spanning Gen III and Gen IV, became synonymous with high performance, powering Corvettes like the C5, C6, and C72. Notable variants include the LS6 (enhancing the Z06 in 2001), the LS7 (a 7.0L powerhouse in the C6 Z06), and the supercharged LS9 (found in the C6 ZR1).
//   In 2013, Chevrolet revived the LT designation with the Gen V LT1, introducing direct fuel injection and improved efficiency. The LT4 followed in 2014, bringing supercharged power to the C7 Z06. The latest LT6, featured in the C8 Z06, showcases a flat-plane crank design, pushing Corvette performance into new territory.


//   Key Differences Between LS and LT Engines
//   Generation: LS engines belong to Gen III and Gen IV, while LT engines are Gen V.
//   Fuel Injection: LS engines use port fuel injection, whereas LT engines feature direct fuel injection, improving efficiency and power.
//   Compression Ratio: LT engines generally have a higher compression ratio, leading to better fuel economy and performance.
//   Modification Potential: LS engines are easier to modify, making them popular for swaps and aftermarket tuning.
//   Durability: LS engines tend to be more durable, while LT engines incorporate newer technology but may require more precise tuning.
//   The LS series is known for its versatility and affordability, while the LT series brings modern efficiency and power.

//   .....Vehicles Using LS Engines
  
//   Chevrolet Corvette (C5, C6, C7) – LS1, LS2, LS3, LS7, LS9
  
//   Chevrolet Camaro (1998-2015) – LS1, LS2, LS3, LS7
  
//   Pontiac GTO (2004-2006) – LS1, LS2
  
//   Chevrolet Silverado & GMC Sierra (1999-2013) – Various LS-based truck engines
  
//   Cadillac CTS-V (2004-2015) – LS6, LS2, LSA
  
//   Chevrolet Trailblazer SS (2006-2009) – LS2
  
//   .....Vehicles Using LT Engines
  
//   Chevrolet Corvette (C7, C8) – LT1, LT4, LT5, LT6
  
//   Chevrolet Camaro (2016-Present) – LT1, LT4
  
//   Cadillac CT5-V Blackwing – LT4
  
//   Chevrolet Silverado & GMC Sierra (2014-Present) – Various LT-based truck engines
  
//   Chevrolet Tahoe & Suburban (2015-Present) – LT-based engines
  
//   The LS engines are widely used in performance cars and swaps, while LT engines bring modern efficiency and power to newer models
  

// <Link to=" https://www.onallcylinders.com/2018/04/05/ls-lt-engine-reference-guide-gen-3-gen-4-gen-5-ls-lt-vortec-ecotec3-engines/">

// OnAllCyliinders.com "LS and LT Engine Reference Guide for the Gen. 3, Gen. 4 & Gen. 5 LS/LT, Vortec/EcoTec3 Engines "</Link>


// LT2 details 

// The LT2 engine is a 6.2-liter V8 developed by General Motors, introduced in the 2020 Chevrolet Corvette C8. It builds upon the LT1 but is optimized for the mid-engine layout of the C8.

// LT2 Engine Specifications

// Displacement: 6.2L / 376 cu. in.
// Aspiration: Naturally aspirated
// Compression Ratio: 11.5:1
// Horsepower: 495 hp @ 6,450 rpm (with performance exhaust)
// Torque: 470 lb-ft @ 5,150 rpm
// Fuel System: Direct injection with Active Fuel Management (cylinder deactivation)
// Oiling System: Dry sump (7.5-qt. capacity)
// Valvetrain: Overhead valve, dual-equal variable valve timing
// Throttle Body: 87mm single bore (electronic)
// ECU: GM E99 (32-bit processing)
// Transmission: 8-speed dual-clutch (DCT)2

// Key Features

// Mid-engine optimization: Designed for the C8 Corvette’s layout, improving weight distribution.
// Dry sump oiling system: Ensures consistent lubrication during high-performance driving.
// Higher compression ratio: Enhances efficiency and power output.
// Active Fuel Management: Cylinder deactivation improves fuel economy when cruising.
// The LT2 is the most powerful naturally aspirated V8 ever used in a production Corvette



  return (
    <>
        <div className="content-container">
          {sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2 className="content-title">{section.title}</h2>
              <p className="content-text">{section.text}</p>
            </div>
          ))}
        </div>

    </>
  );
}
