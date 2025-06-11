import React, { useState } from "react";
import Accord from "./Accord";
export default function Accordion({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.accordion}>
      <div style={styles.header} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div style={styles.content}>
          {links.map((link, index) => (
            <p key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  accordion: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "10px 0",
    overflow: "hidden",
  },
  header: {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  content: {
    padding: "10px",
    backgroundColor: "#fff",
  },
};


