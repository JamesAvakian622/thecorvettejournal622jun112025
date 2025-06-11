// ButtonGrid.js
import React from 'react';
import './ButtonGrid.css';

const buttonData = [
  {label: ' Carbon Silver', url: '#1'},
  {label: ' Carbon Red', url: '#2'},
  {label: ' Carbon Yellow', url: '#3'},
  {label: ' Carbon Orange', url: '#4'},
  {label: ' Carbon Flash', url: '#5'},
  {label: ' Silver', url: '#5'},
  {label: ' Red', url: '#6'},
  {label: ' Blue', url: '#7'},
  {label: ' Yellow', url: '#8'},
  {label: ' Orange', url: '#9'},
  {label: ' Blue', url: '#10'},
];

export default function ButtonRacingStipes () {
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
