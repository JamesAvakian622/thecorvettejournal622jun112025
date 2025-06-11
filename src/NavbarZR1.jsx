import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function NavbarZR1() {
  return (
      
    
      <nav className="navbar-listMore">
             <p className="navbar-itemMore">
          <Link to="/ZR1C3">C3 Corvette ZR1 </Link>
      </p>

       <p className="navbar-itemMore">
          <Link to="/ZR1C4">C4 Corvette ZR1 </Link>
      </p>


        <p className="navbar-itemMore">
          <Link to="/ZR1C6">C6 Corvette ZR1 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/ZR1C7"> C7 Corvette ZR1</Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/ZR1C8"> C8 Corvette ZR1 </Link>
     
       </p>
    
  </nav> 
  );
}
