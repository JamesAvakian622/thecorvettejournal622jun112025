// RollOverButton.js
import React, { useState } from "react";
import "./RollOverButton.css";

function RollOverButton({ label, url, iconSrc }) {
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  return (
    <div className="roll-over-container">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className="roll-over-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={iconSrc} alt={`${label} icon`} className="button-icon" />
          {label}
        </button>
      </a>
      {showImage && (
        <img
          src="path/to/your/image.png"
          alt="Roll Over Image"
          className="roll-over-image"
        />
      )}
    </div>
  );
}

export default RollOverButton;
