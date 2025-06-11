import React from "react";
import "../styles/Page.css";
import "../styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "./CarouselZ06";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZ06 from "./OnPageZ06";
import CarouselFlag from "./CarouselFlag";
import SidebarZ06 from "./SidebarZ06";
import SidebarZ06B from "./SidebarZ06B";
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

export default function PageZ06Videos() {
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
        <div className="col-3 ">
          <SidebarZ06 />
        </div>

        <div className="col-6">
          <h1>
            <b>
             Corvette Z06 Videos
            </b>
          </h1>
        <App />
          <p>
              <b> 2025 Z06 Corvette</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=wMmIEJS9z5s"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b> 2025 Z06 Corvette, Raites Rides</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=SEpKWK1ICRc"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b>
                2025 Z06 Corvette, Start Your Car Quietly, Paragon Performance
              </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="  https://www.youtube.com/watch?v=1X2S9I68N-U"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b> 2025 Z06 Corvette, Sports Cats, Horsepower Obsessed</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="   https://www.youtube.com/watch?v=wF0tbyRbGYs"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b> Z06 Corvette Transmission Care, Horsepower Obsessed </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url=" https://www.youtube.com/watch?v=rVMLko8As4E"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b> Add Window Angle Mirrors, Paragon Performance</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Bvx6Av1DCa8"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
          <p>
              <b> Z06 Ordering, 2LZ Versus #LZ</b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="  https://www.youtube.com/watch?v=ZtQw8w1lgrU"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>

            <div className="responsive">
              <div className="gallery100">
                <a target="_blank" rel="noopener noreferrer" href="/p5.png">
                  <img
                    src="/p5.png"
                    alt="Cinque Terre"
                    width={600}
                    height={400}
                  />
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
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
            <h2>
              <b> Z06 Mods</b>
            </h2>
          <p>
              <b> Add To Your Body, Anderson Composites </b>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=LuvnIC9aj38"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </div>
          </p>
        
          <Footer />
        </div>

        <div className="col-3 ">
          <CarouselFlag />
          {/* <ThemeSwitcher /> */}
          <OnPageZ06 />
          <SidebarZ06B />
        </div>
      </div>
    </>
  );
}
