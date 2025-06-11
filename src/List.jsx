import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import NavbarMore from "./NavbarMore";
import CarouselZR1 from "./ZR1/CarouselZR1";
import SidebarZR1 from "./ZR1/SidebarZR1";
import Footer from "./Footer";
import "./List.css";
export default function List() {
  const [items, setItems] = useState([]); // State to hold list items
  const [newItem, setNewItem] = useState(""); // State for input field
  const componentRef = useRef();

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(""); // Clear the input field
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Item List", 10, 10); // Title
    items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item}`, 10, 20 + index * 10); // Add list items to PDF
    });
    doc.save("list.pdf");
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
      </div>
      <div className="col-3 ">
        <SidebarZR1 />
      </div>
      <div className="col-6">
        <NavbarMore />
        <h1 className="center">Your Corvette Buying Sheet</h1>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter new item"
            style={{
              padding: "10px",
              marginRight: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleAddItem}
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Item
          </button>
        </div>
        <div ref={componentRef}>
          <h2>Item List</h2>
          
            {items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
        
        </div>
        <button
          onClick={handleDownloadPDF}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download PDF
        </button>
        <button
          onClick={handlePrint}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#FF5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <div className="listcolors ">
            <p>
              <b>The 2025 Corvette Models and Option Lineup Print List</b>
            </p>
            <p>
              <b>Corvette Stingray</b>
            </p>
            <p>
              <b>Exterior Colors: </b> Arctic White, Black, Torch Red, Rapid
              Blue, Sebring Orange Tintcoat, and more.
            </p>
            <p>
              <b>Interior Trim Levels: </b> 1LT, 2LT, 3LT.
            </p>
            <p>
              <b>Interior Colors: </b> Jet Black, Sky Cool Gray, Adrenaline Red,
              Natural, and Habanero.
            </p>
            <p>
              <b>Options: </b> Z51 Performance Package, Magnetic Ride Control,
              and Velocity Yellow brake calipers.
            </p>
            <p>
              <b>Corvette Z06 </b>
            </p>
            <p>
              <b>Exterior Colors: </b> Competition Yellow Tintcoat Metallic,
              Hysteria Purple Metallic, Red Mist Metallic Tintcoat, and others.
            </p>
            <p>
              <b>Trim Levels: </b> 1LZ, 2LZ, 3LZ.
            </p>
            <p>
              <b>Interior Colors: </b> Tension Blue/Twilight Blue, Artemis,
              Adrenaline Red Dipped, and Natural Dipped.
            </p>
            <p>
              <b>Options:</b> Carbon fiber aero package, 10-spoke wheels, and
              premium interior upgrades.
            </p>
            <p>
              <b>Corvette E-Ray </b>
            </p>
            <p>
              <b>Exterior Colors: </b> Riptide Blue Metallic, Sea Wolf Gray
              Tricoat, Sebring Orange Tintcoat, and more.
            </p>
            <p>
              <b>Trim Levels: </b> 1LZ, 2LZ, 3LZ.Trim Levels: 1LZ, 2LZ, 3LZ.
            </p>
            <p>
              <b>Interior Colors: </b> Jet Black, Sky Cool Gray, Adrenaline Red,
              and Artemis.
            </p>
            <p>
              <b>Intrior: </b> Stealth
            </p>
            <p>
              <b>Options:</b> Hybrid powertrain, all-wheel drive, and advanced
              driver assistance systems.
            </p>
            <p>
              <b> Corvette ZR1 </b>
            </p>
            <p>
              <b>Exterior Colors: </b>Arctic White, Black, Competition Yellow
              Tintcoat Metallic, and others.
            </p>
            <p>
              <b>Trim Levels: </b>1LZ, 2LZ, 3LZ.
            </p>
            <p>
              <b>Interior Colors: </b> Habanero, Jet Black, Natural, and
              Adrenaline Red.
            </p>
            <p>
              <b>Options: </b> High-performance engine, redesigned spoiler, and
              exclusive ZR1 badging.
            </p>
            <p>
              Each model offers a unique blend of performance, luxury, and
              customization.
            </p>
          </div>
        </button>
        <Footer />
      </div>
    </>
  );
}
