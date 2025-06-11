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
    text: "Does the C8 Corvette Stingray have MORE performance than a 2024 Mustang Dark Horse?",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=B4fSeBmavZc",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: " Is the 2025 C8 Corvette ZR1 a Chevy WORTH the $100k dealer markup?",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=wafxCK1tQG4",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Is the 2023 Chevrolet C8 Corvette Z06 a BETTER super car than a Porsche 911 GT3?",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=qsIKmyKSV_M",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {

    text: " Is the C8 Corvette E-Ray a better AWD sports car than a 2025 Porsche 911 Carrera 4 GTS?",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Wq-YqP2eeJo",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Is the 2025 Chevrolet Corvette Z06 already OBSOLETE because of the C8 ZR1?",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=eMMM4TWs55s",
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

export default function P8() {
  return (
    <>

<div className="rowPage">
        <CarouselZR1 />
        <div className="item1">
          {/* <SidebarZR1 /> */}
        </div>
      </div>
      <div className="item2">

     <NavbarVideos /> 
     <h1>         
     <Link to=" https://www.youtube.com/watch?v=JsiC96LFq9A ">  <b>   Raities Rides    </b> </Link> 
   
               <b> You Tube Channel </b>
               </h1>
          
   <div className="center">   
         <p>
              Welcome to Raiti's Rides! I put this channel together to share my passion and love for everything car related.
              Growing up in my old man's mechanic shop followed by several adrenaline filled years as a professional race car
              driver, my passion for all things automotive knows no bounds. It doesn't matter what type of car you like, I have
              something for everyone including imports, domestics, muscle cars, classic cars, car gatherings, and of course my
              favorite, racing action. You might also notice that most of my videos ask a question - that comes from my 18 years of
              being a high school history teacher. The goal of each video is for you to be able to answer that question for
              yourself by the end, and of course have a few laughs along the way! Thank you for visiting and please subscribe!

          </p> </div>
        <App />

          <img src="/rides1.png" alt="hop" />
          <img src="/rides2.png" alt="hop" />
        </div>


        <div className="black">

        

          <p>

              71,747 views  Dec 23, 2023</p>
         

            <Link to="/Eray">2025 Corvette E-Ray </Link>, and              spoprts cars.
          <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>
            <h2 >
              <b> Stingray</b>
            </h2>
          <p>

              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>
            <h2 >
              <b> Stingray - Z51</b>
            </h2>
          <p>
              <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
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
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
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
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
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
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
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
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>
          <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>
          <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>
          <p>

              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              </div>

          </p>

        
        </div>

        <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
          <Footer />
        </div>

     
    </>
  );
}
