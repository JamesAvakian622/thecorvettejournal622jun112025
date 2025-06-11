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
    text: "How fast is the Corvette E-Ray? Versus Ferrari F8 & Lamborghini Huracan Evo: Jason Cammisa Drag Race",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=rQlOBwaOTvI",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2023 C8 Corvette Z06 Races Porsche 992 GT3, Ducati V4 SP2, and Audi R8 V10 — Cammisa Drag Race",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=aXdwnA7RyZ0",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "992 GT3 RS vs Corvette Z06 vs BMW M4 CSL w/ Randy Pobst",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=mCQlLa36-0c",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2020 Chevrolet C8 Corvette - RATED",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=BFRAGLMewUI",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "U-DRAGS: C8 Corvette Z06 vs. Corvette Stingray",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=xEBxx8Dbzdk",
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

export default function P7(){
  return (
    <>
      
        <div className="rowPage">
          <CarouselZR1 />
        </div>

        <NavbarVideos />

        <div className="center">
          <h1>
     <Link to=" https://www.youtube.com/watch?v=JsiC96LFq9A ">    <b>   Hagerty Media       </b>  </Link><br />
    </h1>
        <div className="center">   
            <b> You Tube Content Channel Developer </b><br />
            <p> Rated 5 out of 5 Stars,   The Corvette Journal </p>
      
 </div>  <div className="centerspecial">  
          <p>
            Hagerty Media is a leading automotive publication that covers classic cars, market trends, and induSty news. They provide in-depth reviews, restoration stories, and historical insights into the automotive world. You can explore their latest articles and features here.
            They also publish Hagerty Magazine, which includes expert analysis on collector cars, driving experiences, and automotive culture.
          </p>
        </div>

        <App />


    
          <div className="responsive">
            <div className="gallery1001">
              <div className="center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/1race.png"
                >
                  <img
                    src="/1race.png"
                    alt="Cinque Terre"
                    width={300}
                    height={200}
                  />
                </a>
              </div>
              <div className="desc1">Coupe Hardtop</div>
            </div>
            <Link to="/Eray">2025 Corvette E-Ray </Link>, and spoprts cars.
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b> Stingray</b>
            </h2>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b> Stingray - Z51</b>
            </h2>
            <p>
              <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b> Corvette Z06</b>
            </h2>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b> Corvette Z06 / Z07</b>
            </h2>
            <p>
              <b>
                Z06 or <Link to="/Eray">2025 Corvette E-Ray </Link>
                Corvette
              </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b>
                Corvette <Link to="/Eray">2025 Corvette E-Ray </Link>
              </b>
            </h2>
            <p>
              <b>
                Reasons To Buy A <Link to="/Eray">2025 Corvette E-Ray </Link>
                Corvette
              </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <h2>
              <b> Corvette ZR1</b>
            </h2>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
            <p>
              <b> Ten Reasons To Buy A Mid Engine Corvette </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
            </p>
          

          <div>
            <h3>
              <b> References </b>
            </h3>
            <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
              Reference: 1. Hagerty, The LT6 A Landmark Achievement
            </Link>
            <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
              2. Vette Vues Magazine
            </Link>
        </div>
        <Footer />
</div>
</div>

      </>
      );
}
