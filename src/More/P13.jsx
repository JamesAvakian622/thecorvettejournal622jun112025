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
    text: "FIRST LOOK: 2025 Corvette ZR1 – 1064hp, Turbos & 215mph!",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=9c6cTsxvv1c&t=540s",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Corvette E-Ray vs Porsche 911 GTS: The Perfect Modern Sports Cars?",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=_EWJC6j6ksk",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "2023 Corvette Z06 vs Ferrari 458 vs Porsche GT3 | Top Gear",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=bNkM-z3cPW8",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Sports car money, SUPERCAR SPEED: Chevrolet Corvette, 184mph, 480+bhp | Top Gear",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=HMFQ0RvvsxI",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Chris Harris Drives The Chevrolet Corvette C8",

    videoPlayer: {
      url: "https://www.youtube.com/watch?v=sEiWMqov8iA",
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

export default function P13() {
  return (
    <>
 
      <div className="rowPage">
        <CarouselZR1 />
      </div>

     <NavbarVideos /> 
        <h1 className="center">
       
         <Link to="http://www.topgear.com">   <b>     Top Gear   </b>   </Link>  

          <h3>             <b>International Television Automobile Shows </b>  </h3>
       
        
       </h1>
       <div className="center">   
      <p>
Top Gear is a legendary automotive television show that started in 1977 and was later revived in 2002. It became famous for its entertaining car reviews, challenges, and races, often featuring high-performance vehicles and celebrity guests. The show was originally hosted by Jeremy Clarkson, Richard Hammond, and James May, who brought humor and excitement to the world of motoring.
        </p>               
            
          <b> <Link to="http://www.TopGear.com ">  Top Gear   Link  </Link>  </b>
         </div>
   
   
   
   <App />
    
     <Link to="/Eray">2025 Corvette E-Ray </Link>, and      spoprts cars.
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
