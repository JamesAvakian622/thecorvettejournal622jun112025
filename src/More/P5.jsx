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
    text: "New Corvette ZR1 Unveiled. And It's Insane",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Nw02-o04Qho",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Corvette Z06 vs Lotus Emira // DRAG RACE, REVIEW & LAP TIMES",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=QzGWral8Jn8",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2023 Corvette Z06 Review // The $100,000 Supercar",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Dn6gmBQUTdg",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2020 C8 Corvette Z51 vs Mustang Shelby GT500 // DRAG RACE, ROLL RACE & LAP TIMES",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=-gZLTLmZBGM",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2020 C8 Corvette Z51 Review // Expectation vs Reality",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=5UQB17UWxvQ",
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

export default function P5() {
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

          <Link to="https://www.youtube.com/watch?v=Nw02-o04Qho">    <b> Throttle House </b>  </Link>
        </h1>
        <p> Rated 5 out of 5 Stars,  "First Best Looking ZR1 Reveal" The Corvette Journal.Com </p>

        <div className="center">
          <p> You Tube Content Channel Developer</p>

        </div>




        <p>
          Throttle House is a popular automotive YouTube channel known for its high-quality car reviews, track tests, and deep dives into vehicle performance. Hosted by Thomas Holland and James Engelsman, the channel covers everything from supercars to daily drivers, often with a mix of humor and technical analysis.

        </p>     </div>
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
