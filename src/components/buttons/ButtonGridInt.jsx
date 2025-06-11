// ButtonGrid.js
import React from "react";
import "./ButtonGrid.css";

const buttonData1 = [
  { label: "Black", url: "https://example.com/link1" },
  { label: "Sky Cool Gray", url: "https://example.com/link2" },
  { label: "Adrenaline Red Black", url: "https://example.com/link3" },
  { label: "Adrenaline Red Dipped", url: "https://example.com/link4" },
  { label: "Natural Black", url: "https://example.com/link5" },
  { label: "Natural Dipped", url: "https://example.com/link5" },
  { label: "Tension Blue Black", url: "https://example.com/link5" },
  { label: "Artemis Dipped", url: "https://example.com/link5" },
  { label: "Habanero Black", url: "https://example.com/link5" },
];
const buttonData2 = [
  { label: "Black, Black, Black Seats", url: "https://example.com/link6" },
  { label: "Black, Gray, Gray Seats 2", url: "https://example.com/link7" },
  { label: "Black, Gray, Gray Seats 2", url: "https://example.com/link8" },
  { label: "Black, Red, Red-Black", url: "https://example.com/link8" },
  { label: "Black, Red, Black", url: "https://example.com/link8" },
  { label: "Black, Black, Red-Black", url: "https://example.com/link8" },
  { label: "Black, Natural, Natural-Black", url: "https://example.com/link8" },
  { label: "Natural Dipped Console & Seats", url: "https://example.com/link8" },
  {
    label: "Black, Habanero, Habanero-Black",
    url: "https://example.com/link8",
  },
];
export default function ButtonGridInt() {
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
