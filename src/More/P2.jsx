import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
 import CarouselZR1 from "../ZR1/CarouselZR1";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";
//import CarouseM from "./CarouseM";
import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";
const jsonDataArray = [
  {
    text: "C8 Corvette New Products April 2025 - Paragon Performance",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9_MunZtUbMY",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Boost DiStict DCT Transmission Release Tool Install ",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=kpz7GX4FYRg&t=48s",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "C8 Corvette DCT Filter Change! ",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=npFqiFVjbi8",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: " OE front brake pads on your Z51 C8 Corvette!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=BAFURWnuNeE",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "C8 Corvette Z06 Rotor Install ",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=nFyvwCDWnE8",
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


export default function P2() {
  return (
    <>

      <div className="rowPage">
        <CarouselZR1 />
   
        </div>

   


          <div className="center">

               <NavbarVideos />
            <h1>
              <b> <Link to="  https://www.youtube.com/watch?v=eo82OSOdDYg&t=324s ">    Paragon Performance   </Link>  </b>
           
      </h1>
           

              <div className="center">
                   <img src="/para.png" alt="hop" />
              <b> #1, Corvette Modifications Supplier and Channel </b>

              <p> Rated 5 out of 5 Stars,  "Best Supplier and Performance Videos" The Corvette Journal </p>
              <p> You Tube Content Channel Developer</p>
              
          

            <p>
              Paragon Performance has a popular YouTube channel and online community dedicated to car enthusiasts,
              particularly those who love Corvettes. The channel features videos on various Corvette models,
              modifications, and driving experiences.
            </p>
            <Link to="http://www.ParagonPerformance.com"> Paragon Performance Link </Link>
   </div>


            <h2 className="space" id="perf">
              <b> Corvette Club and Videos </b>
            </h2>
            <Link to="/Eray">2025 Corvette E-Ray </Link>, and              spoprts cars.


            <App />


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


    
    </>
  );
}
