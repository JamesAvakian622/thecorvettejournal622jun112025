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
    text: "Twin Turbo E-Ray C8 Corvette VS. TESLA PLAID! Hybrid VS Full EV!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=m3R6O-ioVvs",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Twin Turbo E-RAY DOMINATES No Prep Racing in TEXAS!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=n_lKaH7HQro",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Twin Turbo E-Ray C8 Corvette VS. TESLA PLAID! Hybrid VS Full EV!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=m3R6O-ioVvs",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "GM Sent us an E-RAY to TWIN TURBO!!? ZR1 drag times matched!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Ztk-vw_RMvk",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Twin Turbo E-RAY DOMINATES No Prep Racing in TEXAS!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=n_lKaH7HQro",
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

export default function P16() {
  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
      </div>

      <NavbarVideos />
     
   <div className="center">
        <h1>  <b>    Boost Distict      </b>    </h1>
        <h1>Race Driver and Custom Mod Engineer</h1>

        <Link to="https://www.youtube.com/watch?v=sNIgK3P3zMo"> His E-Ray Turbos </Link>
      
   
        <p>
          Boost DiStict specializes in high-performance turbo and supercharger setups, particularly for GM vehicles like Corvettes, Camaros, and CTS-Vs. They offer custom-built forced induction kits, including Magnuson and Harrop superchargers, designed to maximize horsepower and torque.
          Their twin-turbo C8 Corvette E-Ray build is one of the fastest in the world, hitting a 9.38-second quarter-mile at 148 mph. If you're looking for LSA conversion kits, supercharger cooling solutions, or complete engine packages, Boost DiStict has a wide range of options.
        </p>

       <Link to="http://www.BoostDiStict.com">    <b>Raties Rides</b> </Link> 
  </div>

      <App />
      <Link to="/Eray">2025 Corvette E-Ray </Link>, and              spoprts cars.
      <p>
        <b> Chasing 8s on our Twin turbo ERAY! Record breaking Passes
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sNIgK3P3zMo"
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
            url="https://www.youtube.com/watch?v=0ygfePXNrW0"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> E-Ray</b>
      </h2>
      <p>
        <b> Twin Turbo E-Ray C8 Corvette World Record RESET!! ZR1 and GTR Watch out!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> E-Ray</b>
      </h2>
  

      <p>
        <b> 1300HP Twin Turbo C8 E-RAY 427ci Corvette Build! Built engine is finally in: World's First!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Gci47ywIYn0"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> E-Ray</b>
      </h2>
      <p>
      <p>
        <b> Twin Turbo E-Ray C8 Corvette VS. TESLA PLAID! Hybrid VS Full EV!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=m3R6O-ioVvs"
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
        <b> GM Sent us an E-RAY to TWIN TURBO!!? ZR1 drag times matched!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Ztk-vw_RMvk"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <p>
        <b> 1300HP Twin Turbo C8 E-RAY 427ci Corvette Build! Built engine is finally in: World's First!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Gci47ywIYn0"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
   



      <Footer />

</p>

    </>
  );
}
