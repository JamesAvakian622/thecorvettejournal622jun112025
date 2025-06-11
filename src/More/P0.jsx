import React from "react";
import "../styles/Page.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZ06 from "../Z06/CarouselZ06";
// import OnPageZR1 from "../ZR1/OnPageZR1";
// import CarouselFlag from "./CarouselFlag";
// import SidebarZR1 from "../ZR1/SidebarZR1";
// import SidebarZR1 from "../ZR1/SidebarZR1";

//import CarouseM from "./CarouseM";
import ReactPlayer from "react-player";
import NavbarVideos from "../NavbarVideos";
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
    text: "Steet Speed 717 calls out the C7 Corvette ZR1 in his C8 Corvette Z06! It's CLOSER than YOU THINK!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=EzTqOAZ1Ufo",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "The BEST C8 Corvette Battery Upgrade! Antigravity Battery! HERE'S WHY!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9vNnDAUzeQ4",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "C8 Corvette DCT Transmission Maintenance EXPLAINED! DON'T LOSE YOUR WARRANTY!",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=eDGJ-ZuJ9QQ&t=2s",
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



export default function P0() {
  return (
    <>
      <div className="rowPage">
        <CarouselZ06 />
   

      <NavbarVideos />


      <div className="center">
        <h1>              <b> Horsepower Obsessed </b>            </h1>

        <h1>
          <img src="/hpo1.png" alt="hop" />
          <Link to=" https://www.youtube.com/c/horsepowerobsessed">  HorsePower Obsessed Link</Link>
        </h1>
        <p> Rated 5 out of 5 Stars,  "Best Enthusiats Channel" The Corvette Journal </p>
        <p> You Tube Content Channel Developer</p> </div>

      <img src="/hpo.png" alt="hop" />


      <p>
        Horsepower Obsessed is a popular YouTube channel and online community dedicated to car
        enthusiasts, particularly those who love Corvettes.
        The tried and true, MUST HAVE parts and accessories that have been featured, tested, and reviewed on the HorsePower Obsessed YouTube channel for
        your Chevrolet Corvette, and Chevrolet Colorado. I do the testing for aftermarket parts and determine which ones are worth your hard earned money
        so you don't have to.         
        </p>

    </div>

        <App />


        <h2 className="space" id="perf">
          <b> Corvette Club and Videos </b>
        </h2>
        <p>
          <b>Corvette Club </b>
          <Link to=" https://www.youtube.com/c/horsepowerobsessed">  You Tube Video</Link>

        </p>
        <p>
          <b>  Corvette Z06, One Year Ownership</b>
          <Link to=" https://www.youtube.com/watch?v=9GiqU7e_gp0  "> One Year</Link>

        </p>
        <h2 >
          <b> Stingray</b>
        </h2>
        <p>

          <b> Corvette Stingray</b>
          <Link to="  https://www.horsepowerobsessed.com/collections/2020-c8-corvette "> Stingray</Link>

        </p>
        <h2 >
          <b> Stingray - Z51</b>
        </h2>
        <p>
          <b> Do you Need Mag-Rride or Z51 on Your Corvette </b>
          <Link to="  https://www.youtube.com/watch?v=92M2hhpBAmc "> Ten Reasons</Link>

        </p>
        <h2>
          <b> Corvette Z06</b>
        </h2>

        <p>
          <b> Corvette Z06 Hysteria Purple</b>
          <Link to=" https://www.youtube.com/watch?v=GVQ4AgpH5L0  "> the Color</Link>

        </p>
        <h2>
          <b> Corvette Z06 / Z07</b>
        </h2>
        <p>
          <b> Z06 Corvette Build</b>
          <Link to="  https://www.youtube.com/watch?v=f79q7D4HEGo ">  Reasons</Link>

        </p>

        <p>
          <b>       Corvette with Eventuiri Intake  </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url=" https://www.youtube.com/watch?v=nHVIhdkWaFc "

              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>
        </p>


        <p>
          <b>Corvette   </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://https://www.youtube.com/watch?v=eaWKov9PM7k "

              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>

        <p>
          <b>  Corvette Zora options    </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eaWKov9PM7k  "

              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer

            width="10%"
            height="10%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
        <p>

          <b>  </b>
        </p>


        <p>
          <b>    Corvette Jack Pucks  </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=89HKBXWjAfc"

              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>



        <h2 >
          <b> Conclusion</b>
        </h2>
        <p>
          One of the best Corvette clubs in America. In my opionion they offer
          enthusiasts the most reliable information. Watch them Wednesdays on
          YouTube channel for the latest in Corvette Stingray, Z06,  <Link to="/Eray">2025 Corvette E-Ray </Link>, and
          spoprts cars.

        </p>

   


      <div>
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          " > Reference: 1. Hagerty, The LT6 A Landmark Achievement  </Link>
        <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/" > 2. Vette Vues Magazine</Link>

      </div>
      <Footer />

    </>
  );
}
