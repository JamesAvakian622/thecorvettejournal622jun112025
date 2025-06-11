// ButtonGrid.js
import React from "react";
import "./ButtonGrid.css";

const buttonData = [
  { label: "     Artic White    ", url: "https://example.com/link1" },
  { label: "Black", url: "https://example.com/link2" },
  { label: "Torch Red", url: "https://example.com/link3" },
  { label: "Rapid Blue", url: "https://example.com/link6" },


  { label: "Hysteria Purple", url: "https://example.com/link7" },

];

export default function ButtonGridExtA() {
  return (
    <div className="containerButton">
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
    </div>
  );
}
