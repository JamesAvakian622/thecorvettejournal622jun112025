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

export default function P21() {
  return (
    <>

        <div className="rowPage">
          <CarouselZR1 />
        </div>
             
  <NavbarVideos />

          <h1><b>  Cleetus Mc Farland  </b> </h1>
          <h1>Race Driver and Custom Mod Engineer</h1>

          <div className="center"><h1>  
            <Link to="https://www.youtube.com/watch?v=BKmYRlVNML4 "> ZR1 First Drive </Link>    </h1>     
          <p> Rated 5 out of 5 Stars,   The Corvette Journal, "Intense Look At His Speed around Staights and Corners !" </p>

        
          <p>
            Cleetus McFarland is a YouTuber, motorsports enthusiast, and racer. He gained popularity through his high-performance car builds, drag racing content, and grassroots racing events. He owns Freedom Factory, a racetrack in Florida, where he hosts events like the Freedom 500.
            Recently, McFarland has been making waves in NASCAR, competing in the ARCA Menards Series and earning top-10 finishes. There are rumors that he might join the NASCAR Craftsman Truck Series with Ram Trucks in 2026. His massive online following has helped boost viewership for ARCA races, making him a unique figure in the racing world.
          </p>
          </div>

          <App />

          <p>
            <b> First Drive in the NEW Corvette ZR1 - 1,064 Horsepower            </b>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=BKmYRlVNML4"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

          </p>
        
          <p>

            <b> WHEELIE in a 1000hp ZR1 Corvette! My Fastest 1/4 Mile Pass!
            </b>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=E1n5H3_AgUU"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

          </p>
      
          <p>
            <b> My Corvette ZR1’s Fastest 1/4 Pass!            </b>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=INW7hdlj1Sk&t=158s"
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }} />
            </div>

          </p>
         




          <Footer />


    </>
  );
}
