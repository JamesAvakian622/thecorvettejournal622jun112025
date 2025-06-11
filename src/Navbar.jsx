import React from "react";

import "./styles/Navbar.css"; // External styling (optional)
import { Column } from "./FooterStyles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/Stingray" style={styles.link}>
        Stingray
      </Link>
      <Link to="/Z06" style={styles.link}>
        Z06
      </Link>
      <Link to="/Eray" style={styles.link}>
        E-Ray
      </Link>
      <Link to="/ZR1" style={styles.link}>
        ZR1
      </Link>
   <Link to="/More/P1" style={styles.link}>
        Index
      </Link>
      <Link to="/a2026" style={styles.link}>
        2026
      </Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center", // Centers links horizontally
    justifycontent: "space-between",
    gap: "30px", // Space between links
    padding: "0px",
    color: "red",
    backgroundColor: "black", // Background color for nav
    textshadow: "2px 2px 5px rgba(228, 215, 215, 0.5)",
    marginBottom: "-2%",
  },

  a: {
    color: "white",
  },

  link: {
    textDecoration: "none", // Removes underline

    color: "white", // Link text color
    fontSize: "20px",
    fontWeight: "bold",
    width: "120px",
  },
};

export default Navbar;
