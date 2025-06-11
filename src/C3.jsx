import React from 'react';
import './styles/Page.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CarouselSting from './Stingray/CarouselSting';
//import ThemeSwitcher from "../ThemeSwitcher";
import OnPageSting from './Stingray/OnPageSting';
import CarouselFlag from './Stingray/CarouselFlag';
import SidebarSting1 from './Stingray/SidebarSting1';
import SidebarStingB from './Stingray/SidebarStingB';
import Navbar5 from './Navbar5';
import ReactPlayer from "react-player";

export default function C3() {
  return (
    <>
      <div className='rowPage'>
        <CarouselSting />
        <div className='col-3 '>
          <SidebarSting1 />
        </div>

        <div className='col-6'>
          <h2>
            <b>
              <i>Presenting </i>
            </b>
          </h2>

          <h1>
            <b> The  Corvette C3 </b>
          </h1>
          <Navbar5 />

          <Link to="/ZC8Histb">Corvette History</Link>


          <div className='responsive'>
            <div className='gallery100'>
              <a target='_blank' rel='noopener noreferrer' href='/C3logo'>
                <img
                  src='/C3logo.png'
                  alt='C2logo   '
                  width={600}
                  height={400}
                />
              </a>
            </div>
          </div>


          <p><b>   The 1963 C2 Corvette Logo    </b>                      </p>

          <p>
            n 1968, following the release of the third model of Corvette sports cars, some notable changes were made to the logo design.
            The circular shape that was present in previous iterations of the logo was removed, resulting in a new emblem without the circular background.
            The designers also adjusted the angle of the depicted flags to make them appear more stable and visually balanced. This modification aimed to 
            enhance the overall aesthetics and convey a sense of solidity and Stength.
          </p>

          <p>
            <b> Which C7 Generation Corvette To Buy </b>
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/shorts/oAvwbhirTVU"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </p>




          <div className='responsive'>
            <div className='gallery100'>
              <a target='_blank' rel='noopener noreferrer' href='/LT6'>
                <img
                  src='/c3.png'
                  alt='Cinque Terre'
                  width={600}
                  height={400}
                />
              </a>
              <h4>
                <div className='desc'>Source: Wikipedia.com</div>
              </h4>

            </div>
          </div>


          <p>
            The 2025 Chevrolet Corvette Sting is the most powerful Corvette ever
            produced. Here are some highlights:
          </p>
          <h3>
            <b> Performance </b>
          </h3>
          <p>
            <b> Engine:</b> The Corvette LT7 Sting engine features a 5.5L
            twin-turbocharged V8 engine with a flat-plane crankshaft,
            producing 1,064 horsepower and 828 lb-ft of torque.
          </p>
          <p>
            <b> Transmission: </b>It comes with an 8-speed dual-clutch eight
            speed transmission for lightning-fast gear shifts. Equipped also
            with left paddle only hold to lowest gear from any other for
            instant power from the engine.
          </p>
          <p>
            <b> 0-60 mph: </b> The Corvette Sting can accelerate from 0 to 60
            mph in just 2.6 seconds.
          </p>
          <p>
            <b> Top Speed: </b> It boasts a top speed of 233 mph, making it
            one of the fastest production cars ever.
          </p>
          <h3>
            <b> Design </b>
          </h3>
          <p>
            <b> Aerodynamics:</b> The Sting features cutting-edge aerodynamics
            with wide side air inlets, carbon-fiber elements, and a multitude
            of airflow and cooling features.
            <b>Exterior:</b>The design includes a sleek and aggressive look
            with quad center exhaust and available carbon-fiber trim.
            <b>Interior:</b> The cockpit is driver-centric with high-quality
            materials and bespoke options.
          </p>
          <h3>
            <b> Technology </b>
          </h3>
          <p>
            <b> Infotainment:</b>Standard wireless Apple CarPlay and Android
            Auto, with an available 14-speaker Bose Performance Series Sound
            system.
            <b> Performance App: </b>Provides real-time performance data and
            vehicle information. Built-in Wi-Fi Hotspot: Keeps you connected
            on the go.
          </p>
          <p>
            <b> Selective Magnetic Ride Control:</b>
            This advanced suspension system adjusts damping to provide a
            smooth ride on various road conditions. The six modes are Z mode,
            My Mode, Tour, Sport, Track, and Weather.
          </p>
          <b> Advanced Infotainment: </b>The Stingray includes a
          state-of-the-art infotainment system with navigation, Bluetooth
          connectivity, and more.
          <h3>
            <b> Pricing Starting MSRP: </b>
          </h3>
          <p>
            The base model starts at around <b> $174,995 </b>. The
            <Link to='/Sting'>
              Source: Wikipedia.com Sports Car <br />
            </Link>
            is designed to deliver an exhilarating driving experience with
            cutting-edge technology and stunning design.
          </p>

          <div className='references'>
            <h1>References</h1>
            <h3>
              <a Link to='https://en.wikipedia.org/wiki/Chevrolet_Corvette_Sting'>
                Corvette Sting
              </a>
            </h3>
          </div>
            <Footer />
        </div>

        <div className='col-3 '>
          <CarouselFlag />

          <OnPageSting /> <SidebarStingB />
        </div>
        <Footer />
      </div>
    </>
  )
}
