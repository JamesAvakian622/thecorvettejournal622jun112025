import React from "react";
import "../styles/Page.css";
import "../styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import CarouselZR1 from "./CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./OnPageZR1";
import CarouselFlag from "./CarouselFlag";
import SidebarZR1 from "./SidebarZR1";
import SidebarZR1B from "./SidebarZR1B";
import ReactPlayer from "react-player";


// The ZR1 is faster than a Tesla Plaid",  Jason Camissa and Randy Pobst. 


//             <Link to="https://www.youtube.com/watch?v=BKmYRlVNML4&t=1s">
//                 1. Cleetus McFarland, "First Drive in the NEW Corvette ZR1 - 1,064 Horsepower".          
//             </Link>
//                         <Link to="https://www.youtube.com/watch?v=gMc8kRYDUog&t=6s ">
//               2. Top Gear, "FIRST DRIVE: 1064hp Corvette ZR1 – America’s New 233mph King!".

//             </Link>
//      <Link to="https://www.youtube.com/watch?v=cd3JSeumn14">
//               3. P resident Mark Reuss! | Jay Leno's Garage".
// </Link>


//             <Link to="  https://www.youtube.com/watch?v=eo82OSOdDYg ">
//               4. Motor Trend Channel, "Corvette ZR1 ZTK Track Performance Package Costs".
//             </Link>
//             <Link to="https://www.youtube.com/watch?v=cd3JSeumn14">
//               5. Jay Leno's Garage, "First Drive of the 2025 Corvette ZR1 with GM President Mark Reuss! | Jay Leno's Garage".             
// </Link>


//  <Link to=" https://www.youtube.com/watch?v=gioG4xdrjQo">
//               5.   Emelia Hartford, " New Corvette ZR1 Finally Delivered. (First Drive 1064hp IS INSANE)"  </Link>

//             <Link to="https://www.youtube.com/watch?v=R6LelACJ418 ">
//               6.      Vehicle Virgins, "2025 Corvette C8 ZR1 Review - The BEST Car Under $250,000 (Or Even $500K)"</Link>

// <Link to="https://www.youtube.com/watch?v=Q3VUPCUmxig">
// 7. Edumonds Cars, "The New Corvette ZR1 Makes 1,100 HP Feel Accessible | 2025 Corvette ZR1 First Drive"</Link>






const jsonDataArray = [
  {
    text: "Corvette Club, Horsepower Obsessed",
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
      url: "https://www.youtube.com/watch?v=9E4gxsMZ5UU",
      width: "100%",
      height: "100%",
      style: { position: "absolute", top: 0, left: 0 },
      containerStyle: { position: "relative", paddingTop: "56.25%" }
    }
  },
  {
    text: "Video 3",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=xyz456abc",
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
    text: "CRAZIEST CAR WE'VE DRIVEN! 2025 Corvette ZR1 Review",
    videoPlayer: {
      url: "https://www.youtube.com/watch?v=ghi987def",
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


export default function PageZR1Videos() {
  return (
    <>
      <div className="rowPage">
        <CarouselZR1 />
      </div>
      <div className="col-3 ">
        <SidebarZR1 />
      </div>

      <div className="col-6">
        <h1>
          <b>     The 2025 Corvette ZR1 ZTK Sports Car Videos          </b>
        </h1>
        <h1>
          <b>     The Greatest Corvette ZR1 Car Videos          </b>
        </h1>
        <h1>
          <b>     Wow, Wow, Wow, What A Great Car !          </b>
        </h1>
        <h2>
          <b> GM Corvette ZR1 Reveal</b>
        </h2>
        <App />

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="/zr1logo.png">
              <img src="/zr1logo.png" alt="Cinque Terre" width={"100%"} height={"100%"}
              />

            </a>
          </div>
        </div>
        <p> Corvette ZR1 Logo   </p>
        <p>
          <b> First Look At The 1064 hp ZR1 </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=AuGJ4OAWL80"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h2>
          <b> ZR1</b>
        </h2>
        ZR1
        Hagerty,
        Cleetus McFarland
        SavageGeese
        2025 Corvette ZR1 LT7 Engine Walk Around    https://www.youtube.com/watch?v=9E4gxsMZ5UU


        Emelia Hartford
        New Corvette ZR1 Finally Delivered. (First Drive 1064hp IS INSANE)
        https://www.youtube.com/watch?v=gioG4xdrjQo





        <ul>   <li>
          Compared to the Corvette Z06,    </li><li>

            Chevy lowered the compression ration from 12.5:1 to 9.8:1  .   </li><li>
            The car is outfitted with 15 Heat Exchangers on ZR1 and 12 on the Z06.
            Chevy shortened the rods.   </li><li>
            They flat topped the pistons and the wrist pins are signifantly thicker.   </li><li>
            the Turbos are not on top or in the back, but the turbine is tucked close to the exhaust ports.
            next to the header. The Turbine spins and spools fast, nearly at the speed of sound.   </li><li>
            The Thrust from the exhaust is 37 lbs. of force.    </li><li>
            The ZR1 has two fuel injection systems, both Port Injection and Direct Injection per cylinder!
          </li>

          <p> The car uses <b> 2 Gallons per minuet at 233 mph!       </b> </p>

          <li>
            the ZTK package has massive 1,200 lbs. of down force.  The Suspension spring rate is stiffer
            than the Z06, no compromises for the race track.     </li><li>

            The Driving Feel of the Z06 compared to the E-Ray compared to the ZR1 is completely different!   </li><li>
            The Torque and the amout of downforce around corners at speed.     </li><li>
            Driving it on the Circuit Of The Americas we pulled 1.6 G's around corners!!!   </li>
        </ul><p>
          Quoted by Emelia Hartford, Professional xyz </p>



        <h1>
          <b>     The Greatest Corvette ZR1 Car Videos
          </b>
        </h1>



        <p>
          <b> ZR1 Corvette Reveal, Throttle House</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=sXIoH-brr4g"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>
        <h2>
          <b> ZR1 Leaked!</b>
        </h2>

        <p>
          <b> ZR1 Corvette Reveal, Brink Of Speed</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="  https://www.youtube.com/watch?v=ARlyb_8yagI"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>




        <h2>
          <b> ZR1</b>
        </h2>

        <p>
          <b> ZR1 Looks And Reving, Speed Phenom</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="   https://www.youtube.com/watch?v=jKeHPAkYwLg"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h3>
          <b> Custom Mods </b>
        </h3>

        <h1>
          <b>
            <Link to="/Z06"> Corvette </Link> Cars And Mod Videos
          </b>
        </h1>


        <p>
          <b> Add Window Angle Mirrors, Paragon Performance</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Bvx6Av1DCa8"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>


        <h2>
          <b> ZR1 Race !</b>
        </h2>
        <p>

          <b> ZR1 Corvette  Versus SVJ Lamborghini</b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=hIEqWUclwfg"
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }} />
          </div>

        </p>



        <h2>
          <b> Corvette C6 ZR1</b>
        </h2>
        <p>
          <b> C6 ZR1 Corvette </b>
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=C7IOelB64DE"
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

        <div>
          <h3>
            <b> References </b>
          </h3>





          <Link to="https://www.youtube.com/watch?v=BKmYRlVNML4&t=1s">
            1. Cleetus McFarland, "First Drive in the NEW Corvette ZR1 - 1,064 Horsepower".
          </Link>
          <Link to="https://www.youtube.com/watch?v=gMc8kRYDUog&t=6s ">
            2. Top Gear, "FIRST DRIVE: 1064hp Corvette ZR1 – America’s New 233mph King!".

          </Link>
          <Link to="https://www.youtube.com/watch?v=cd3JSeumn14">
            3. P resident Mark Reuss! | Jay Leno's Garage".
          </Link>


          <Link to="  https://www.youtube.com/watch?v=eo82OSOdDYg ">
            4. Motor Trend Channel, "Corvette ZR1 ZTK Track Performance Package Costs".
          </Link>
          <Link to="https://www.youtube.com/watch?v=cd3JSeumn14">
            5. Jay Leno's Garage, "First Drive of the 2025 Corvette ZR1 with GM President Mark Reuss! | Jay Leno's Garage".
          </Link>


          <Link to=" https://www.youtube.com/watch?v=gioG4xdrjQo">
            5.   Emelia Hartford, " New Corvette ZR1 Finally Delivered. (First Drive 1064hp IS INSANE)"  </Link>

          <Link to="https://www.youtube.com/watch?v=R6LelACJ418 ">
            6.      Vehicle Virgins, "2025 Corvette C8 ZR1 Review - The BEST Car Under $250,000 (Or Even $500K)"</Link>

          <Link to="https://www.youtube.com/watch?v=Q3VUPCUmxig">
            7. Edumonds Cars, "The New Corvette ZR1 Makes 1,100 HP Feel Accessible | 2025 Corvette ZR1 First Drive"</Link>




          <Footer />
        </div>


      </div>
      <div className="col-3 ">
        <CarouselFlag />
        {/* <ThemeSwitcher /> */}
        <OnPageZR1 /> 
        <SidebarZR1B />
      </div>
    </>
  );
}
