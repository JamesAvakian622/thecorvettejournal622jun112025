import React from "react";
import "../styles/Page.css";
import "../styles/Rivals.css";
import "../styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./OnPageZ06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
import data from "../Json/Z06Rivals.json"; // Import the JSON file
export default function PageZ06Rivals({ title, image, description }) {
  const sections = [
    { image1: "/zrz.png", title: " The Corvette Z06 has some fierce competitors :", text: " The LT6 is a 5.5-liter, naturally-aspirated, flat-plane V8 engine that debuted in the 2023 Chevrolet Corvette Z06, known for its high-revving nature and high power output, making it the most powerful naturally-aspirated production V8 engine of all time. " },
    { image1: "/zrz.png", title: " Porsche Cayman GT4 RS:   ", text: "  Known for its nimble handling and track-oriented design, it offers a lighter, more agile feel compared to the Z06. However, the Z06 outpaces it on the track with its raw power.   " },
    { image1: "/zrz.png", title: " Lotus Emira:     ", text: "While the Emira boasts a sleek, exotic design, the Z06's flat-plane crank V8 engine delivers a more aggressive and exotic sound.  " },
    { image1: "/zrz.png", title: "   Ferrari F8 Tributo:      ", text: "The Z06 matches the F8 in many performance metrics but does so at a fraction of the cost, making it a value-packed alternative." },
    { image1: "/zrz.png", title: "  Lamborghini Huracán EVO:    :", text: " Lamborghini Huracán EVO: Another rival in terms of performance and style, though the Z06 often stands out for its affordability and track capabilities." },
    { image1: "/zrz.png", title: " Nissan GT-R  :", text: "Known for its all-wheel-drive system and acceleration, the GT-R offers a different driving experience compared to the rear-wheel-drive Z06. The GT-R begins at roughly $116,040, placing it closer to the Z06's price range   " },
    { image1: "", title: " :", text: "  Each of these cars brings its own Stengths to the table, but the Z06's combination of performance, price, and iconic design makes it a standout in its class. Which of these rivals do you think gives the Z06 the toughest competition?  " },
  ];


  const Card1 = ({ title, image, description }) => {
    return (
      <div className="card-rivals">

        <div className="responsive">
          <div className="content-container">
            <a target="_blank" rel="noopener noreferrer" href={image}>
              <img src={image} alt="Cinque Terre" width={1600} height={1400} />
            </a>
            <div className="desc">Corvette Z06, Competition Yellow</div>
          </div>
        </div>

        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    );
  };


  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>  <b>   2025 Corvette Z06 Rivals   
                </b>   
           </h1>
     

        <div className="main">
          {data.map((item, index) => (
            <div className="card-rivals">
            <Card1
              key={index}
              title={item.title}
              image={item.image}
              description={item.description} />
              </div>
          ))}
        </div>
      </div>
  

      <div>
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          "> Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
        <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/"> 2. Vette Vues Magazine</Link>
        <Footer />
      </div>
 </div>


      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPageZ06 />
        <SidebarZ06B />
      </div>

    </>


  );
}
