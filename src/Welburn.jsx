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
export default function Welburn() {

// Edward Thomas Welburn Jr. (born December 14, 1950) is an automobile designer and former General Motors' Vice President of Global Design, a role in which he served from 2003 to 2016 and the same position that Harley Earl and Bill Mitchell once held. To date, Welburn still holds the distinction of having been the highest-ranking Black-American in the global automotive industry.[1] He has overseen the development of recent GM products, such as the Chevrolet Corvette, Cadillac Escalade and Chevrolet Camaro. Welburn has overseen groundbreaking concepts such as:the Oldsmobile Aerotech, Cadillac Ciel, and Buick Avista.

// Education

// Education
// Welburn studied design, sculpture, and painting at Howard University’s School of Fine Arts in Washington, D.C. He communicated with General Motors during his years at Howard, which led to an internship at GM Design after his junior year in 1971. He earned his bachelor's degree from Howard in 1972 [4] and was invited to return to his alma mater on May 7, 2016 to give a commencement speech to graduates of the College of Fine Arts.

// Career

// Welburn's first peek behind the curtain of General Motors Design was during his college internship in 1971. One year later, he became the first Black American hired to design GM vehicles. He spent his entire design career at GM, where he worked in a variety of studios on a diverse list of vehicles, and he became the highest-ranking Black American in the automotive industry as the first-ever Vice President, GM Global Design[5] — one of seven to have held the position, including Harley Earl, Bill Mitchell, Irv Rybicki, Chuck Jordan, Wayne Cherry, and Michael Simcoe.



// Ed Welburn has had a monumental impact on modern automotive design, particularly through his leadership at General Motors. As the first-ever Vice President of Global Design at GM, he unified all ten of GM’s design centers worldwide, fostering a more cohesive and innovative approach to vehicle aesthetics.

// Some of his most iconic contributions include:
// ..
// Chevrolet Corvette & Camaro – He played a key role in shaping the latest iterations of these legendary models, ensuring they retained their performance-driven, sculpted designs.
// ...
// Cadillac Ciel & Buick Avista – These concept cars showcased futuristic luxury and cutting-edge styling, influencing GM’s design direction.
// ...
// Oldsmobile Aerotech – A record-breaking concept car that reached speeds of 257 mph, demonstrating his commitment to pushing boundaries.
// ...
// Presidential Limousine ("The Beast") – He led the design of the armored limousine used by U.S. Presidents Barack Obama and Donald Trump.
// ...
// Beyond his technical achievements, Welburn broke barriers as the highest-ranking African American in the global automotive industry, inspiring future generations of designers. His legacy continues to shape the way cars blend performance, aesthetics, and innovation.
// Given your passion for Corvette configurations and branding, his work likely resonates with your approach to design! Which of his contributions do you find most intriguing?



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
         
            
            <Link to="  https://www.automotivehalloffame.org/stories/edward-welburn/"> Automotive Hall Of Fame,             "IMPACT OF INNOVATION, EDWARD WELBURN, 1950-PRESENT"          </Link>    
         
<Link to="  https://en.wikipedia.org/wiki/Ed_Welburn">  Wikipedia.com, "Ed Welburn"</Link> 

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
