// ButtonGrid.js
import React from "react";
import "./ButtonGrid.css";

const buttonData = [
  { label: "Artic white", url: "https://example.com/link1" },
  { label: "Black", url: "https://example.com/link2" },
  { label: "Torch Red", url: "https://example.com/link3" },
  { label: "Red Mist", url: "https://example.com/link4" },
  { label: "Riptide Blue", url: "https://example.com/link5" },
  { label: "Rapid Blue", url: "https://example.com/link6" },
  { label: "Hysteria Purple", url: "https://example.com/link7" },
  { label: "Sebring Orange", url: "https://example.com/link8" },
  { label: "Sea Wolf Gray", url: "https://example.com/link8" },
];

export default function ButtonGridExtZR1() {
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
