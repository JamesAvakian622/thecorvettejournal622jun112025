import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function Navbar4() {
  return (
    <navZ className="navbarMore">
      <div className="navbar-listMoreZ">
        <div className="navbar-itemMore">
          <Link to="/Stingray/StingrayLegacy">Stingray Legacy</Link>
        </div>
        <div className="navbar-itemMore">
          <Link to="/Z06/Z06Legacy">Z06 Legacy</Link>
        </div>
        <div className="navbar-itemMore">
          <Link to="/Eray/ErayLegacy">Eray Legacy</Link>
        </div>
        <div className="navbar-itemMore">
          <Link to="/ZR1/ZR1Legacy">ZR1 Legacy</Link>
        </div>
      </div>
    </navZ>
  );
}
