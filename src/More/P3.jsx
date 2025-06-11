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
    text: "2023 Corvette C8 Z06",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=hJP6oXfZkFo",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Acura NSX | One Last Trip Down Memory Lane",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=e9QKd-rfM-0",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2025 Corvette C8 ZR1 | How to Engineer a 1064HP Supercar",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9oJZ2ApCfTI",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "How The Corvette C8 Z06 Is Made",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=Z2ag9b8BWzI",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2023 Corvette Z06 vs Porsche GT3 | Pushed to the Limits",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=zUqDKZEf_FA",
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

export default function P3() {
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

      <NavbarVideos /><div className="center"> 
      <h1>
      <Link to="https://www.youtube.com/watch?v=-MgrpVSYWUw&t=1s">    <b> Savageese Media   </b>  </Link> 
    <p> You Tube Content Channel Developer</p>
        <p> Rated 5 out of 5 Stars,  "Very Engaging Video" TheCorvetteJournal.Com </p>
     
      </h1>
      <img src="/sava.png" alt="hop" />

      <p>
        SavageGeese is a YouTube channel and automotive media platform known for its in-depth car reviews, technical breakdowns, and engineering insights. The channel covers a wide range of vehicles, from sports cars to daily drivers, with a focus on detailed analysis, driving dynamics, and induSty trends. You can check out their content here.
      </p>
 </div>

      <App />


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
