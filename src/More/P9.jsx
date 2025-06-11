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
    text: "2025 Chevrolet Corvette ZR1 First Look: Watch and Hear the ZR1 Rip to 205 MPH! | MotorTrend",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=wZlAhEoO-H0",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Corvette Z06 with Z07 Track Package TRACK REVIEW! | MotorTrend",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=pE-7QCeYTyo",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "First Look! 2024 Chevrolet Corvette E-Ray | MotorTrend",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=5o6Qlnw-jIg",
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
    text: "We've Got a C8!—2020 Chevy Corvette C8 First Test | MotorTrend",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=OmoeUXIBkzI",
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

export default function P9() {
  return (
    <>

<div className="rowPage">
        <CarouselZR1 />
      

        <div className="item2">

          <NavbarVideos />
          <h1>
           <Link to="  https://www.youtube.com/watch?v=eo82OSOdDYg&t=324s ">   <b>   Motor Trend    </b>  </Link> 

            <b> International Automobile Car Magazine and Channel </b>
          </h1>

          <div className="center">
            <p>
              MotorTrend is a well-known automotive media brand that provides car news, expert reviews, and induSty insights. They cover everything from new car launches to performance tests and market trends. You can explore their latest articles and features here.
              They also offer detailed car reviews and buyer's guides to help enthusiasts and consumers make informed decisions about vehicles.

            </p>
            <b> <Link to="http://www.MotorTrend.com ">    Motor Trend   Link  </Link>  </b>

          </div>

          <App />
          <img src="/motor.png" alt="hop" />

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

        </div>

        <div>
          <h3>
            <b> References </b>
          </h3>
          <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
          <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>
          <Footer />
        </div>




      </div>

    </>
  );
}
