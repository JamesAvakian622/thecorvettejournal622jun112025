import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "../ZR1/CarouselZR1";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import CarouseM from "./CarouseM";
import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";
const jsonDataArray = [
  {
    text: "High Wing C8 ZR1's EVERYWHERE at the 2025 Corvette BASH!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=fhpLmj5ZidA",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Did GM bring the New 2026 Corvette to the BASH?",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=31lv1S6N_7M",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "National Corvette Museum (NCM) Track Tips",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=NEAEuuHkfqs",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "NCM Motorsports Park - C8 Corvette - Fast Lap",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=zdxWSekhX70",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2023 Corvette Z06 Tour Lap at the NCM Motorsports Park",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=krG1nA5pXDk",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  }
];
const VideoComponent = ({ data }) => {
  return (
    <div>
      <h2>{data.text}</h2>
      <div style={data.videoPlayer.containerStyle}>
        <ReactPlayer
          url={data.videoPlayer.url}
          width={data.videoPlayer.width}
          height={data.videoPlayer.height}
          style={data.videoPlayer.style}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
   
      {jsonDataArray.map((data, index) => (
        <VideoComponent key={index} data={data} />
      ))}
    </div>
  );
};

export default function P14() {
  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
      </div>

      <div className="center">
        <NavbarVideos /><h1>    
       <Link to="http://www.corvettemuseum.org">    <b>   National Corvette Museum     </b>  </Link> 


        <p> NCM  Museum, NCM Insurance,  NCM Motorsports Park </p> </h1>
    

   

      <p>
        The National Corvette Museum is located in Bowling Green, Kentucky, and is dedicated to preserving and celebrating the history of the Chevrolet Corvette. 
        </p><p>  
        It features over 100 historic Corvettes, interactive exhibits, and a Corvette Hall of Fame honoring influential figures in Corvette history.
       </p>
      
        <p>  

        Visitors can explore rare prototypes, racing legends, and classic models, as well as experience the NCM Motorsports Park, where they can drive Corvettes on a professional track. 
   </p>      <p>  

        The museum also offers delivery programs, allowing new Corvette owners to pick up their cars at the facility.
 </p>
        
</div>

<div className="center">
  <h2> 
<Link to="http://www.corvettemuseum.org">The National Corvette Museum</Link></h2>  
<p>   
The National Corvette Museum is located at: 

<ul>   <li> 350 Corvette Drive </li>  

 

 <li>  Bowling Green, KY 42101</li>



 </ul>
</p>

<p>   
It’s right off Interstate 65, Exit 28, near the Bowling Green Assembly Plant, where Corvettes are manufactured. If you're planning a visit, they offer guided tours, driving experiences, and exclusive Corvette exhibits.
</p>



<p>   
Here’s a breakdown of ticket prices for the National Corvette Museum and NCM Motorsports Park: </p>  
<h2>  
National Corvette Museum (Bowling Green, KY) </h2>
<ul><li>  Adults (13-61): $25    </li>  
<li>   Seniors (62+): $23   </li>
<li>   Youth (5-12): $14
   </li>
   <li>    Children (4 & under): Free
  </li>
  <li>    Museum Members: Free
  </li>

 </ul>
<p> 
Tickets can be purchased on-site or online, and group discounts are available for parties of 15 or more.  </p>
<h2>  
NCM Motorsports Park Driving Experiences </h2> 


<ul>  
<li>    Corvette Touring Laps (C7 or C8): Starts at $299
  </li>
  <li>  Camaro Touring Laps: Starts at $199    </li>
  <li>    Bowtie Bundle (C7, C8, Camaro SS): $599 for 12 laps  </li>
  <li>   Front vs. Mid-Engine Experience (C7 vs. C8): $399 for 8 laps   </li>

 </ul>




<p> 
These experiences allow you to drive Corvettes on track in a lead-follow format, guided by professional instructors.
</p>

      <b> <Link to="http://www.corvettemuseum.org">National Corvette Museum Website</Link>  </b>
 </div>

      <App />


      <h1 className="center1">
        <Link to="../LT7"> His Collection </Link>
      </h1>

      <p>  https://c8rallydriver.com/c8rallydriver/?gad_source=1&gad_campaignid=21514311357&gbraid=0AAAAAoxM478AUI6qTlk5xL1kr5N26dtnN&gclid=Cj0KCQjw0LDBBhCnARIsAMpYlAoO2JUVu8cMs4Y_xlsez0eUo3fytPs8XK3UiGYvR1P78d0rpfU5OYoaAk0xEALw_wcB   </p>


      <Link to="/Eray">2025 Corvette E-Ray </Link>, and              spoprts cars.
      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>


      <h2>
        <b> Tadge Juecther</b>

     
      


      </h2>
      <p>

        <b>      2024 Corvette Hall of Fame, GM/Chevrolet Category: Tadge Juechter   </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="   https://www.youtube.com/watch?v=3jW2eOU0ZNo"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>


      <h2>
        <b>Inside The Museum !</b>
      </h2>
      <p>
        <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> Corvette Z06</b>
      </h2>

      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> Corvette Z06 / Z07</b>
      </h2>
      <p>
        <b> Z06 or  <Link to="/Eray">2025 Corvette E-Ray </Link> Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> Corvette  <Link to="/Eray">2025 Corvette E-Ray </Link></b>
      </h2>
      <p>
        <b>  Reasons To Buy A  <Link to="/Eray">2025 Corvette E-Ray </Link> Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> Corvette ZR1</b>
      </h2>
      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <p>

        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>




      <Footer />




    </>
  );
}
