import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "../Stingray/CarouselSting";
// //import ThemeSwitcher from "./ThemeSwitcher";
// import OnPageSting from "../Stingray/OnPageSting";
// import CarouselFlag from "../Stingray/CarouselFlag";
// import SidebarSting from "../Stingray/SidebarSting1";
// import SidebarStingB from "../Stingray/SidebarStingB";
import NavbarVideos from "../NavbarVideos";
export default function PageStingHard() {
  const sections = [
    { title: "Geographic Client Trends", 
      text:  "   Corvette advertising has historically been strongest in regions with a high concentration of sports car enthusiasts and affluent buyers. Some key locations include:  " },

    { title: " ", text: "  Southern California – A hub for car culture, with a strong presence of Corvette clubs and events." },
    {
      title: "   ",
      text: "    Southern California – A hub for car culture, with a strong presence of Corvette clubs and events.    ",
    },
    {
      title: " ",
      text: "   Southern California – A hub for car culture, with a strong presence of Corvette clubs and events. ",
    },
    {
      title: " ",
      text: "    Florida – Known for its luxury car market and high-performance vehicle enthusiasts.",
    },
    {
      title: "  ",
      text: "    Texas – A state with a deep appreciation for American muscle cars and performance vehicles.",
    },
    {
      title: " ",
      text: "    Midwest (Michigan, Ohio, Indiana) – Home to GM headquarters and a strong automotive heritage.  ",
    },
    {
      title: " ",
      text: "   Northeast (New York, Pennsylvania, New Jersey) – A mix of urban and suburban buyers with a passion for high-end vehicles.     ",
    },
    {
      title: "  ",
      text: "      Historically, Corvette advertising has evolved from print ads to digital campaigns, focusing on performance, heritage, and exclusivit.  ",
    },
    {
      title: "  ",
      text: "      The Corvette Journal and related websites ar3e relatively new and assist in developing interest and enthusiasm everywhere.  ",
    },
  ];


  return (

      <><div className="rowPage">
      <CarouselSting />

    </div>
    
    
    <div className="center">
    
< NavbarVideos />

    
        <h1>
          <b>  Geographic     Corvette  Customer   </b>
          <b>     Trends in United States         </b>

        </h1>
        <br />


        <div className="content-container">
          {sections.map((section, index) => (
            <div key={index} className="content-section">
           <b>   <h2 className="content-title"><b>   {section.title}</b></h2></b> 
              <p className="content-text">{section.text}</p>
            </div>
          ))}
        </div>


        <h3>
          <b> References </b>
        </h3>
        {/*   <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
      Reference: 1. Hagerty, The LT6 A Landmark Achievement
    </Link>
    <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
      2. Vette Vues Magazine
    </Link> */}

      </div><Footer /></>

         
  
  );
}
