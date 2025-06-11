import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./More.css";
import NavbarMore from "./NavbarMore";
import Navbar3 from "./Navbar3";
import CarouselZR1 from "./ZR1/CarouselZR1";
import SidebarZR1 from "./ZR1/SidebarZR1";
import Footer from "./Footer";
import CarouselFlag from "./ZR1/CarouselFlag";
import OnPageZR1 from "./ZR1/OnPageZR1";
import SidebarZR1B from "./ZR1/SidebarZR1B";

export default function More() {
  // const cards = [
  //   [
  //     { url: "", text: "Corvette Clubs" },
  //     { url: ".", text: "." },
  //     { url: "https://example1.com", text: "Example Link 1" },
  //     { url: "https://example2.com", text: "Example Link 2" },
  //     { url: "https://example3.com", text: "Example Link 3" },
  //     { url: "https://example4.com", text: "Example Link 4" },
  //     { url: "https://example5.com", text: "Example Link 5" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Magazines" },
  //     { url: ".", text: "." },
  //     { url: "https://example6.com", text: "Example Link 6" },
  //     { url: "https://example7.com", text: "Example Link 7" },
  //     { url: "https://example8.com", text: "Example Link 8" },
  //     { url: "https://example9.com", text: "Example Link 9" },
  //     { url: "https://example10.com", text: "Example Link 10" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Museums" },
  //     { url: ".", text: "." },
  //     { url: "https://example11.com", text: "MCN" },
  //     { url: "https://example12.com", text: "Peterson Automobile Museum" },
  //     { url: "https://example13.com", text: "Example Link 13" },
  //     { url: "https://example14.com", text: "Example Link 14" },
  //     { url: "https://example15.com", text: "Example Link 15" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Clubs" },
  //     { url: ".", text: "." },
  //     { url: "https://example16.com", text: "Example Link 16" },
  //     { url: "https://example17.com", text: "Example Link 17" },
  //     { url: "https://example18.com", text: "Example Link 18" },
  //     { url: "https://example19.com", text: "Example Link 19" },
  //     { url: "https://example20.com", text: "Example Link 20" }
  //   ],
  //   [
  //     { url: "", text: "Top Tem Percent National Corvette Dealers" },
  //     { url: ".", text: "." },
  //     { url: "https://example21.com", text: "Example Link 21" },
  //     { url: "https://example22.com", text: "Example Link 22" },
  //     { url: "https://example23.com", text: "Example Link 23" },
  //     { url: "https://example24.com", text: "Example Link 24" },
  //     { url: "https://example25.com", text: "Example Link 25" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Custom Parts" },
  //     { url: ".", text: "." },
  //     { url: "https://example26.com", text: "Paragon Performance" },
  //     { url: "https://example27.com", text: "ACS" },
  //     { url: "https://example28.com", text: "Gravity Battery" },
  //     { url: "https://example29.com", text: "ForgedLite Wheels" },
  //     { url: "https://example30.com", text: "WheelCraft Wheels" }
  //   ],
  //   [
  //     { url: "", text: "Corvette C1 to C8 History" },
  //     { url: ".", text: "." },
  //     { url: "https://example31.com", text: "Example Link 31" },
  //     { url: "https://example32.com", text: "Example Link 32" },
  //     { url: "https://example33.com", text: "Example Link 33" },
  //     { url: "https://example34.com", text: "Example Link 34" },
  //     { url: "https://example35.com", text: "Example Link 35" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Driving Schools and Tracks" },
  //     { url: ".", text: "." },
  //     { url: "https://example36.com", text: "Example Link 36" },
  //     { url: "https://example37.com", text: "Example Link 37" },
  //     { url: "https://example38.com", text: "Example Link 38" },
  //     { url: "https://example39.com", text: "Example Link 39" },
  //     { url: "https://example40.com", text: "Example Link 40" }
  //   ],
  //   [{ url: "", text: "Chevy .Com Corvette Web Pages" },
  //   { url: ".", text: "." },
  //   { url: "https://example41.com", text: "2025 Corvette Stingray" },
  //   { url: "https://example42.com", text: "2025 Corvette Z06" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [{ url: "", text: "Chevrolet Legacy Chief Engineers" },
  //   { url: ".", text: "." },
  //   { url: "https://example41.com", text: "Zora Arkus Cuntov" },
  //   { url: "https://example42.com", text: "Tadge Juecther" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [
  //     { url: "", text: "Chevrolet Corvette and Cadillac Racing" },
  //     { url: ".", text: "." },
  //     { url: "https://example31.com", text: "Example Link 31" },
  //     { url: "https://example32.com", text: "Example Link 32" },
  //     { url: "https://example33.com", text: "Example Link 33" },
  //     { url: "https://example34.com", text: "Example Link 34" },
  //     { url: "https://example35.com", text: "Example Link 35" }
  //   ],
  //   [
  //     { url: "", text: "Corvette LT Engines" },
  //     { url: ".", text: "." },
  //     { url: "https://example36.com", text: "Example Link 36" },
  //     { url: "https://example37.com", text: "Example Link 37" },
  //     { url: "https://example38.com", text: "Example Link 38" },
  //     { url: "https://example39.com", text: "Example Link 39" },
  //     { url: "https://example40.com", text: "Example Link 40" }
  //   ],
  //   [{ url: "", text: " Engine Dynamics " },
  //   { url: ".", text: "." },
  //   { url: "https://example41.com", text: "Engine Masters" },
  //   { url: "https://example42.com", text: "Iskandarian Cams" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [
  //     { url: "", text: "Auto Racing, F1 " },
  //     { url: ".", text: "." },
  //     { url: "https://example31.com", text: "Example Link 31" },
  //     { url: "https://example32.com", text: "Example Link 32" },
  //     { url: "https://example33.com", text: "Example Link 33" },
  //     { url: "https://example34.com", text: "Example Link 34" },
  //     { url: "https://example35.com", text: "Example Link 35" }
  //   ],
  //   [
  //     { url: "", text: "Auto Racing Nascar" },
  //     { url: ".", text: "." },
  //     { url: "https://example36.com", text: "Rickard Perry" },
  //     { url: "https://example37.com", text: "Mario Andretti" },
  //     { url: "https://example38.com", text: "Jessee Iwuji" },
  //     { url: "https://example39.com", text: "Example Link 39" },
  //     { url: "https://example40.com", text: "Example Link 40" }
  //   ],
  //   [{ url: "", text: " DragStipe Racing" },
  //   { url: ".", text: "." },
  //   { url: "https://example41.com", text: "Goodyear" },
  //   { url: "https://example42.com", text: "Hoosier" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [{ url: "", text: " Funny Car DragStipe Racing" },
  //   { url: ".", text: "." },
  //   { url: "https://example41.com", text: "Goodyear" },
  //   { url: "https://example42.com", text: "Hoosier" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [
  //     { url: "", text: "Corvette Rivals - Ferarri" },
  //     { url: ".", text: "." },
  //     { url: "https://www.youtube.com/watch?v=XpxS7lOxAjQm", text: "Harrys Garage - Ferrari Testarossa" },
  //     { url: "https://www.youtube.com/watch?v=vLSSp_evDnQ", text: "Ford GT40: The Fararri Terminator Ford vs Ferrari" },
  //     { url: "https://www.youtube.com/watch?v=24Vl-Z13pXo", text: "Bugatti V16 Tourbillon" },
  //     { url: "https://www.youtube.com/watch?v=RuaJFeRHSa0", text: "2024 Porsche 718" },
  //     { url: " https://www.youtube.com/watch?v=jNZHoo2D_WI  ", text: "Aston Martin Valour" }
  //   ],
  //   [
  //     { url: "", text: " DragStipe Racing" },
  //     { url: ".", text: "." },
  //     { url: "https://www.youtube.com/watch?v=ZblO93J2DwQ", text: "Dubai Million Dollar Supercars" },
  //     { url: "https://example42.com", text: "Hoosier" },
  //     { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //     { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //     { url: "https://example45.com", text: "" }
  //   ],
  //   [
  //     { url: "", text: " Corvette Customs" },
  //     { url: ".", text: "." },
  //     { url: "https://www.youtube.com/watch?v=Ztk-vw_RMvk", text: "Boost DiStict E-Ray" },
  //     { url: "https://example42.com", text: "Hoosier" },
  //     { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //     { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //     { url: "https://example45.com", text: "" }
  //   ],

  //   [
  //     { url: "", text: "Favorrite Custom Products" },
  //     { url: ".", text: "." },
  //     { url: "https://www.youtube.com/watch?v=XpxS7lOxAjQm", text: "Harrys Garage - Ferrari Testarossa" },
  //     { url: "https://www.youtube.com/watch?v=vLSSp_evDnQ", text: "Ford GT40: The Fararri Terminator Ford vs Ferrari" },
  //     { url: "https://www.youtube.com/watch?v=24Vl-Z13pXo", text: "Bugatti V16 Tourbillon" },
  //     { url: "https://www.youtube.com/watch?v=RuaJFeRHSa0", text: "2024 Porsche 718" },
  //     { url: " https://www.youtube.com/watch?v=jNZHoo2D_WI  ", text: "Aston Martin Valour" }
  //   ],
  //   [{ url: "", text: " DragStipe Racing" },
  //   { url: ".", text: "." },
  //   { url: "https://www.youtube.com/watch?v=ZblO93J2DwQ", text: "Dubai Million Dollar Supercars" },
  //   { url: "https://example42.com", text: "Hoosier" },
  //   { url: "https://example43.com", text: "2025 Corvette E-Ray" },
  //   { url: "https://example44.com", text: "2025 Corvette ZR1" },
  //   { url: "https://example45.com", text: "" }
  //   ],
  //   [{ url: "", text: "   Products On My Cars    " },
  //   { url: "    https://acscomposite.com/      ", text: "    ACS Composite:  Splitters, Side Skirts, Spoilers, Jacking Pucks      " },
  //   { url: "     https://awe-tuning.com/     ", text: "    AWE Tuning Touring Exhaust:    " },
  //   { url: "     https://wheeldesigners.com/    ", text: "  ForgedLite Wheels:       " },
  //   { url: "     https://ctbrakes.com/   ", text: "     CarboTech Performance Brake Pads      " },
  //   { url: "         ", text: "  Anti-gravity Battery      " },
  //   { url: "    https://www.r1concepts.com/    ", text: "    R1 Concepts Performance Brake Products       " },
  //   { url: "    Amador Metal Designz Engine Covers    ", text: "      https://www.amadormetaldesignz.com/     " }

  //   ],

  //   [{ url: "", text: "  Products On My Cars  " },
  //   { url: "  https://getundrdog.com/      ", text: "    UndrDog Cleaning and Coating Products:       " },
  //   { url: "   https://getundrdog.com/collections/       ", text: "      UndrDog Pro Protective Coatings:   " },
  //   { url: "      https://getundrdog.com/products/the-pad    ", text: "     Coating Applicator Pads:    " },
  //   { url: "   https://getundrdog.com/products/soap      ", text: "      UndrDog Soap:       " },
  //   { url: "         ", text: "         " },
  //   { url: "        ", text: "           " },
  //   { url: "        ", text: "           " }

  //   ]
  // ];

  {
    /* <div className="center">
        <h2> Corvette Clubs and Products Websites</h2>
        <h3> Brought to you by, Checkered-Flag.com eCommerce Items </h3>
        <div className="oneline">
          <Link to="/More">More A</Link>
          <Link to="/MoreA">More B</Link>
        </div>
      </div> */
  }

  const items = [
    {
      id: 1,
      title: "ReactJS ZZZZZZOfficial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      url: "https://reactjs.org",
    },
    {
      id: 2,
      title: "MDN Web Docs",
      image: "https://developer.mozilla.org/favicon.ico",
      url: "https://developer.mozilla.org",
    },
    {
      id: 3,
      title: "W3Schools",
      image: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
      url: "https://www.w3schools.com",
    },
  ];

  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
        <div className="col-3 ">
          <SidebarZR1 />
        </div>

        <div className="col-6">
          <h1>
            <b> The 2025 Chevrolet Corvette ZR1 </b>
          </h1>
          <NavbarMore />

          {items.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <h2 className="card-title">{item.title}</h2>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit Website
              </a>
            </div>
          ))}
          <div className="references">
            <h1>References</h1>
            <h3>
              <a Link to="https://en.wikipedia.org/wiki/Chevrolet_Corvette_ZR1">
                Corvette ZR1
              </a>
            </h3>
          </div>
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZR1 />
          <SidebarZR1B />
        </div>
      </div>
    </>
  );
}
