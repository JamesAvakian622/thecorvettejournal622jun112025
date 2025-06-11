import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "../ZR1/CarouselZR1";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";

import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";
const jsonDataArray = [
  {
    text: " The SHOCKING Price of My Corvette ZR1! *More Than A Ferrari*",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=pJ4qDeYk4Js",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2025 CORVETTE ZR1 VS 2026 FERRARI 296 SPECIALE! Can America Compete?",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=GTmLpyMT2WE",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2025 MUSTANG GTD VS 2025 CORVETTE ZR1 NURBURGRING LAPS! WHO WILL BE KING?",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9AAqxus_g9Q",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },

  {
    text: "2025 C8 Corvette ZR1: Is It REALLY Worth the Hype? (Honest Review)",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Wm-DeqQEg_A",
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

export default function P15() {
  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
      </div>



      <NavbarVideos />
      <div className="center">
        <h1><b>     Speed Phenom    </b>    </h1>

        <h2>Track Mile Driver and Custom Mod Engineer</h2>

        <Link to="https://www.youtube.com/watch?v=n_lKaH7HQro"> His Collection </Link><br />


        <p>
       Speed Phenom, Austin, is a popular automotive YouTube channel focused on high-performance cars, track testing, and in-depth reviews. The creator is known for covering Corvette builds, McLaren supercars, and Mustang performance upgrades.

        </p>
   


      </div>


      <App />


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
        <b> Stingray</b>
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
        <b> Stingray - Z51</b>
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
