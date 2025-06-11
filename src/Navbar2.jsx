import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function Navbar2() {
  return (
    <navZ className="navbarMore">
      <p className="navbar-listMore">
    
          <Link to="/More2">Clubs</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Drive">Roads</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Quiz">Quiz</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/List">List</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Calendar">Calendar</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Weather">Weather</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Concept">C9 Concept</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Future">Software</Link>
      </p>
    
    </navZ>
  );
}
