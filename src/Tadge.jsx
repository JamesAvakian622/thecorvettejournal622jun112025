import React from "react";
import "./styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZR1 from "./ZR1/SidebarZR1";
import SidebarZR1B from "./ZR1/SidebarZR1B";
import Navbar4 from "./Navbar4";
import ReactPlayer from "react-player";
export default function Tadge() {



  const sections = [
    { title: "  Tadge Juechter        ", text: "  the legendary Corvette chief engineer, retired after an incredible 18-year tenure leading the Corvette program and over three decades shaping the C5 through C8 generations. His work was instrumental in making Corvette the quintessential American sports car, balancing performance, engineering, and affordability.     " },
    { title: "    ", text: " One of his biggest achievements was convincing GM to adopt a mid-engine layout for the C8 Corvette, a move that faced skepticism but ultimately elevated the car to supercar status. He described his career as a Golden Era for Corvette, where he and his team pushed the brand to new heights.     " },

    {
      title: "  ",
      text: "  Juechter also spoke out about GM's recent decision to part ways with long-time Corvette Product Manager Harlan Charles, praising Charles for his ability to translate customer input into successful product plans.   ",
    }
    
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
            <Link to="/Stingray">The Corvette, Tadge Juechter, Chief Engineer, 2006-2024, Retired</Link>
          </h1>
          
          {/* <Navbar4 /> */}

          <br />
        

          <dir className="image-row">
         

            <div className="responsive">
              <div className="gallery">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Tadge.png"
                >
                  <img
                    src="/Tadge.png"
                    alt="Cinque Terre"
                    width={600}
                    height={600}
                  />
                </a>
                <div className="desc1">Tadge Juecther, Chief Engineer )</div>
              </div>
            </div>
          </dir>


  <h1> Still Photo, Movies, and discussion </h1>

      


          <div className="content-container">
            {sections.map((section, index) => (
              <div key={index} className="content-section">
                <h2 className="content-title">{section.title}</h2>
                <p className="content-text">{section.text}</p>
              </div>
            ))}
          </div>

    
        
<div className="center">
  <p>  Click on The YouTube Logo For Full Screen</p>
</div>

      <p>
          <b>   2024 Corvette Hall of Fame, GM/Chevrolet Category: Tadge Juechter   </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=3jW2eOU0ZNo"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


<br /> <br />

      <p>
          <b>     2024 Corvette Hall of Fame, Corvette Racing Category: Oliver Gavin & Jan Magnussen   </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=g1oLNKi0B2Q"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.newsweek.com/2025/05/02/stuff-childhood-dreams-his-work-disrupted-american-sports-car-icon-2056515.html"      >
            NEWSWEEK MAGAZINE, "The Stuff of Childhood Dreams, His Work Disrupted an American Sports Car Icon"
            </Link>    
         

       


          </div>    <Footer />
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
