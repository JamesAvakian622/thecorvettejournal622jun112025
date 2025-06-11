import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";

export default function LZ26() {

  const sections = [

    { title: "", text: "    2026 Corvette Stingray Trim Levels  " },
    { title: "1LZ", text: " Base model with GT1 seats, a 10-speaker Bose audio system, and wireless Apple CarPlay® & Android Auto™.  " },
    { title: "2LZ", text: " Adds heated and ventilated seats, a Performance Data Recorder, and blind-spot monitoring.    " },
    { title: "3LZ", text: " Features premium leather-wrapped interior, carbon-fiber trim, and GT2 or Competition Sport seats.   " },
  
    { title: "", text: "   2026 Corvette Z06 Trim Levels   " },
    { title: "1LZ", text: " Includes with Napa leather seating, 10-speaker Bose audio, and power-adjustable seats.   " },
    { title: "2LZ", text: " Adds heated/ventilated seats, Performance Data Recorder, and blind-spot monitoring.   " },
    { title: "3LZ", text: " Features carbon-fiber trim, GT2 or Competition Sport seats, and suede microfiber accents.    " },
  
    { title: "", text: " 2026 Corvette E-Ray Trim Levels       " },
    { title: "1LZ", text: " Standard leather seating, 10-speaker Bose audio, and digital instrument panel.   " },
    { title: "2LZ", text: " Upgrades to heated/ventilated seats, 14-speaker Bose Performance Series audio, and head-up display.   " },
    { title: "3LZ", text: " Adds premium leather, carbon-fiber trim, and suede microfiber accents.   " },
  
    { title: "", text: "   2026 Corvette ZR1 Trim Levels   " },
    { title: "1LZ", text: " Performance-focused interior with GT1 or Competition Sport seats, 10-speaker Bose audio, and wireless smartphone integration.  " },
    { title: "2LZ", text: " Luxury-focused with GT2 or Competition Sport seats, carbon-fiber trim, suede microfiber accents, and 14-speaker Bose Performance Series audio.  " },
    { title: "3LZ", text: " The ZR1 also introduces a carbon-fiber display hood, available on Z06 and E-Ray models.  " },
  
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
