import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function Navbar6() {
  return (
      
    
      <nav className="navbar-listMore">
      
        <p className="navbar-itemMore">
          <Link to="/H1">Corvette Stingray </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/H2"> Corvette Z06</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/H3"> Corvette E-Ray </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/H4"> Corvette ZR1 </Link>
      </p>
       
    
  </nav> 
  );
}
