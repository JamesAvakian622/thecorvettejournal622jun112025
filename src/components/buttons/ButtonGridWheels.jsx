// ButtonGrid.js
import React from "react";
import "./ButtonGrid.css";

const buttonData1 = [
  { label: "Silver Forged", url: "https://example.com/link1" },
  { label: "Carbon Flash Forged", url: "https://example.com/link2" },
  { label: "Blue Forged", url: "https://example.com/link3" },
  { label: "Machined Forged", url: "https://example.com/link4" },
  { label: "Riptide Blue", url: "https://example.com/link5" },
  { label: "Carbon Visible Fiber Wheels", url: "https://example.com/link5" },
];
const buttonData2 = [
  { label: "Carbon Visible Fiber Wheels", url: "https://example.com/link5" },
  { label: "Blue Brake Calipurs", url: "https://example.com/link1" },
  { label: "Bronze Brake Calipurs", url: "https://example.com/link2" },
  { label: "Bright Red Calipurs", url: "https://example.com/link3" },
  { label: "Edge Red Calipurs", url: "https://example.com/link4" },
  { label: "Yellow Calipurs", url: "https://example.com/link5" },
  { label: "Orange Calipurs", url: "https://example.com/link5" },
];

export default function ButtonWheels() {
  return (
    <>
      <div className="title">
        <h3>Perforated Leather</h3>
      </div>
      <div className="button-grid">
        {buttonData1.map((button, index) => (
          <a
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <button className="grid-button">{button.label}</button>
          </a>
        ))}
        <div className="title">
          <h3>Microfiber Sueded Leather Centers</h3>
        </div>
      </div>
      <div className="button-grid">
        {buttonData2.map((button, index) => (
          <a
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <button className="grid-button">{button.label}</button>
          </a>
        ))}
      </div>
    </>
  );
}
