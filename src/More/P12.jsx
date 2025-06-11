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
    text: "GM President Mark Reuss Unveils the Next Corvette ZR1 and Classic 1960s Corvette ",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=7q4B4B5k0tM",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "First Drive: Corvette E-Ray, In-Depth with Chief Engineer",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=iqImnIAZwjg",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Exclusive First Drive: 2023 Corvette Z06 | Jay Leno's Garage",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=mRU3UDvhF0s",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "First Drive of 2020 Corvette Stingray Convertible Z51 - Jay Leno’s Garage",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=nvTzcNtaSLU",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Jay Leno has the first look at the 2020 Chevrolet Corvette Stingray - Jay Leno's Garage",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=NZGCJu2OaAg",
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

export default function P12() {
  return (
    <>
    
        <div className="rowPage">
          <CarouselZR1 />
        </div>
     

      
          <div className="center">
            <NavbarVideos />
            <h1>      <Link to="../ZR1">   <b>    Jay Leno Corvette Cars   </b>    </Link> 
         
            <p>Television Star, Jay Leno Garage YouTube Channel</p> 
            <p> Rated 5 out of 5 Stars,   The Corvette Journal </p> </h1>
   


          <p>
            Jay Leno is an American television host, comedian, and writer best known for hosting The Tonight Show with Jay Leno from 1992 to 2009 and again from *2010 to 2014. He also hosted Jay Leno's Garage, where he showcased his passion for cars and automotive history.
            Recently, he got behind the wheel of the 2025 Chevy Corvette ZR1, praising its performance and calling it a car that "every American can be proud of"
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
