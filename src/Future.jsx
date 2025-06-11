import React from "react";
import "./styles/Page.css";
import "./styles/photos.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import CarouselZR1 from "./ZR1/CarouselZR1";
//import ThemeSwitcher from "./ThemeSwitcher";
import OnPageZR1 from "./ZR1/OnPageZR1";
import CarouselFlag from "./ZR1/CarouselFlag";
import SidebarZR1 from "./ZR1/SidebarZR1";
import SidebarZR1B from "./ZR1/SidebarZR1B";
import NavbarMore from "./NavbarMore";
//import Accord from "./Accord"

import styled from 'styled-components';

const StyledImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 10px;
`;

export default function Future() {

    const jsonData = {
      image: '/me.jpg',
    };

return (
  

    <div className="rowPage">
      <CarouselZR1 />

       <div className="col-3 ">
      <SidebarZR1 />
    </div>

    <div className="col-6">


      <NavbarMore />
      <h1 className="center">
        <b> Future Software Applications </b>
      </h1>
      <br />

      <h2 className="center">
        The 2025 Corvette Software Reveal, June 2025
      </h2>   <br /><br />

      <h3 className="center">
        "Great Website and Mobile App Appllications!", Optical Automation
      </h3>


      <h3 className="center">
        "Excited To Present Such Great Material!", James Avakian, Optical Automation 
      </h3>
      <h3 className="center">
      <StyledImage src={jsonData.image} alt="Styled Image" />
      </h3>


      <h3 className="center">
        Optical Automation, LLC founded in 1987 started writing software for
        many systems. Finanally we decided to get our information, words,
        paragraphs, images, and media accross to the largest group of
        people, English speaking Americans. Of course we care about everyone
        else, since English is the most spoke language around the world. As
        a result we begun writing HTML, CSS, and researching-buy Internet
        Domain Names. We are independed contractors and get employed from
        time to time.
      </h3>
      <h3>
        At graduation from Cal Poly, San Luis Obispo, I was actually a GM
        Emplopyee when I bought my first Corvette in 1987. At that time GM
        purchased Hughes Aircraft Company in El Segundo when I bought my
        first Stingray. I fell in love, but it was short lived becasue
        Hughes Aircraft, a defense contractor hired the four of us on a
        hiring freeze. A year later I sold my Torch Red Stingray and lost my
        job. After many resumes submitted, later I worked as a Technicin for
        American Telephone and Telegraph as a muit-state circuit. Testing
        circuit to the business premesis I tested, found trouble, and
        dispatched ATT field technians for Pacific Bell, SBC, and later ATT.
        I worked all three shifts and retired early. Because of my
        engineering degree and initial talents with Intel 8085, 8088, and
        8086 Assembly Language. I learned DOS and Unix operating system.
      </h3>
      <h3>
        I begun writing Apple Swift, soon Apple Released the iPhone version
        in 2015 made some cute apps and tried to sell one on the Apple App
        Store. Then years ago started with Full Stack Software for websites.
        Then again purchased an iPhone and Apple created apps and submitted
        them to the Apple App Store. Without any sales frustrated I begun to
        write software for multiple ReactJS / NextJS learned what I needed
        and then in April the Corvette Stingray was revealed in Tustin,
        California. My love was started again and started learning by
        watching YouTube Corvette videos. And a couple years later now have
        The Corvette Web, The Corvette Journal, Chckered-Flag.com websites.
        My handle Cool Jimmy, now ten years old was adapted for Corvette and
        also have CoolJimmyCorvette.com.
      </h3>
      <h3 className="center">
        <p>References</p>
        <Link to="http://www.OpticalAutomation.com">   Optical Automation, LLC     </Link>

        <Link to="http://www.TheCorvetteJournal.com">   The Corvette Journal    </Link>
        <Link to="http://www.TheCorvetteWeb.com">The Corvette Web</Link>
        <Link to="http://www.TheCorvetteReporter.com">The Corvette Reporter</Link>
        and
        <Link to="http://www.Checkered-Flag.Com">Checkered-Flag.com </Link>
      </h3>
      <br />
      <br />

      <h2>
        <b> Update The TheCorvetteJournal.com Corvette Website</b>
        <b> Create An Index Of Race Tracks World Wide</b>

      </h2>
      <div className="center">   
      <div className="imagez">
        <img src="/Checkered.png" alt="Apple Watch" />
      </div>
      <p>
        Add places to drive your Corvette. Standard race tracks, WilliowSprings, Circuit of
        The Americas, Virginia International Raceway are examples people could "Track" drive
        their cars for fun and learn to be professional racers using their PDR, Performance Data Recorder.
        Also name it the "Race Track Directory.com"
        <Link to="http://www.TheCorvetteJournal.com">TheCorvetteJournal.com.</Link>
      </p>
      <br />
      <br />

      <h2>
        <b> The Checkered-Flag.com eCommerce Website</b>
      </h2>
      <div className="imagez">
        <img src="/Checkered.png" alt="Apple Watch" />
      </div>
      <p>
        The application is an eCommerce website with sports car items,
        clothes, and more ! This is one of three eCommerce future websites
        to include GoodDayMusic.com and also more. World Wide Web, Internet,
        <Link to="http://www.Checkered-Flag.com">Checkered-Flag.com.</Link>
      </p>
      <br />
      <br />
      <h2>
        <b> Wearable Software For Apple Watch Hardware</b>
      </h2>
      <h2>
        <b> The 2025 Corvette, Photo Album</b>
      </h2>
      <div className="imagez">
        <img src="/Watch.png" alt="Apple Watch" />
      </div>
      <p>
        The app display to show the beautiful 2025 Cheveolet Corvette
        vehicles. This app allows you to gave at beauty in its raw form.
        These 5400+ horsepower sports are fantastic. Get your app when
        released, stsy tuned. All Apple Watches, Pending availabity, Apple
        App Store.
      </p>
      <br />
      <br />
      <h2>
        <b> The Corvette Legacy, Photo Album</b>
      </h2>
      <div className="imagez">
        <img src="/Watch.png" alt="Apple Watch" />
      </div>
      <p>
        The app display to show the beautiful 2025 Cheveolet Corvette
        vehicles. This app allows you to gave at beauty in its raw form.
        These 5400+ horsepower sports are fantastic. Get your app when
        released, stsy tuned. All Apple Watches, Pending availabity, Apple
        App Store.
      </p>
      <br />
      <br />
      <h2>
        <b> The 2025 Corvette, App Quiz</b>
      </h2>
      <div className="imagez">
        <img src="/Watch.png" alt="Apple Watch" />
      </div>
      <p>
        The app display to show the beautiful 2025 Cheveolet Corvette
        vehicles. This app allows you to gave at beauty in its raw form.
        This app relates to C8 Corvette generation sports cars and relatted
        sport, track, and racing information. All Apple Watches, Pending
        availabity, Apple App Store.
      </p>
      <br />
      <br />
      <h2>
        <b> The Corvette Legacy, App Quiz </b>
      </h2>
      <div className="imagez">
        <img src="/Watch.png" alt="Apple Watch" />
      </div>
      <p>
        The apps give the client Apple Watch wearer a display to show the
        beautiful Cheveolet Corvette vehicles and ask quewstions to test
        yuour knowledge. This app allows you to gave at beauty in its raw
        form. This app relates to C1 generation to C8 sports cars and
        relatted sport, track, and racing information. All Apple Watches,
        Pending availabity, Apple App Store.
      </p>
      </div>
        <h3>
          <b> References </b>
        </h3>
        <Link to="https://www.hagerty.com/media/maintenance-and-tech/lt6-breakdown-the-z06s-670-hp-v-8-is-a-landmark-achievement/          ">
          Reference: 1. Hagerty, The LT6 A Landmark Achievement
        </Link>
        <Link to="https://vette-vues.com/5-5l-dohc-v-8-engine-press-release/">
          2. Vette Vues Magazine
        </Link>
 
      <Footer />
</div> 
  
    <div className="col-3 ">
      <CarouselFlag />

      <OnPageZR1 />
      <SidebarZR1B />
    </div>
  
    </div>


    );
  }
