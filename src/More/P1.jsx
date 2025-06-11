import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";

import Footer from "../Footer";
import CarouselZ06 from "../Z06/CarouselZ06";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";

import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";

const jsonDataArray = [
  {
    text: "2026 Corvette Price Watch: BIG Increases Expected!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=jdTX6PZmOhk",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Z06 After One Year",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9GiqU7e_gp0 ",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: " My 2024 C8 E-Ray Build & Option REGRETS...",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=24H8cMdJews",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "This 2023 C8 Z06 got even BETTER…Watch THIS!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=wlvj0NfkKWg",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2025 Purple C8 Got EVEN BETTER…Watch THIS!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=LwRmouLDFTI",
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


export default function P1() {
  return (
    <>

       <div className="rowPage">
        <CarouselZ06 />
       
        </div>

      <NavbarVideos />  

            <Link to="https://www.youtube.com/watch?v=-MgrpVSYWUw&t=1s">   <h1>   <b>  Brink Of Speed </b>  </h1>  </Link> 

        <div className="center">         
<br />
              <p> Rated 5 out of 5 Stars,  "Best Enthusiats Channel"   The Corvette Journal.Com </p>        
              <p> You Tube Content Channel Developer</p>
          </div>
          
          <div className="center">
            <img src="/bos.png" alt="hop" />
          <p>
            Mike Brink is the creator of Brink of Speed, a popular YouTube channel dedicated to Corvette news, reviews, and high-performance automotive content. He has built a Stong community around his passion for Corvettes, sharing insights on new models, modifications, and induSty updates. His channel features deep dives into Corvette engineering, exclusive event coverage, and discussions on upcoming GM performance vehicles1.
          </p> </div>
          <App />





          {/* <p>
            
                
                  <h2>
                    <b> Stingray - Z51</b>
                  </h2>
                  <p>
                    <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
       
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                


                  <h2>                    <b> Corvette Z06</b>
       

                 

               
                  <h2>
                    <b> Diferences Between Corvette Stingray, Z06, and E-Ray</b>
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
                

                  </p> */}

          <h3>
            <b> References </b>
          </h3>
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
          <Footer />
     
    </>

  );
}
