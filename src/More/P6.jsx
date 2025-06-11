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
    text: "The Corvette ZR1's Engine Is Absolutely Insane — 1,000+ Horsepower!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Rs-3YmQfZos",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "5 Genuinely Impressive Flaws Of The C8 Corvette",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=a2MxuknropY",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "The Most Powerful V8 Engine Ever (Naturally Aspirated) - 2023 Corvette Z06",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=1q6p5vlAWEs",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "This Tiny Engine Part Changed Everything - Flathead vs OHV vs OHC!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=y2TuR4fR1W0",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2020 Corvette Stingray Review - Launches Like An AWD Supercar!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=B85SaCFNqgM",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },


  {
    text: " Corvette ZR1 Engineers Proved Me Wrong - The Quickest RWD Car Ever!?",
    videoPlayer: {
      url: " https://www.youtube.com/watch?v=uNQgKA65jLk&t=224s ",
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

export default function P6() {
  // const breadcrumbItems = [
  //   { label:"Home", href:"/Home" },
  //   { label:"The Chevrolet Corvette", href:"./Stingray/PageSting" },
  //   { label:"The Corvette Stingray", href:"./Stingray/PhotoAlbum" },
  // ];

  return (
    <>

<div className="rowPage">
        <CarouselZR1 />
      </div>


 <NavbarVideos /> 
      <div className="center">
        
         <h1>
          <b> <Link to=" https://www.youtube.com/watch?v=Rs-3YmQfZos">   Engineering Explained  </Link>  </b>

          <p> Rated 5 out of 5 Stars,  "A Real Learning Experience" The Corvette Journal </p>
          <p> You Tube Content Channel Developer</p>
        </h1>

        <p>
          Engineering Explained is a YouTube channel created by Jason Fenske, a mechanical engineer who specializes in automotive engineering and technical breakdowns. His videos cover everything from engine mechanics to aerodynamics, explaining complex topics in a clear and engaging way.
        </p>
</div>

        <App />

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
