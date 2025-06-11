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
    text: "The 1064 HP, 215-Plus MPH 2025 Chevrolet Corvette ZR1: All the Details with Tadge Juechter",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=VLHdcIQSC7I",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "It’s Hard to Believe the 2023 Chevrolet Corvette Z06 Exists | Car and Driver Road Test",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=q--HZ_iM5KA",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Yes, The Hybrid And AWD 2024 Chevrolet Corvette E-Ray Can Drift | Reveal",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Mj4t2OyeEds",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "What We Learned After Testing a Chevy C8 Corvette Over 40,000 Miles | Car and Driver",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=u7YfAlDYMVE",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "0-150-0 Speed Test 2023 | Car and Driver",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=ryBld0_KxlE",
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


export default function P10() {


  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
      
      </div><div className="item2">
  <NavbarVideos /> 

        <div className="center">
          <h1>
            
  <Link to="     https://www.youtube.com/watch?v=ZSqnVobbLyU&t=196s  ">    <b>   Car And Driver    </b> </Link> 
            <br /><br />

               <b> International Automobile Car Magazine and Channel </b>
  

          </h1>
          
        <p>
            Car and Driver is a well-known automotive magazine and media brand that provides car reviews, induSty news, and expert insights. They cover everything from new car launches to performance tests and market trends. You can explore their latest articles and features here.
They also offer detailed buyer's guides and comparison tests, making them a great resource for enthusiasts and consumers alike.
          </p>
               <b> <Link to="http://www.CarAndDriver.com ">     Car And Driver    Link  </Link>  </b>
          
<App />


          <img src="/card.png" alt="hop" />
          <img src="/cow1.png" alt="hop" />
          <img src="/cow2.png" alt="hop" />
        </div>


        <div className="black">

        

          <p>


              Corvette World is a dealership specializing in pre-owned Corvettes, offering a wide selection of lower-mileage models. They also provide services like repairs, performance upgrades, parts, accessories, and apparel for Corvette enthusiasts. They have locations in Dallas and Houston, Texas.

          </p>

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
