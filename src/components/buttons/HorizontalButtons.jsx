// HorizontalButtons.js
import React from "react";
import RollOverButton from "./RollOverButton";
import "./RollOverButton.css";

const buttonData = [
  { label: "Button 1", url: "/zr11.png", iconSrc: "/zr11.png" },
  { label: "Button 2", url: "/zr111.png", iconSrc: "/zr111.png" },
  { label: "Button 3", url: "/zr111a", iconSrc: "/zr111a.png" },
  {
    label: "Button 4",
    url: "https://example.com/link4",
    iconSrc: "path/to/your/icon4.png",
  },
  {
    label: "Button 5",
    url: "https://example.com/link5",
    iconSrc: "path/to/your/icon5.png",
  },
];

function HorizontalButtons() {
  return (
    <div className="horizontal-buttons">
      {buttonData.map((button, index) => (
        <RollOverButton
          key={index}
          label={button.label}
          url={button.url}
          iconSrc={button.iconSrc}
        />
      ))}
    </div>
  );
}

export default HorizontalButtons;
