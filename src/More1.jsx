// import React, { useState } from 'react';
// import Link from "react-router-dom";
// import "./More.css";
// import Navbar2 from "./Navbar2";
// import Navbar3 from "./Navbar3";
// import NavbarMore from "./NavbarMore";
// export default function More1() {
//   // Array of 45 links grouped into nine cards

//   const [currentLink, setCurrentLink] = useState('about:blank');

//   const handleLinkClick = (link) => {
//     setCurrentLink(link);
//   };

//   const cards = [
//     [
//       { url: "", text: "Corvette " },
//       { url: ".", text: "." },
//       { url: "/C1C8", text: "C1 C8" },
//       { url: "/Concept", text: "Concept C9" },
//       { url: "/C8Hist", text: "Vette Hist " },
//       { url: "/C8histb", text: "Vete Hist B" },
//       { url: "https://example5.com", text: "Example Link 5" },
//     ],
//     [
//       { url: "", text: "Corvette " },
//       { url: ".", text: "." },
//       { url: "https://example6.com", text: "Example Link 6" },
//       { url: "https://example7.com", text: "Example Link 7" },
//       { url: "https://example8.com", text: "Example Link 8" },
//       { url: "https://example9.com", text: "Example Link 9" },
//       { url: "https://example10.com", text: "Example Link 10" },
//     ],
//     [
//       { url: "", text: "Corvette " },
//       { url: ".", text: "." },
//       { url: "https://example11.com", text: "MCN" },
//       { url: "https://example12.com", text: "Peterson Automobile Museum" },
//       { url: "https://example13.com", text: "Example Link 13" },
//       { url: "https://example14.com", text: "Example Link 14" },
//       { url: "https://example15.com", text: "Example Link 15" },
//     ],

//     [
//       { url: "", text: "Corvette Clubs" },
//       { url: ".", text: "." },
//       { url: "https://example1.com", text: "Example Link 1" },
//       { url: "https://example2.com", text: "Example Link 2" },
//       { url: "https://example3.com", text: "Example Link 3" },
//       { url: "https://example4.com", text: "Example Link 4" },
//       { url: "https://example5.com", text: "Example Link 5" },
//     ],

//     [
//       { url: "", text: "Corvette Events" },
//       { url: ".", text: "." },
//       { url: "https://example1.com", text: "National Corvette Museum Bash" },

//       {
//         url: "https://www.youtube.com/watch?v=3eaVND45xrM",
//         text: "National Corvette Museum Bash 2024",
//       },

//       {
//         url: "https://www.youtube.com/watch?v=ZjRJ5nrTxQ8",
//         text: "Corvette Museum Bash, 2024",
//       },

//       { url: "https://example3.com", text: "Corvette Invasion" },

//       {
//         url: "https://www.youtube.com/watch?v=SPuAvKq7L0c",
//         text: " Tadge Juecther, at Bash 2024  ",
//       },
//     ],

//     [
//       { url: "", text: "Corvette Magazines" },
//       { url: ".", text: "." },
//       { url: "https://example6.com", text: "Example Link 6" },
//       { url: "https://example7.com", text: "Example Link 7" },
//       { url: "https://example8.com", text: "Example Link 8" },
//       { url: "https://example9.com", text: "Example Link 9" },
//       { url: "https://example10.com", text: "Example Link 10" },
//     ],
//     [
//       { url: "", text: "Corvette Museums" },
//       { url: ".", text: "." },
//       { url: "https://example11.com", text: "MCN" },
//       { url: "https://example12.com", text: "Peterson Automobile Museum" },
//       { url: "https://example13.com", text: "Example Link 13" },
//       { url: "https://example14.com", text: "Example Link 14" },
//       { url: "https://example15.com", text: "Example Link 15" },
//     ],
//     [
//       { url: "", text: "Corvette Clubs" },
//       { url: ".", text: "." },
//       { url: "https://example16.com", text: "Example Link 16" },
//       { url: "https://example17.com", text: "Example Link 17" },
//       { url: "https://example18.com", text: "Example Link 18" },
//       { url: "https://example19.com", text: "Example Link 19" },
//       { url: "https://example20.com", text: "Example Link 20" },
//     ],
//     [
//       { url: "", text: "Top Tem Percent National Corvette Dealers" },
//       { url: ".", text: "." },
//       { url: "https://example21.com", text: "Example Link 21" },
//       { url: "https://example22.com", text: "Example Link 22" },
//       { url: "https://example23.com", text: "Example Link 23" },
//       { url: "https://example24.com", text: "Example Link 24" },
//       { url: "https://example25.com", text: "Example Link 25" },
//     ],
//     [
//       { url: "", text: "Corvette Custom Parts" },
//       { url: ".", text: "." },
//       { url: "https://example26.com", text: "Paragon Performance" },
//       { url: "https://example27.com", text: "ACS" },
//       { url: "https://example28.com", text: "Gravity Battery" },
//       { url: "https://example29.com", text: "ForgedLite Wheels" },
//       { url: "https://example30.com", text: "WheelCraft Wheels" },
//     ],
//     [
//       { url: "", text: "Corvette C1 to C8 History" },
//       { url: ".", text: "." },
//       { url: "https://example31.com", text: "Example Link 31" },
//       { url: "https://example32.com", text: "Example Link 32" },
//       { url: "https://example33.com", text: "Example Link 33" },
//       { url: "https://example34.com", text: "Example Link 34" },
//       { url: "https://example35.com", text: "Example Link 35" },
//     ],
//     [
//       { url: "", text: "Corvette Driving Schools and Tracks" },
//       { url: ".", text: "." },
//       { url: "https://example36.com", text: "Example Link 36" },
//       { url: "https://example37.com", text: "Example Link 37" },
//       { url: "https://example38.com", text: "Example Link 38" },
//       { url: "https://example39.com", text: "Example Link 39" },
//       { url: "https://example40.com", text: "Example Link 40" },
//     ],
//     [
//       { url: "", text: "Chevy .Com Corvette Web Pages" },
//       { url: ".", text: "." },
//       { url: "https://example41.com", text: "2025 Corvette Stingray" },
//       { url: "https://example42.com", text: "2025 Corvette Z06" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: "Chevrolet Legacy Chief Engineers" },
//       { url: ".", text: "." },
//       { url: "https://example41.com", text: "Zora Arkus Cuntov" },
//       { url: "https://example42.com", text: "Tadge Juecther" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: "Chevrolet Corvette and Cadillac Racing" },
//       { url: ".", text: "." },
//       { url: "https://example31.com", text: "Example Link 31" },
//       { url: "https://example32.com", text: "Example Link 32" },
//       { url: "https://example33.com", text: "Example Link 33" },
//       { url: "https://example34.com", text: "Example Link 34" },
//       { url: "https://example35.com", text: "Example Link 35" },
//     ],
//     [
//       { url: "", text: "Corvette LT Engines" },
//       { url: ".", text: "." },
//       { url: "https://example36.com", text: "Example Link 36" },
//       { url: "https://example37.com", text: "Example Link 37" },
//       { url: "https://example38.com", text: "Example Link 38" },
//       { url: "https://example39.com", text: "Example Link 39" },
//       { url: "https://example40.com", text: "Example Link 40" },
//     ],
//     [
//       { url: "", text: " Engine Dynamics " },
//       { url: ".", text: "." },
//       { url: "https://example41.com", text: "Engine Masters" },
//       { url: "https://example42.com", text: "Iskandarian Cams" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: "Auto Racing, F1 " },
//       { url: ".", text: "." },
//       { url: "https://example31.com", text: "Example Link 31" },
//       { url: "https://example32.com", text: "Example Link 32" },
//       { url: "https://example33.com", text: "Example Link 33" },
//       { url: "https://example34.com", text: "Example Link 34" },
//       { url: "https://example35.com", text: "Example Link 35" },
//     ],
//     [
//       { url: "", text: "Auto Racing Nascar" },
//       { url: ".", text: "." },
//       { url: "https://example36.com", text: "Rickard Perry" },
//       { url: "https://example37.com", text: "Mario Andretti" },
//       { url: "https://example38.com", text: "Jessee Iwuji" },
//       { url: "https://example39.com", text: "Example Link 39" },
//       { url: "https://example40.com", text: "Example Link 40" },
//     ],
//     [
//       { url: "", text: " DragStipe Racing" },
//       { url: ".", text: "." },
//       { url: "https://example41.com", text: "Goodyear" },
//       { url: "https://example42.com", text: "Hoosier" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: " Funny Car DragStipe Racing" },
//       { url: ".", text: "." },
//       { url: "https://example41.com", text: "Goodyear" },
//       { url: "https://example42.com", text: "Hoosier" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: "Corvette Rivals - Ferarri" },
//       { url: ".", text: "." },
//       {
//         url: "https://www.youtube.com/watch?v=XpxS7lOxAjQm",
//         text: "Harrys Garage - Ferrari Testarossa",
//       },
//       {
//         url: "https://www.youtube.com/watch?v=vLSSp_evDnQ",
//         text: "Ford GT40: The Fararri Terminator Ford vs Ferrari",
//       },
//       {
//         url: "https://www.youtube.com/watch?v=24Vl-Z13pXo",
//         text: "Bugatti V16 Tourbillon",
//       },
//       {
//         url: "https://www.youtube.com/watch?v=RuaJFeRHSa0",
//         text: "2024 Porsche 718",
//       },
//       {
//         url: " https://www.youtube.com/watch?v=jNZHoo2D_WI  ",
//         text: "Aston Martin Valour",
//       },
//     ],
//     [
//       { url: "", text: " DragStipe Racing" },
//       { url: ".", text: "." },
//       {
//         url: "https://www.youtube.com/watch?v=ZblO93J2DwQ",
//         text: "Dubai Million Dollar Supercars",
//       },
//       { url: "https://example42.com", text: "Hoosier" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//     [
//       { url: "", text: " Corvette Customs" },
//       { url: ".", text: "." },
//       {
//         url: "https://www.youtube.com/watch?v=Ztk-vw_RMvk",
//         text: "Boost DiStict E-Ray",
//       },
//       { url: "https://example42.com", text: "Hoosier" },
//       { url: "https://example43.com", text: "2025 Corvette E-Ray" },
//       { url: "https://example44.com", text: "2025 Corvette ZR1" },
//       { url: "https://example45.com", text: "" },
//     ],
//   ];

//   // Favorite UndrDog Products
//   // UndrDog Pro Protective Coatings: https://getundrdog.com/collections/pr...
//   // Microfiber Detailing Towels:  https://getundrdog.com/products/the-t...
//   // Coating Applicator Pads:  https://getundrdog.com/products/the-pad
//   // UndrDog Soap:  https://getundrdog.com/products/soap
//   // The Purps:  https://getundrdog.com/products/the-p...
//   // Water Spot Removal:  https://getundrdog.com/products/water...
//   // Quick Detailer:  https://getundrdog.com/products/quick...
//   // Window Cleaner:  https://getundrdog.com/products/windo...

//   // Products On my Cars
//   // ACS Composite:  Splitters, Side Skirts, Spoilers, Jacking Pucks
//   // https://acscomposite.com/
//   // AWE Tuning Touring Exhaust:
//   // https://awe-tuning.com/
//   // ForgedLite Wheels:

//   // https://wheeldesigners.com/
//   // UndrDog Cleaning and Coating Products:
//   // https://getundrdog.com/
//   // CarboTech Performance Brake Pads
//   // https://ctbrakes.com/
//   // R1 Concepts Performance Brake Products
//   // https://www.r1concepts.com/
//   // Amador Metal Designz Engine Covers
//   // https://www.amadormetaldesignz.com/

//   // Simple styles for the grid and cards
//   const styles = {
//     container: {
//       padding: "40px",
//       backgroundColor: "black",
//     },

//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
//       gap: "10px",

//       width: "168%",
//     },
//     card: {
//       border: "1px solid #ccc",
//       borderRadius: "15px", // Rounded corners
//       backgroundColor: "black",
//       padding: "20px",
//       margin: "10px",
//       marginRight: "30%",
//       color: "#fff",
//       fontSize: "16px",
//       backgroundColor: "#000",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       textAlign: "center",
//     },
//     link: {
//       display: "block",
//       color: "#ffffff",
//       textDecoration: "none",
//       margin: "5px 0",
//     },
//   };

//   return (
//     <>
//     <div style={styles.container}>
//       <div className="container1">
//         <div className="center">
//            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "30%" }}>
//           <NavbarMore />

//           <Navbar2 />
//           <h1> Corvette Clubs, Legacy and Event Board</h1>
//         </div>
//        </div>
//      </div>
//      </div>

//     {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
//       {/* Sidebar with links */}
//       <nav style={{ width: '40%', padding: '100px', background: '#000' }}>
//         <p style={{ listStyleType: 'none', padding: 0 }}>

//           <h1>  Youtube Corvette     Clubs     </h1>
//         </p>
//             <button onClick={() => handleLinkClick('https://www.formula1.com/en/racing/2025'    )}>
//           F1 Event Calendar
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://reactjs.org')}>
//               ReactJS
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://developer.mozilla.org')}>
//               MDN
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.w3schools.com')}>
//               W3Schools
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.freecodecamp.org')}>
//               FreeCodeCamp
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.codecademy.com')}>
//               Codecademy
//             </button>
//           </p>

//           <h1>  National Corvette   Events     </h1>
//         <p>
//             <button onClick={() => handleLinkClick('https://example.com')}>
//               Example
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://reactjs.org')}>
//               ReactJS
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://developer.mozilla.org')}>
//               MDN
//             </button>
//         </p>

// <p>   */}

// <button onClick={() => window.open('https://developer.mozilla.org', '_blank')}>
//   MDN2
// </button>
// </p>

//         <p>
//             <button onClick={() => handleLinkClick('https://www.w3schools.com')}>
//               W3Schools
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.freecodecamp.org')}>
//               FreeCodeCamp
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.codecademy.com')}>
//               Codecademy
//             </button>
//           </p>

//           <h1>  Youtube Corvette     Clubs     </h1>
//         <p>
//             <button onClick={() => handleLinkClick('https://example.com')}>
//               Example
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://reactjs.org')}>
//               ReactJS
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://developer.mozilla.org')}>
//               MDN
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.w3schools.com')}>
//               W3Schools
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.freecodecamp.org')}>
//               FreeCodeCamp
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.codecademy.com')}>
//               Codecademy
//             </button>
//           </p>

//           <h1>  Youtube Corvette     Clubs     </h1>
//         <p>
//             <button onClick={() => handleLinkClick('https://example.com')}>
//               Example
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://reactjs.org')}>
//               ReactJS
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://developer.mozilla.org')}>
//               MDN
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.w3schools.com')}>
//               W3Schools
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.freecodecamp.org')}>
//               FreeCodeCamp
//             </button>
//         </p>
//         <p>
//             <button onClick={() => handleLinkClick('https://www.codecademy.com')}>
//               Codecademy
//             </button>
//           </p>

//       </nav>

//       {/* Iframe to display content */}
//       <div style={{ width: '100%', padding: '10px' }}>
//         <iframe
//           src={currentLink}
//           style={{ width: '100%', height: '500vh', border: 'none' }}
//           title="Content Frame"
//         />
//       </div>
//     </div>

// {/* <iframe
//   src="https://developer.mozilla.org"
//   style={{ width: '100%', height: '100vh', border: 'none' }}
//   title="Content Frame"
//   onLoad={(e) => {
//     if (e.target.contentDocument === null) {
//       alert('This site does not allow iframe embedding.');
//     }
//   }}
// ></iframe> */}
// </>
//   );
// }
