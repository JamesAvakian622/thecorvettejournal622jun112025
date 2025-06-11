// ButtonGrid.js
import React from 'react';
import './ButtonGrid.css';

const buttonData = [
  {label: 'Carbon Red', url: 'https://example.com/link2'},
  {label: 'Carbon Yellow', url: 'https://example.com/link3'},
  {label: 'Carbon Orange', url: 'https://example.com/link4'},
  {label: 'Carbon Flash', url: 'https://example.com/link5'},
  {label: 'Carbon Silver', url: 'https://example.com/link5'},
];

export default function ButtonRacingStipesZR1A () {
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
