import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function Navbar3() {
  return (
    <navZ className="navbarMore">
   
        <p className="navbar-itemMore">
          <Link to="/More1">Clubs</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Bio">People</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Security">Security</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Customize">Customize</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/RonFellows">Schools</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Tracks">Tracks</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C1C8">Legacy</Link>
      </p>
    
    </navZ>
  );
}
