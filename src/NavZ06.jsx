import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";
export default function NavZ06() {
  return (
 
      <nav className="navbar-listMore">
      
        <p className="navbar-itemMore">
          <Link to="/C1"> C1 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C2">  C2 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C3">  C3 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C4">  C4 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C5">  C5 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C6">  C6 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C7">  C7 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/Stingray">  C8 </Link>
      </p>
    
</nav>
  );
}
