import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./About.css";
import "./styles/photos.css";
import { Link } from "react-router-dom";
import "./styles/Page.css";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";

const About = () => {
  return (
    <>
      <div className="about-page">
        <CarouselZR1 />
        <br />
        <h1>The Corvette Journal</h1>
        <h2>    Mission Statement   </h2>

        {/* <h2><i>The Definitive Corvette Guide"</i></h2> */}


        {/* A business card, from my attorney and registered Nevada Agent  "My Get Out Of Jail Card" */}


        <div className="responsive">
          <div className="gallery100100">
            <a target="_blank" rel="noopener noreferrer" href="/zrz.png">
              <img src="/zrz.png" alt="Cinque Terre" width={300} height={200} />
            </a>
            {/* <div className="desc">The 2025 Corvette ZR1</div> */}
          </div>
        </div>
        <div className="center">
          <h1>
            <b>   About Us      </b>

          </h1>

          <br />

          {/* <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href={me}>
             <img src={me} alt="Cinque Terre" width={"100%"} height={"100%"}
              />
        
          </a>
          <div className="desc">The Author</div>
        </div>
      </div> */}
<div className="center">
  <h1>The Corvette Journal</h1>
  <h2>The Definitive Guide And Aid To New Buyers</h2>
</div>

          <p>
            <b>Optical Automation, LLC </b> is dedicated to innovative information  systems. We use cutting-edge programming to present the latest information.
            Based in Los Angeles, California, we Stive to innovate and Steamline  processes with precision engineering. By creating websites
            and website networks, the internet provides a means for world wide  information  diStubution. The Internet really gets our word and images
            accessible anywhere people want to access it.
          </p><p>
            Our lead developer, a Full Stack Developer also has Apple SwiftUI Software skills. His background education was from California Polytechnic State University, San Luis Obispo,
            California. As an Electronics  Engineering Technolgist.   His    passion for sport cars and the Corvette started from his teen age    years of watching Le Mans, to his ownership of a 1986 Corvette Torch Red Stingray. His
            has a never ending love for the Chevrolet Corvette has never ended. From the seventh generation and now introduction of
            the latest generation Corvettes, his love was instantly re-ignated.
          </p>

          <p>
            Our website is like a "magazine" shows car enthusiast             experiences, factory actions, and unique stock and custom Corvettes.
            The Corvette Experience is special and this includes feelings, driving, and ownership.  The Corvette is a great car and many many people think so. This website gives The Corvette justice, a real website without dumb ads and a serious tone and sexy sleek color
            like the vehicle itself, We show Chevy's Supercar of the Century!
          </p><p>

            From the factory, Corvettes are performance vehicles even the base model Stingray has  500 horsepower. After seventy years of production, the Corvette is a world renowned
            performance car. The seventy years and now eighth generation Corvette shows its grateness.   The vehicle has many first time designs. Many people compare Corvettes to sport cars costing triple.
            This generation of cars has charged the world with sprit and they are taking off!
          </p><p>
            The current line of Corvettes possess top performance components. The Aerodynamic Sleek Body Design, The Engine, Its location, The Dual Clutch Tranmission, Electronic
            Camera Mirror Monitor, Front Lift, Color Leather Interior, Flat-plane crankshaft engine, Electrofication drive trains and recently they have forced induction Bi-turbo to generate more than a thousand horsepower and two
            twenty miles per hour top speed!

            The car has pushed the envelope of of automotilbile technology and their market share shows this.The Corvette has attained a 50% market share of sports cars marketing.  The ZR1 Corvette has really developed a following with
            car enthusiasts, new buyers, and existing Corvette car owners. This new vehicle is really ahead of all other sports cars world wide. As a result of the 2025 Corvette model line
            We hope our Corvette websites distibute information to all users and to provide information as a definitive information Corvette guide. We pride ourselves in the development
            our product as Corvette and the cars present an exciting future for all users.
          </p>

          <p>
            We use the Internet and Your Tube videos as a learning and data source our informatio. We use the Chevrolet.com Corvette Performance website as a reference and source for our
            image production. We also use personal experiences from You Tube videos as the people who like Corvette most usually love the vehicle, it performance, and design
            as a true super sports car. The following websites have been written Optical Automation, LLC, Software Department.

          </p>
          <dir className="leftside">
            <p>General Motors Logo Licensing Pending, June 2025</p>
          </dir>
          {/*         
         <div className="flushleftside">     </div> */}

          <Link to="http://www.TheCorvetteJournal.com"><b>
            http : // w w w . T h e  C o r v e t t e  J o u r n a l . c o m </b>
          </Link>


          <Link to="https://ornate-belekoy-ceaa78.netlify.app/About">
            <b>
              http : // w w w . T h e  C o r v e t t e  J o u r n a l . c o m / Past Versions Second
            </b>
          </Link>



          <Link to="https://cerulean-froyo-afdb3c.netlify.app">
            <b>
              http : // w w w . T h e  C o r v e t t e  J o u r n a l . c o m / Past Versions First
            </b>
          </Link>







          <br />
          <Link to="http://www.TheCorvetteWeb.com "><b>
            http : // w w w . T h e  C o r v e t t e  W e b . c o m</b>
          </Link>      <br />
          <Link to="http://www.TheCorvetteReporter.com "><b>
            http : // w w w . T h e  C o r v e t t e  R e p o r t e r . c o m </b>
          </Link>     <br />

          <Link to="http://www.Checkered-Flag.com"><b>
            http : // w w w . C h e c k e r e d - F l a g . c o m </b><br /><br />
          </Link>

          <Link to=" http://www.MyCorvette.info.com"><b>   h t t p : / / w w w . M y  C o r v e t t e . i n f o    </b>   </Link>

          <Link to=" http://www.CoolJimmy.com">h t t p : / / w w w . C o o l  J i m m y . c o m </Link>

          <Link to=" http://www.CoolJimmyCorvette.com">h t t p : / / w w w . C o o l  J i m m y  C o r v e t t e . c o m </Link>





          <br />
        </div>


        <br /> <br />

      </div>
      <br /> <br />

      <div className="center">
        <h3>            <b> References </b>          </h3>

        <Link to="/Gm">            1. General Motors Executive Staff          </Link>
      </div>


      <Footer />

    </>
  );
};

export default About;
