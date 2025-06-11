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

export default function P20() {
  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
      </div>


      {/* <div className="col-6"> */}


      <NavbarVideos />

      <div className="center">
        <h1><b>   Emelia Hartford    </b>  </h1>
        <h1>Race Driver, Custom Mod Engineer, and Entainerer</h1>
        <h1 className="center1">
          <Link to="https://www.youtube.com/watch?v=gioG4xdrjQoo"> Emelia's ZR1 First Drive </Link>
        </h1>

        <p> Rated 5 out of 5 Stars,   The Corvette Journal </p>
        <h1>
          <Link to="https://www.ReturnToLife.store"> Emelia's, Racing Gear Store </Link>
        </h1>
        <App />

        <p>
          Emelia Hartford is a custom car builder, television host, and actress. She is well known for her performance car customization YouTube channel and for building one of the world's fastest custom Corvette C8s. She has also appeared in films like Gran Turismo and A California Christmas: City Lights.
        </p>
      </div>

      <Link to="/Eray">2025 Corvette E-Ray </Link>, and              spoprts cars.
      <p>
        <b>New Corvette ZR1 Finally Delivered. (First Drive 1064hp IS INSANE)
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=gioG4xdrjQo"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>

      <p>

        <b> First Drive + Launching The World's First Twin Turbo 2023 Corvette Z06
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=aUFjg70g9VQ"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>

      <p>
        <b>Chevrolet Corvette E-Ray vs McLaren 600LT 1/4 Mile DRAG RACE
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-MzH7Alj0QU"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>

      <h2>
        <b> Corvette Z06 / Z07</b>
      </h2>
      <p>
        <b> My C8 Corvette V1 Build is DONE!!!
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JOJ103Oc8JU"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>
      <h2>
        <b> Corvette  <Link to="/Eray">2025 Corvette E-Ray </Link></b>
      </h2>
      <p>
        <b> 2020 C8 CORVETTE SECRETS GM DIDN'T TELL YOU ABOUT...
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9Ad5v_nHjxo"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>

      <p>
        <b> GM Corporate asked to see my Twin Turbo C8 Corvette...
        </b>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=GXlU5Np7Y8A"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>

      </p>





      <Footer />
      {/* </div> */}

      {/* </div> */}
    </>
  );
}
