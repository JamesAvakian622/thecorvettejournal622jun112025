// ButtonGrid.js
import React from 'react';
import './ButtonGrid.css';

const buttonData = [
  {label: 'Silver', url: 'https://example.com/link1'},

  {label: 'Red', url: 'https://example.com/link1'},
  {label: 'Blue', url: 'https://example.com/link2'},
  {label: 'Yellow', url: 'https://example.com/link3'},
  {label: 'Orange', url: 'https://example.com/link4'},
  {label: 'Carbon Blue', url: 'https://example.com/link5'},
];

export default function ButtonRacingStipesZR1 () {
  return (
    <div className="button-grid">
      {buttonData.map ((button, index) => (
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
