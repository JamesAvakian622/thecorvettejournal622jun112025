import React from "react";
import "./styles/Page.css";

export default function LZ0() {


  const sections = [
    { title: "", text: " The LZ trim levels for the Corvette 1LZ, 2LZ, and 3LZ are associated with the Z06 and E-Ray models, offering increasing levels of luxury and technology." },
    { title: "1LZ", text: " The base trim, featuring GT1 or Competition seats, a 10-speaker Bose Premium audio system, and leather-wrapped interior elements.      " },
    { title: "2LZ", text: " Adds heated and ventilated seats, a performance data recorder, and premium interior materials.  " },
    { title: "3LZ", text: " The highest trim, featuring GT2 or Competition seats, carbon fiber interior accents, a 14-speaker Bose Performance Series audio system, and sueded microfiber upper trim. " },
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
