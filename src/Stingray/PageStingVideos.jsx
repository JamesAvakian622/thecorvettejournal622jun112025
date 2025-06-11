import React from "react";
import "../styles/Page.css";
import "../styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselSting from "./CarouselSting";
////import ThemeSwitcher from "./ThemeSwitcher";
import OnPageSting from "./OnPageSting";
import CarouselFlag from "./CarouselFlag";
import SidebarSting from "./SidebarSting1";
import SidebarStingB from "./SidebarStingB";
import ReactPlayer from "react-player";

// 2020 C8 Corvette Z51 vs Mustang Shelby GT500 // DRAG RACE, ROLL RACE & LAP TIMES

// https://www.youtube.com/watch?v=-gZLTLmZBGM

// const jsonDataArray = [
//   {
//     text: "Corvette Clum",
//     videoPlayer: {
//       url: "https://www.youtube.com/c/horsepowerobsessed",
//       width: "100%",
//       height: "100%",
//       style: { position: "absolute", top: 0, left: 0 },
//       containerStyle: { position: "relative", paddingTop: "56.25%" }
//     }
//   },
//   {
//     text: "Z06 After One Year",
//     videoPlayer: {
//       url: "https://www.youtube.com/watch?v=9GiqU7e_gp0 ",
//       width: "100%",
//       height: "100%",
//       style: { position: "absolute", top: 0, left: 0 },
//       containerStyle: { position: "relative", paddingTop: "56.25%" }
//     }
//   },
//   {
//     text: "Video 3",
//     videoPlayer: {
//       url: "https://www.youtube.com/watch?v=xyz456abc",
//       width: "100%",
//       height: "100%",
//       style: { position: "absolute", top: 0, left: 0 },
//       containerStyle: { position: "relative", paddingTop: "56.25%" }
//     }
//   },
//   {
//     text: "Video 4",
//     videoPlayer: {
//       url: "https://www.youtube.com/watch?v=def789ghi",
//       width: "100%",
//       height: "100%",
//       style: { position: "absolute", top: 0, left: 0 },
//       containerStyle: { position: "relative", paddingTop: "56.25%" }
//     }
//   },
//   {
//     text: "Video 5",
//     videoPlayer: {
//       url: "https://www.youtube.com/watch?v=ghi987def",
//       width: "100%",
//       height: "100%",
//       style: { position: "absolute", top: 0, left: 0 },
//       containerStyle: { position: "relative", paddingTop: "56.25%" }
//     }
//   }
// ];
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

// const App = () => {
//   return (
//     <div>
   
//       {jsonDataArray.map((data, index) => (
//         <VideoComponent key={index} data={data} />
//       ))}
//       <br />    <br />    <br />    <br />
//     </div>
//   );
// };


export default function PageStingVideos() {
  return (
    <><>
      <div className="rowPage">
        <CarouselSting />
      </div>
      <h1>
        <b>
          <Link to="/Stingray">2025 Stingray </Link>
          Videos
        </b>
      </h1>
      <h1>
        <b>Cars And Custom Mods Videos </b>
      </h1>
      {/* <App /> */}

      <h3>
        <b> Curvettes </b>
      </h3>
      <Link to="/Eray">2025 Corvette E-Ray </Link>, and spoprts cars.
      <p>
        <b> Ten Reasons To Buy A Mid Engine Corvette </b>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }} />
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
            style={{ position: "absolute", top: 0, left: 0 }} />
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
            style={{ position: "absolute", top: 0, left: 0 }} />
        </div>
      </p>
      <h2>
        <b> Customize</b>
      </h2>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/p0.png">
            <img
              src="/p0.png"
              alt="Cinque Terre"
              width={200}
              height={200} />
          </a>
          <div className="desc">Paragon Performance</div>
        </div>
      </div>
      <h2>
        <b> Paragon Performance </b>
      </h2>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/p2.png">
            <img
              src="/p2.png"
              alt="Cinque Terre"
              width={600}
              height={400} />
          </a>
          <div className="desc">
            Make you Stingray Four Center Pipes, Paragon Performance
          </div>
        </div>
      </div>
      <p>
        <b> Make you Stingray Four Center Pipes, Paragon Performance</b>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=kcGjnckJDuo"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }} />
        </div>
      </p>
      <p>
        <b> Add Window Angle Mirrors, Paragon Performance</b>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Bvx6Av1DCa8"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }} />
        </div>
      </p>
      <div className="responsive">
        <div className="gallery100">
          <a target="_blank" rel="noopener noreferrer" href="/p5.png">
            <img
              src="/p5.png"
              alt="Cinque Terre"
              width={600}
              height={400} />
          </a>
          <div className="desc">
            Make you Stingray, Z06, and E-Ray Vented Windows
          </div>
        </div>
      </div>
      <p>
        <b> ZR1 Vented Window, Stingray, Z06, and E-Ray </b>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PD2Q2JNQexc"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }} />
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
      </p>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }} />
      </div>
    <Footer />
      
      </>
     


  
    </>
  );
}
