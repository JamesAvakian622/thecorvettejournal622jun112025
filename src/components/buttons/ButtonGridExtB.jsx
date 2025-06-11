// ButtonGrid.js
import React from "react";
import "./ButtonGrid.css";

const buttonData = [
  { label: "Riptide Blue", url: "https://example.com/link5" },
  { label: "Competition Yellow", url: "https://example.com/link5" },
  { label: "Red Mist", url: "https://example.com/link4" },
  { label: "Sebring Orange", url: "https://example.com/link8" },
  { label: "Sea Wolf Gray", url: "https://example.com/link8" },
];

export default function ButtonGridExtB() {
  return (
    <div className="button-grid">
      {buttonData.map((button, index) => (
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
  );
}
