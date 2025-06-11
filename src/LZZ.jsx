import React from "react";
import "./styles/Page.css";

export default function LZZ() {


  const sections = [

    { title: "", text: "  The 2025 ZR-1 trim level offers include a driver-focused cockpit, with the 3LZ there is more luxury and high-end materials. " },

    { title: "1LZ", text: "   Performance-Focused Interior: Comes with GT1 or Competition Sport seats, wrapped in premium leather.Technology: Features a 10-speaker Bose Premium audio system, wireless Apple CarPlay® & Android Auto™, and a digital instrument panel. Steering Wheel: Leather-wrapped with a ZR1 logo at the bottom.Standard Comfort: Includes eight-way power-adjustable seats but lacks heating and ventilation.     " },
    { title: "3LZ", text: "   Luxury & Performance Blend: Upgrades to GT2 or Competition Sport seats, featuring power lumbar and bolster support.Premium Materials: Interior includes carbon-fiber trim, suede microfiber accents, and leather-wrapped IP/console/door panels. Advanced Audio & Tech: Comes with a 14-speaker Bose Performance Series surround system.Steering Wheel: Wrapped in microfiber and carbon fiber, enhancing grip and aesthetics.   " },
  ];


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
