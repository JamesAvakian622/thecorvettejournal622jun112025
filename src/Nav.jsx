
import "./styles/Page.css"; // Import custom styles

import React, { useState } from "react";
export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w3-bar w3-black w3-right w3-padding" >
        {/* Desktop & Tablet Navigation */}
         <a className="logoname">The Corvette Journal</a> 

        <div className="w3-hide-small w3-hide-medium">
         <div className="color"> 
          <a href="/Stingray" className="w3-bar-item w3-button">  Stingray  </a>
          <a href="/Z06" className="w3-bar-item w3-button">  Z06 </a>
          <a href="/Eray" className="w3-bar-item w3-button"> E-Ray </a>
          <a href="/ZR1" className="w3-bar-item w3-button">   ZR1   </a>
          {/* <a href="/z2026/Page2026" className="w3-bar-item w3-button">   2026     </a> */}
          <a href="/A2026" className="w3-bar-item w3-button">   2026   </a>
            <a href="/More/P1" className="w3-bar-item w3-button">   More   </a>
           </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="w3-bar-item w3-button w3-right w3-hide-large" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Mobile Navigation (Hidden by Default) */}
        <div className={`w3-hide-large w3-black w3-padding w3-bar-block ${isOpen ? "w3-show" : "w3-hide"}`}>

          <a href="/Stingray" className="w3-bar-item w3-button">  Stingray  </a>
          <a href="/Z06" className="w3-bar-item w3-button">  Z06 </a>
          <a href="/E-Ray" className="w3-bar-item w3-button"> E-Ray </a>
          <a href="/ZR1" className="w3-bar-item w3-button">   ZR1   </a>
          <a href="/z2026/Page2026" className="w3-bar-item w3-button">   2026     </a>
          <a href="/More/P1" className="w3-bar-item w3-button">   More   </a>
          <br />
        </div>

      </nav>  </>
  );
};

