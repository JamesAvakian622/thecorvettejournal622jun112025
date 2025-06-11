import React from "react";
import "./styles/Navbar.css"; // External styling (optional)
import { Link } from "react-router-dom";
export default function Navbar5b() {
  return (
 
      <nav className="navbar-listMore">
       
        <p className="navbar-itemMore">
          <Link to="/C6">  C6 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C7">  C7 </Link>
      </p>
        <p className="navbar-itemMore">
          <Link to="/C8">  C8 </Link>
      </p>
    
</nav>
  );
}
