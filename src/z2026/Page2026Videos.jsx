import React from "react";
import "../styles/Page.css";
import "../styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Carousel2026 from "./Carousel2026";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPage2026 from "./OnPage2026";
import CarouselFlag from "./CarouselFlag";
import Sidebar2026 from "./Sidebar2026";
import Sidebar2026B from "./Sidebar2026B";
import ReactPlayer from "react-player";

const jsonDataArray = [
  {
    text: "Corvette Clum",
    videoPlayer: {
      url: "https://www.youtube.com/c/horsepowerobsessed",
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
    text: "Video 3",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=xyz456abc",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Video 4",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=def789ghi",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Video 5",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=ghi987def",
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


export default function Page2026Videos() {
  return (
    <>
      <div className="rowPage">
        <Carousel2026 />
      </div>
      <div className="col-3 ">
        <Sidebar2026 />
      </div>

      <div className="col-6">
        <h1>
          <b>Corvette 2026 Sports Car Videos
          </b>
        </h1>

        <h2>
          <b> GM Corvette 2026 Reveal</b>
        </h2>
        <App />
        <p>
          <b> First Look At The 1064 hp z2026 </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=AuGJ4OAWL80"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h2>
          <b> z2026</b>
        </h2>

        <p>
          <b> z2026 Corvette Reveal, Throttle House</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=sXIoH-brr4g"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>
        <h2>
          <b> z2026 Leaked!</b>
        </h2>

        <p>
          <b> z2026 Corvette Reveal, Brink Of Speed</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="  https://www.youtube.com/watch?v=ARlyb_8yagI"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>




        <h2>
          <b> z2026</b>
        </h2>

        <p>
          <b> z2026 Looks And Reving, Speed Phenom</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="   https://www.youtube.com/watch?v=jKeHPAkYwLg"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h3>
          <b> Custom Mods </b>
        </h3>

        <h1>
          <b>
            <Link to="/Z06"> Corvette </Link> Cars And Mod Videos
          </b>
        </h1>


        <p>
          <b> Add Window Angle Mirrors, Paragon Performance</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Bvx6Av1DCa8"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h2>
          <b> z2026 Race !</b>
        </h2>
        <p>

          <b> z2026 Corvette  Versus SVJ Lamborghini</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=hIEqWUclwfg"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>



        <h2>
          <b> Corvette C6 z2026</b>
        </h2>
        <p>
          <b> C6 z2026 Corvette </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=C7IOelB64DE"
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


        <Footer />
      </div>


      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPage2026 />
        <Sidebar2026B />
      </div>
    </>
  );
}
